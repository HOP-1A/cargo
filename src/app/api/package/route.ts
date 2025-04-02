import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async (_req: Request) => {
    try {
        const packages = await prisma.packages.findMany();

        if (!packages) return NextResponse.json({ message: 'Package not found' })

        return NextResponse.json({ packages })
    } catch (err) {
        return NextResponse.json(err, { status: 500 })
    }
}

export const POST = async (req: Request) => {
    try{
        const body = await req.json()

        const packageId = body.packageId
        const deliveryLocation = body.deliveryLocation

        const deliverence = await prisma.packages.update({
            where: {
                id:packageId
            },
            data: {
                delivery: true,
                deliveryLocation: deliveryLocation    
            }
        })
        
        return NextResponse.json('Done')
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}