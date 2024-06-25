import {useEffect,useRef} from 'react'
import {useParams} from "react-router-dom"
import { Terminal } from '@xterm/xterm'
import '@xterm/xterm/css/xterm.css';

 const Terminals =() => {
  const terminalRef = useRef(null);


  useEffect(()=>{
    const term = new Terminal();
    term.open(terminalRef.current);
    term.write(`terminal ${params.os} \x1B[1;3;31mxterm.js\x1B[1m $`)
  },[]);
  const params=useParams()
  console.log(params);


  return (
    <div ref={terminalRef} className='w-[100vw] h-[100vh] flex justify-center  items-center terminal' ></div>
  )
}

export default Terminals