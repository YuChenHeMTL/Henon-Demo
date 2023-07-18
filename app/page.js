"use client"
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Input from './components/Input'
import Visualizer from './components/Visualizer';

import 'bootstrap/dist/css/bootstrap.css';
import { config } from './config'

export default function Home() {
  const inputDataLabels = config;

  const [data, setData] = useState({})
  const [destination, setDestination] = useState("")

  function handleSelect(text) {
    setDestination(text)
    setData({})
  }

  async function handleSubmit(event, data) {
    event.preventDefault();
    const result = await fetch("/api/destination", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    }).catch((err) => console.log(err))
    .then((res) => res.json());
    
    if (result.error) {
      alert(result.error);
    }
    setData(result.data);
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to Hénon data parser!
      </h1>
      {!destination && (
        <h2>
          Please begin by selecting a third-party platform to parse data from.
        </h2>
      )}
      <Input data={inputDataLabels} handleSubmit={handleSubmit} handleSelect={handleSelect}/>
      {Object.keys(data).length > 0 && (
        <Visualizer data={data} destination={destination}/>
      )}
    </main>
  )
}
