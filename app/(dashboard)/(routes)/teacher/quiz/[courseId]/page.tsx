import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { redirect, useParams } from 'next/navigation'
import React from 'react'

async function CourseIdPage({
  params
}:{
  params:{courseId:string}
}) {
    const {userId}=auth()
    if(!userId) return redirect('/')
    const course=await db.course.findUnique({
      where:{
        id:params.courseId,
        userId
      },
      include:{
        quizzes:{
          orderBy:{
            title:'asc'
          }
        }
      }
    })
    if(!course)return redirect('/')
    console.log("Course=>",course)
  return (
    <div className='p-6'>
        {
          course.quizzes.length > 0 ? 
          <div className=''>
              <div className="flex items-center py-4 justify-between">
                <Input
                    placeholder="Filter courses..."
                    value=""
                    onChange={(event) =>{}
                        
                    }
                    className="max-w-sm"
                />
                <Link href={`/teacher/quiz/${course.id}/create`}>
                    <Button>
                        <PlusCircle className='h-4 w-4 mr-2'/>
                        Create Course
                    </Button>
                </Link>
              </div>
          </div>: 
          <div className='text-center'>
            <div className='flex py-4 justify-end'>
              <Link href={`/teacher/quiz/${course.id}/create`}>
                  <Button>
                      <PlusCircle className='h-4 w-4 mr-2'/>
                      Create Course
                  </Button>
              </Link>
            </div>
            <span className='text-gray-400'>No Quiz Available</span>
          </div>

        }
    </div>
  )
}

export default CourseIdPage