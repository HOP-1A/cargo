import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    try{
        const body = await req.json()

        const Packages = await prisma.packages.findMany({
            where: {
              OR: [
                { receiverPhoneNumber: String(body.phoneNumber) },
                { senderPhoneNumber: String(body.phoneNumber) }
              ]
            }
          });

        if(!Packages) return NextResponse.json({message: 'Package not found'})

        return NextResponse.json({message: 'logged in', info: Packages})
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}