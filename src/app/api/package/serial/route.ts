import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    try{
        const body = await req.json()

        const packages = await prisma.packages.findUnique({
            where: {
                packageNumber: String(body.packageNumber)
            }
        })
        if(!packages) return NextResponse.json({message: 'Package not found'})

        return NextResponse.json({packages})
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}