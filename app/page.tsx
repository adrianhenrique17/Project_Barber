"use client"

import { Button } from "./_components/ui/button"
import Header from "./_components/Header"
import { useState } from "react"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Adrian</h2>
        <p>21/08/2025</p>
        <div className="mt-5 flex items-center gap-6">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Description of image"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
