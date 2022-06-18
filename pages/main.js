import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Controls from "../components/controls"
import Display from '../components/display'

export default function Home() {

  return (
    <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
      <Display></Display>
      <Controls></Controls>
    </div>
  )
}
