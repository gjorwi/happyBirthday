'use client'
import Image from "next/image";
import {fotos} from "@/utils/objetos";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen,setIsOpen]=useState(0)
  const [isStarted,setIsStarted]=useState(false)
  // const [count,setCount]=useState(1)
  const [width,setWidth]=useState(0)
  const [foto,setFoto]=useState(fotos[0].hre)
  const [IsMoreWidth,setIsMoreWidth]=useState(true)

  useEffect(()=>{
    const tempIsMoreWidth=screen.width>screen.height
    setIsMoreWidth(tempIsMoreWidth)
    window.onload = function() {
      var context = new AudioContext();
    }
    // alert(tempIsMoreWidth)
  },[])

  const abrir=(val)=>{
    setIsOpen(val)
  }
  const start=()=>{
    setIsStarted(true)
    const tagAudio=document.getElementById('mp3')
    tagAudio.play()
    let count=1;
    setInterval(()=>{
      if(count<16){
        setFoto(fotos[count].hre)
        count++
      }
    },6000)
  }


  return (
    <main className="flex h-screen overflow-hidden flex-col items-center justify-between bg-rose-300">
      <div className={"  drop-shadow-[4px_8px_1px_rgba(0,0,0,0.1)] relative flex h-full items-center"}>
        {/* {!isOpen&& */}
          <button onClick={()=>abrir(isOpen<2?isOpen+1:0)} className={(IsMoreWidth?' top-[420px] -right-14 ':(isOpen==2?' top-[520px] right-0 ':' top-[420px] right-0 '))+" absolute  z-30 rotate-12  bg-rose-600 rounded-lg py-3 border-4 border-white px-6"}>{isOpen==0?'Abrir':isOpen==1?'Siguiente':'Cerrar'}</button>
        {/* } */}
        <Image
          src="/img/cumpleaños.jpg"
          height={1024}
          width={740}
          onLoad={(e)=>setWidth(e.currentTarget.width)}
          alt="Tarjeta cumpleaño"
          className={(isOpen==0?'pasar3':'pasar ' )+(IsMoreWidth?' w-auto h-[100vh] max-h-full':' w-[90vw] h-auto')}
        />
        <div className={(isOpen==1?'pasar2':' pasar4 hidden')+(IsMoreWidth?' max-w-xl w-[850px] h-[100vh]':' w-[100vw] h-[100vh]') +' bg-white text-slate-800 relative p-8 text-justify justify-center items-center'}>
          <div className="absolute top-10 bg-rose-600 h-8 w-full "></div>
          <p className={(IsMoreWidth?' text-4xl p-20':' text-2xl p-10')}> Para la mujer mas hermosa de mi vida. <br/>Espero que hoy en tu día la pases muy bien.
          Te amo un monton..<br/> <strong>Mi Pinchura</strong>.</p>
        </div>
        <div className={(isOpen==2?'pasar2':' pasar4 hidden')+(IsMoreWidth?' max-w-xl h-[100vh]':' w-[100vw] h-[100vh]') +' bg-white text-slate-800 p-8 text-justify flex-col justify-center items-center'}>
          <p className="text-4xl p-5 px-20"><strong>Te Amo</strong>.</p>
          {!isStarted?
            <div onClick={start} className="flex justify-center flex-col items-center bg-pink-500 cursor-pointer text-white p-4 py-6 rounded-full">
              <p className=" text-justify"><strong>Presiona</strong></p>
              <p className=" text-justify"><strong>Aqui</strong></p>
            </div>
            :
            <div className="flex justify-center items-center w-full cursor-pointer p-4 overflow-hidden bg-rose-600 ">
              <div className="absolute top-10 bg-rose-600 h-8 w-full "></div>
              <div className="flex justify-center items-center h-[50vh] w-full bg-slate-700-500">
                {/* {fotos.map((foto,index)=>( */}
                  <Image 
                    src={foto}
                    height={500}
                    width={300}
                    onLoad={(e)=>setWidth(e.currentTarget.width)}
                    alt="Tarjeta cumpleaño"
                    className={'h-full object-cover w-full'}
                  />
                {/* ))} */}
              </div>
            </div>
          }
          <audio  id='mp3'>
            <source src="mp3/amor.mp3" type="audio/mpeg"/>
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </main>
  );
}
