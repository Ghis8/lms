'use client'

import { ConfirmModal } from "@/components/modals/confirm-modal"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

interface ActionsProps{
    disabled:boolean
    courseId:string 
    isPublished:boolean
}
export const Actions=({
    disabled,
    courseId,
    isPublished
}:ActionsProps)=>{
    const [isLoading,setIsLoading]=useState(false)
    const router=useRouter()
    const onDelete=async()=>{
        try {
            setIsLoading(true)

            await axios.delete(`/api/courses/${courseId}`)
            toast.success('Course Deleted!')
            router.refresh()
            router.push(`/teacher/courses`)
        } catch (error) {
            toast.error('Something went wrong')
        }finally{
            setIsLoading(false)
        }
    }

    const onClick=async()=>{
        try {
            setIsLoading(true)
            if(isPublished){
                await axios.patch(`/api/courses/${courseId}/unpublish`)
                toast.success('Course unpublished')
            }else{
                await axios.patch(`/api/courses/${courseId}/publish`)
                toast.success('Course published')
            }
        } catch (error) {
            toast.error('Something Went Wrong')
        }finally{   
            setIsLoading(false)
        }
        router.refresh()
    }
    return(
        <div className="flex items-center gap-x-2">
            <Button
                onClick={onClick}
                disabled={disabled || isLoading}
                variant="outline"
                size="sm"
            >
                {
                    isPublished? "Unpublished":"publish"
                }
            </Button>
            <ConfirmModal onConfirm={onDelete}>
                <Button size="sm" disabled={isLoading}> 
                    <Trash 
                        className="h-4 w-4"
                    />
                </Button>
            </ConfirmModal>
        </div>
    )
}