import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
}from '@/components/ui/sheet'
import { Sidebar } from "./Sidebar";
import { SidebarRoutes } from "./SidebarRoutes";

export const MobileSidebar=()=>{
    return(
        <Sheet>
            <SheetTrigger className="md:hidden pr-5 hover:opacity-75 transition">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white">
                <SheetClose asChild>
                    <Sidebar />
                </SheetClose>
            </SheetContent>
        </Sheet>
    )
}