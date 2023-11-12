'use client'

import { UserButton, auth, useAuth, useClerk } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { SearchInput } from "./search-input"
import { isTeacher } from "@/lib/teacher"

export const NavbarRoutes=()=>{
    const {userId}=useAuth()
    const pathname=usePathname()

    const isTeacherPage=pathname?.startsWith('/teacher')
    const isCoursePage=pathname?.includes('/courses')

    const isSearchPage=pathname === '/search'

    const {user}=useClerk()
    return(
        <>
            {isSearchPage && (
                <div className="hidden md:block">
                    <SearchInput />
                </div>
            )}
            <div className="flex gap-x-2 ml-auto">
                {
                    isTeacherPage || isCoursePage ?(
                        <Link href="/">
                            <Button size="sm" variant="ghost">
                                <LogOut className="h-4 w-4 mr-2" />
                                Exit
                            </Button>
                        </Link>
                    ):isTeacher(userId)? (
                        <Link href='/teacher/courses'>
                            <Button size="sm" variant="ghost">
                                Teacher Mode
                            </Button>  
                        </Link>
                    ):null
                }
                <div className="flex items-center space-x-2 cursor-text">
                    <span className="text-sm text-blue-500">{user?.firstName}</span>
                    <span className="text-sm text-blue-500">{user?.lastName}</span>
                </div>
                <UserButton afterSignOutUrl="/"/>
            </div>
        </>
    )
}