import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async(req: Request) => {
    try{

        const Packages = await prisma.packages.findMany({});

        if(!Packages) return NextResponse.json({message: 'Package not found'})

        return NextResponse.json({message: 'Done', info: Packages})
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}