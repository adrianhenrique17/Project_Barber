import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog.tsx"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"
import Image from "next/image"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
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
        <Image src="/google.svg" alt="Google" width={20} height={20} />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
