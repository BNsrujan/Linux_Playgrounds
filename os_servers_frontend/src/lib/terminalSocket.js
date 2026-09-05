import { socketUrl } from "../api/client";

export const connectTerminal = (sessionId, handlers) => {
  const socket = new WebSocket(socketUrl(sessionId));
  let opened = false;

  socket.onopen = () => {
    opened = true;
  };

  socket.onmessage = (event) => {
    let message;
    try {
      message = JSON.parse(event.data);
    } catch {
      return;
    }

    if (message.type === "output") handlers.onOutput?.(message.data);
    else if (message.type === "ready") handlers.onReady?.(message);
    else if (message.type === "exit") handlers.onExit?.(message.reason);
    else if (message.type === "error") handlers.onError?.(message.message);
  };

  socket.onerror = () => {
    if (!opened) handlers.onError?.("Could not reach the terminal service");
  };

  socket.onclose = (event) => {
    handlers.onClose?.(event.reason || "connection closed", event.code);
  };

  const post = (payload) => {
    if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify(payload));
  };

  return {
    socket,
    sendInput: (data) => post({ type: "input", data }),
    sendResize: (cols, rows) => post({ type: "resize", cols, rows }),
    close: () => socket.close(1000, "client left"),
  };
};
