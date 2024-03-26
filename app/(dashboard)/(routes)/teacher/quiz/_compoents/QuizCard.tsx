import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface quizCardProps{
    id?:string
    course:string 
    title:string 
    timer:number 
    imgUrl:string
}

const QuizCard=({
    id,
    course,
    title,
    timer,
    imgUrl
}:quizCardProps) =>{
  return (
    <Link 
        href={`/quiz/${id}`}
    >
        <div className='group hover:scale-105 hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full'>
            <div className='relative w-fufll aspect-video rounded-md overflow-hidden'>
                <Image 
                    fill
                    className="object-cover"
                    alt={title}
                    src={imgUrl}
                />
            </div>
            <div className='flex flex-col p-2'>
                <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                    <span className='font-bold capitalize'>Course</span>: {course}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                   <span className='font-bold capitalize'>Quiz Title</span>: {title}
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                   <span className='font-bold capitalize'>Time</span>: {timer} minutes
                </p>
            </div>
        </div>
    </Link>
  )
}

export default QuizCard