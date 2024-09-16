import { Logo } from "./Logo"
import { SidebarRoutes } from "./SidebarRoutes"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
}from '@/components/ui/sheet'

export const Sidebar=()=>{
    return(
        <div className="h-full border-r flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
    )
}