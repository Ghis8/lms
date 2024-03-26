import { quizzes } from '@/constant'
import React from 'react'
import QuizCard from './_compoents/QuizCard'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import MyCourses from '../courses/_components/MyCourses'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import Image from 'next/image'

async function QuizPage() {
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
  return (
    <div className='p-6'>
        {
            courses.length > 0 ?
            <>
                <div className="flex items-center py-4 justify-between">
                    <Input
                        placeholder="Filter Courses..."
                        value=""
                        className="max-w-sm"
                    />
                    {/* <Link href="/teacher/quiz/create">
                        <Button>
                            <PlusCircle className='h-4 w-4 mr-2'/>
                            Create Quiz
                        </Button>
                    </Link> */}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        courses.map(course=>(
                        <Link 
                            href={`/teacher/quiz/${course.id}`}
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
            </>:
            <div className='text-center'>
                <span className='text-center text-xl text-gray-400'>No Courses</span>
            </div>
        }
        
        
    </div>
  )
}

export default QuizPage