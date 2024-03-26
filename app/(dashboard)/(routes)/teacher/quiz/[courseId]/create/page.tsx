'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface valueProps{
    title:string 
    desc:string 
    time:number

}

function CreateQuiz({
    params
}:{params:{courseId:string}}) {
    const [value,setValue]=useState<valueProps>({
        title:"",
        desc:"",
        time:0,
    })
    const [questions,setQuestions]=useState([])
    const [answer,setAnswers]=useState([])
  return (
    <div className='p-6'>
         <Link 
            href={`/teacher/quiz/${params.courseId}`}
            className="flex items-center text-sm hover:opacity-75 transition mb-6"
        >
            <ArrowLeft className="h-4 w-4 mr-2"/>
            Back to course Quizzes
        </Link>
        <span className='font-bold uppercase'>Create Quiz</span>
        <form onSubmit={(event)=>{
            event.preventDefault()
            console.log(value)
            }} className='mt-5'>
            <div className=''>
                <Input
                    placeholder='Quiz Title ... '
                    onChange={(event)=>setValue({...value,title:event.target.value})}
                    className='max-w-sm mt-2'
                />
                <Input
                    placeholder='Quiz Description ... '
                    onChange={(event)=>setValue({...value,desc:event.target.value})}
                    className='max-w-sm mt-2'
                />
            </div>
            <div className='border my-2 p-2 w-full md:w-2/4'>
                <div className='p-3 flex items-center space-x-3'>
                    <span className='font-bold text-xl'>1</span>
                    <Input 
                        placeholder='Quiz Question'
                        onChange={(event)=>{}}
                        className='max-w-sm'
                    />
                    </div>
                <div className='border w-3/4 rounded-md mx-auto my-2'>
                    <div className='p-3 flex items-center space-x-3'>
                        <span>A</span>
                        <Input 
                            placeholder='Enter Response'
                            value=""
                            className='max-w-sm'
                        />
                    </div>
                    
                </div>
                <div className='p-3 flex items-center space-x-3'>
                        <span>Answer</span>
                        <Input 
                            placeholder='Right Answer'
                            value=""
                            className='max-w-sm'
                        />
                    </div>
                <Button type='submit' className='max-w-xs mt-2'>Save</Button>
            </div>
            <Button>
                Submit Quiz
            </Button>
        </form>
        
    </div>
  )
}

export default CreateQuiz