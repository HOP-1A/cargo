import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async(req: Request) => {
    try{
      const url = new URL(req.url);
      const userId = url.searchParams.get("userId"); 

      if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
      }

      const user = await prisma.users.findUnique({
        where: {
          clerkId: userId, 
        },
      });

      const number = user?.phoneNumber

      if(!number){
        return NextResponse.json('No Number')
      }

        const packages = await prisma.packages.findMany({
            where: {
              OR: [
                { receiverPhoneNumber: String(number) },
                { senderPhoneNumber: String(number) }
              ]
            }
          });

        if(!packages) return NextResponse.json({message: 'Package not found'})

        return NextResponse.json({packages})
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}