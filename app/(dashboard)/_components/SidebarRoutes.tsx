"use client"
import {BarChart, Compass, Layout, List, MonitorPlay, FileQuestion, MessageSquare, BookCopy} from 'lucide-react'
import { SidebarItem } from './Sidebar-item'
import { usePathname } from 'next/navigation'
import {SheetClose} from '@/components/ui/sheet'

const guestroutes=[
    {
        icon: Layout,
        label:"Dashboard",
        href:"/"

    },
    {
        icon: Compass,
        label:"Browse",
        href:"/search"

    },
    {
        icon: BookCopy,
        label:"Purchased Courses",
        href:"/purchased"

    }
]

const teacherRoutes=[
    {
        icon: List,
        label:"Courses",
        href:"/teacher/courses"

    },
    {
        icon: BarChart,
        label:"Analytics",
        href:"/teacher/analytics"

    },
    {
        icon: MonitorPlay,
        label:"Online Class",
        href:"/teacher/online-class"

    },
    {
        icon: MessageSquare,
        label:"Forums",
        href:"/teacher/forum"

    },
    {
        icon: FileQuestion,
        label:"Quiz",
        href:"/teacher/quiz"

    }
    
]
export const SidebarRoutes=()=>{
    const pathname=usePathname()
    const isTeacherPage=pathname.includes('/teacher')
    const routes=isTeacherPage? teacherRoutes :guestroutes    
    return(
        <div className="flex flex-col w-full">
            {
                routes.map((route)=>(
                    
                        <SidebarItem 
                            key={route.href}
                            icon={route.icon}
                            label={route.label}
                            href={route.href}
                        />
                    
                ))
            }
        </div>
    )
}