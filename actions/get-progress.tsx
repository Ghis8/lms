import { db } from "@/lib/db"

export const getProgress=async(
    userId:string,
    courseId:string
):Promise<number>=>{
    try {
        const publisehdChapters=await db.chapter.findMany({
            where:{
                courseId,
                isPublished:true
            },
            select:{
                id:true
            }
        })
    const publishedChapterIds=publisehdChapters.map((chapter)=>chapter.id)
    
    const validCompletedchapters=await db.userProgress.count({
        where:{
            userId,
            chapterId:{
                in:publishedChapterIds
            },
            isCompleted:true
        }
    })

    const progressPercentage=(validCompletedchapters/publisehdChapters.length) * 100
    return progressPercentage
    } catch (error) {  
        console.log("[GET_PROGRESS]",error)  
        return 0      
    }
}