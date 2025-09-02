import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { MenuIcon, HomeIcon, CalendarIcon, LogOutIcon } from "lucide-react"
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
import SidebarSheet from "./sidebar-sheet.tsx"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image alt="fswbarber" src="/logo.png" height={18} width={120} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
