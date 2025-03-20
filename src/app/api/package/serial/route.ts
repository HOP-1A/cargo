import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
      const body = await req.json();
  
      const packageData = await prisma.packages.findUnique({
        where: {
          packageNumber: String(body.packageNumber),
        },
        select: {
          status: true,
          arrivedAt: true,
          receivedAt: true,
          createdAt: true,
          destination: true
        },
      });
  
      if (!packageData) {
        return NextResponse.json('Package not found');
      }

      return NextResponse.json({ packageData });
    } catch (err) {
      return NextResponse.json(err, { status: 500 });
    }
  };
  