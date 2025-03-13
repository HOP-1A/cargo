import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    try{
        const body = await req.json()

        const user = await prisma.users.findUnique({
            where: {
                phoneNumber: String(body.phoneNumber)
            }
        })
        if(!user) return NextResponse.json({message: 'User not found'})

        if(user.password != body.password) return NextResponse.json({message: 'Password is invalid'})

        return NextResponse.json({message: 'logged in', info: user})
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}