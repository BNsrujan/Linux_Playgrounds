import { useEffect, useRef } from "react";
import "@xterm/xterm/css/xterm.css";
import { Terminal } from "@xterm/xterm";
import { useParams } from "react-router-dom";
import zorin from "../constants/neofetch";
import axios from "axios";
import { FitAddon } from '@xterm/addon-fit';


function Terminals() {
  const terminalRef = useRef(null);
  
  const param = useParams();
  
useEffect(() => {
  const term = new Terminal({
    cursorBlink: true,
    cursorStyle: "bar",
    theme: {
      background: "#1e1f1e",
      foreground: "#ffffff",
      cursor: "#ffffff",
    },
    rows:64,
    fontSize: 14,
    fontFamily: "Ubuntu Mono, monospace",
    scrollOnUserInput: true,
  });

  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);
  term.open(terminalRef.current);
  fitAddon.fit();
  term.focus();

  term.write(zorin);
  term.write(`\r\n${param.os}@ubuntu: $ `);

  let currentInput = "";

  const resizeObserver = new ResizeObserver(() => {
    fitAddon.fit();
  });

  resizeObserver.observe(terminalRef.current);

  term.onData(async (data) => {
    if (data === "\r") {
      term.write("\r\n");

      if (!currentInput.trim()) {
        term.write(`${param.os}@ubuntu: $ `);
        return;
      }
      if(currentInput == "clear"){
        term.clear();
        term.write(zorin);
        term.write(`\r\n${param.os}@ubuntu: $ `);
        return;
      }
      if(currentInput == "exit"){
        term.dispose();
        return;
      }

      try {
        const res = await axios.post("http://localhost:5000/api/termincal", {
          command: currentInput,
          os: param.os,
        });
        term.write(res.data.output || res.data || "Command executed successfully");
      } catch (err) {
        term.write(`Error: ${err.message}`);
      }

      currentInput = "";
      term.write(`\r\n${param.os}@ubuntu: $ `);
      return;
    }

    if (data === "\x7f") {
      if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        term.write("\b \b");
      }
      return;
    }

    currentInput += data;
    term.write(data);
  });

  return () => {
    resizeObserver.disconnect();
    term.dispose();
  };
}, [param.os]);


  return (
    <div
      className="terminal xterm xterm-container h-full w-full"
      ref={terminalRef}
    >
    
    </div>
  );
}

export default Terminals;
