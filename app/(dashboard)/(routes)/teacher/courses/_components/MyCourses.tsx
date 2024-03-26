import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'


interface quizCardProps{
  id?:string
  course?:string 
  title?:string 
  imgUrl?:string
  href?: string
}
const  MyCourses=async({
  id,
  course,
  title,
  href,
  imgUrl
}:quizCardProps) => {

  const {userId}=auth()
  if(!userId) return redirect('/')
  
  const courses=await db.course.findMany({
    where:{
      userId
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  // console.log("Course=>",courses)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
        courses.map(course=>(
          <Link 
            href={`/`}
            key={course.id}
          >
            <div className='group hover:scale-105 hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full'>
                <div className='relative w-fufll aspect-video rounded-md overflow-hidden'>
                    <Image 
                        fill
                        className="object-cover"
                        alt={course.title!}
                        src={course.imageUrl!}
                    />
                </div>
                <div className='flex flex-col p-2'>
                    <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                        <span className='font-bold capitalize'>Course</span>: {course.title}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      <span className='font-bold capitalize'>Price</span>: {course.price}
                    </p>
                    
                </div>
            </div>
          </Link>
        ))
      }
      
    </div>
    
  )
}

export default MyCourses