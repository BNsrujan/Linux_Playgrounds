import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

const Terminals = () => {
  const terminalRef = useRef(null);
  const params = useParams();

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      cursorStyle: 'block',
      convertEol: true,
      fontFamily: '"Ubuntu Mono", "DejaVu Sans "',
      fontSize: 14,
      lineHeight: 1.2,
      windowsMode: true,
      scrollOnUserInput:true,
      
      rescaleOverlappingGlyphs:true,
      theme: {
        background: '#000000',
        foreground: '#ffffff',
        cursor: '#ffffff',
        green: '#00ff00',
      },
      rows:59,
      cols:120,
      letterSpacing:3,
    });
    
    term.open(terminalRef.current);
    term.focus();

    // Ubuntu ASCII logo
    const ubuntuLogo = `
            _                         _ 
           | |                       | |
 _   _ _ __| |__   ___  _   _ _ __ __| |
| | | | '__| '_ \\ / _ \\| | | | '__/ _\` |
| |_| | |  | |_) | (_) | |_| | | | (_| |
 \\__,_|_|  |_.__/ \\___/ \\__,_|_|  \\__,_|
                                         
`;

    const sysInfo = `
${params.os || 'user'}@ubuntu
-----------------------------
OS: Ubuntu 22.04 LTS x86_64
Host: QEMU / Standard PC (i440FX + PIIX, 1996)
Kernel: 6.2.0-39-generic
Uptime: 12 mins
Packages: 1876 (apt)
Shell: bash 5.1
Resolution: 1920x1080
WM: GNOME
Theme: Yaru-dark
Icons: Yaru
Terminal: xterm
CPU: Intel i5-9400F (6) @ 2.90GHz
GPU: NVIDIA GTX 1050 Ti
Memory: 842MiB / 3950MiB

${params.os || 'user'}@ubuntu:~$ 
`;

    // Print with typing animation
    const fullOutput = ubuntuLogo + sysInfo;
    let i = 0;
    const interval = setInterval(() => {
      term.write(fullOutput[i]);
      i++;
      if (i >= fullOutput.length) clearInterval(interval);
    }, 5);

    term.onData((data) => {
      if (data === '\r') {
        term.write('\r\n' + `${params.os || 'user'}@ubuntu:~$ `);
      } else {
        term.write(data);
      }
    });

    return () => term.dispose();
  }, [params.os]);

  return (
    <div
      ref={terminalRef}
      className="xterm-container xterm terminal w-full h-full"
    >
      
    </div>
  );
};

export default Terminals;
