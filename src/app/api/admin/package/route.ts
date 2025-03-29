import { prisma } from "@/lib/prisma";

export const POST = async (req: Request) => {
  try {
    const body = await req.json()

    await prisma.packages.create({
      data: body.packages,
    });

    return new Response("Done");
  } catch {
    return new Response('Internal Server Error', { status: 500 });
  }
}