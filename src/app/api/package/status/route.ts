import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async(req: Request) => {
    try{

        const Packages = await prisma.packages.findMany({});

        if(!Packages) return NextResponse.json({message: 'Package not found'})

        let pending = 0
        let delivered = 0
        let inTransit = 0

        Packages.forEach(obj => {
            if (obj.status === 'Pending') {
                pending += 1;
            }else if(obj.status === 'Delivered'){
                delivered += 1
            }else if(obj.status === 'In Transit'){
                inTransit += 1 
            }
        });

        return NextResponse.json({message: 'Done', info: [{"pending": pending}, {"delivered": delivered}, {"inTransit": inTransit}]})
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}