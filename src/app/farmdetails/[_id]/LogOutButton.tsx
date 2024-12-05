// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { LogOut } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// export default function LogoutButton() {
//   const [open, setOpen] = useState(false)
//   const router = useRouter()

//   const handleLogout = () => {
//     document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
//     router.push('/')
//   }

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button variant="outline">
//           <LogOut className="mr-2 h-4 w-4" /> Déconnexion
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-56">
//         <div className="grid gap-4">
//           <div className="space-y-2">
//             <h4 className="font-medium leading-none">Confirmer la déconnexion</h4>
//             <p className="text-sm text-muted-foreground">
//               Êtes-vous sûr de vouloir vous déconnecter ?
//             </p>
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <Button variant="outline" onClick={() => setOpen(false)}>Non</Button>
//             <Button onClick={handleLogout}>Oui</Button>
//           </div>
//         </div>
//       </PopoverContent>
//     </Popover>
//   )
// }

