'use client'
import { useState } from "react";

export default function Home() {
  const [resultado, setResultado] = useState('');
  const [numero, setNumero] = useState('');
  const numRomanos = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ]

  const num = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1,
  ]

  const convertRomano = (numero) => {
    let romano = '';
    for (let i = 0; i < num.length; i++) {
      while (numero >= num[i]){
        romano += numRomanos[i]
        numero -= num[i]
      }
    }
    return romano
  }

  const handleGetConvert = e => {
    e.preventDefault();
    setNumero(e.target.value)
  }

  const handleConvert = () => {
    const numeroRomano = convertRomano(numero)
    setResultado(numeroRomano)
  }


  return (
    <main className="flex flex-col items-start justify-start min-h-screen py-2">
      <input type="number" placeholder="Agrega numero romano" onChange={handleGetConvert} value={numero}/>
      <button type="submit" onClick={handleConvert}>Convertir</button>
      <p>Resultado: {resultado}</p>
    </main>
  );
}
