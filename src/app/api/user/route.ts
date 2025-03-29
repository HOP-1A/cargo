import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const PUT = async (req: Request) => {
    try {
      const body = await req.json();
  
      const userId = body.userId;
      const phoneNumber = body.number
      const email = body.email
      const location = body.location
      const name = body.name
  
      const result = await prisma.users.update({
        where: {
          id: userId
        },
        data: {
          name: name,
          phoneNumber: phoneNumber,
          email: email,
          location: location
        } 
      });
      return NextResponse.json('Done');
    } catch (err) {
      return NextResponse.json(err, { status: 500 });
    }
  };