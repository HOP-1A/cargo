import { prisma } from "@/lib/prisma";

export const POST = async(req: Request) => {
    try{
        const body = await req.json()
      
          const newPackages = await prisma.packages.create({
            data: body.packages,    
          });

          return new Response("Done");
    }catch(err){
        return new Response('Internal Server Error', { status: 500 });
    }
}