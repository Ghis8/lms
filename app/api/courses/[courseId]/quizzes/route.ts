import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { auth, authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function DELETE(
    req:Request,
    {params}:{params:{courseId:string,quizzId:string}}){
        try {
            // TODO: Delete Quizz cascade mode
        } catch (error) {
            console.log("[DELETE_QUIZ_ID]",error)
            return new NextResponse("Internal Error",{status:500})
        }
}

export async function PATCH(req:Request,
    {params}:{params:{courseId:string}}){
        try {
            const {userId}=auth()
            const {courseId}=params
            const values=await req.json()
            if(!userId || !isTeacher(userId)) return new NextResponse("Unauthorized",{status:401})
            const course=await db.course.update({
                where:{
                    id:courseId,
                    userId
                },data:{
                ...values
            }})
            return  NextResponse.json(course)
            
        } catch (error) {
            console.log("[QUIZ_ID_ERROR]",error)
            return new NextResponse("Internal Error",{status:500})
        }
}