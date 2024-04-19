'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOpen,setIsOpen]=useState(false)

  const abrir=()=>{
    setIsOpen(!isOpen)
  }


  return (
    <main className="flex h-screen  flex-col items-center justify-between bg-rose-300">
      <div className={"  drop-shadow-[4px_8px_1px_rgba(0,0,0,0.1)] relative "}>
        {/* {!isOpen&& */}
          <button onClick={abrir} className="absolute top-[420px] z-30 rotate-12 -right-14 bg-rose-600 rounded-lg py-3 border-4 border-white px-6">{isOpen?'Cerrar':'Abrir'}</button>
        {/* } */}
        <Image
          src="/img/cumpleaños.jpg"
          height={1024}
          width={740}
          alt="Tarjeta cumpleaño"
          className={(isOpen?'pasar':'pasar3 ' )+' w-[70vh] h-[100vh]'}
        />
        <div className={(isOpen?'pasar2':' pasar4')+' w-[70vh] h-[100vh] bg-white text-slate-800 p-8 text-justify justify-center items-center'}>
          <p className="text-4xl p-20"> Para la mujer mas hermosa de mi vida. <br/>Espero que hoy en tu día la pases muy bien.
          Te amo un monton..<br/> <strong>Mi Pinchura</strong>.</p>
        </div>
      </div>
    </main>
  );
}
