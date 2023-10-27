import { db } from "@/lib/db"

const {PrismaClient}=require('@prisma/client')
const database=new PrismaClient()

async function main(){
    const categories=await database.category.findMany({
        orderBy:{
            name:'asc'
        }   
    })
    
    try {
        await database.category.createMany({
            data:[
                {name:"Computer Science"},
                {name:"Music"},
                {name:"Fitness"},
                {name:"Accounting"},
                {name:"Engineering"},
                {name:"Filming"},
            ]
        })

        console.log("Success")
    } catch (error) {
        console.log("Error seeding the database categories",error)
    }finally{
        await database.$disconnect()
    }
}

main()