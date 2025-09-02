"use client"

import { Button } from "./ui/button"
import {
  MenuIcon,
  HomeIcon,
  CalendarIcon,
  LogOutIcon,
  LogInIcon,
} from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search.ts"
import { Avatar, AvatarImage } from "./ui/avatar.tsx"
import Link from "next/link"
import Image from "next/image"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog.tsx"
import image from "next/image"
import { signIn, useSession, signOut } from "next-auth/react"
import link from "next/link"
const SidebarSheet = () => {
  const { data } = useSession()
  const handleLoginWithGoogleClick = () => signIn("google")
  const handleLogOutClick = () => signOut()

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="item-center flex justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>

            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login </h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <DialogHeader>
                  <DialogTitle>Faça Login na plataforma</DialogTitle>
                  <DialogDescription>
                    Conecte-se usando sua conta google
                  </DialogDescription>
                </DialogHeader>
                <Button
                  variant="outline"
                  className="gap-1 font-bold"
                  onClick={handleLoginWithGoogleClick}
                >
                  <Image
                    src="/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <SheetClose key={option.title} asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageURL}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button
          variant="ghost"
          className="justify-start gap-2"
          onClick={handleLogOutClick}
        >
          <LogOutIcon size={18} />
          Sair
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
