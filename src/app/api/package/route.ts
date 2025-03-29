import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (_req: Request) => {
    try {
        const packages = await prisma.packages.findMany();

        if (!packages) return NextResponse.json({ message: 'Package not found' })

        return NextResponse.json({ packages })
    } catch (err) {
        return NextResponse.json(err, { status: 500 })
    }
}