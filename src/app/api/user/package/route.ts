import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    try{
        const body = await req.json()

        const packages = await prisma.packages.findMany({
            where: {
              OR: [
                { receiverPhoneNumber: String(body.phoneNumber) },
                { senderPhoneNumber: String(body.phoneNumber) }
              ]
            }
          });

        if(!packages) return NextResponse.json({message: 'Package not found'})

        return NextResponse.json({packages})
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}