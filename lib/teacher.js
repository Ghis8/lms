export const isTeacher=(userId)=>{
    // return userId === process.env.NEXT_PUBLIC_TEACHER_ID
    let ids=process.env.NEXT_PUBLIC_TEACHER_ID?.split(',')
    console.log(ids)
    return ids?.includes(userId)
}