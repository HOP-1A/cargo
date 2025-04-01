import { prisma } from "@/lib/prisma"; 
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
 
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId"); 

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

   
    const user = await prisma.users.findUnique({
      where: {
        id: userId, 
      },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch user info", details: `error: ${err}` },
      { status: 500 }
    );
  }
};

export const PUT = async (req: Request) => {
  try {

    const body = await req.json();
    console.log(body);

    const { userId, name, email, phoneNumber, location } = body;
    if (!userId || !name || !email || !phoneNumber) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedUser = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        name,
        email,
        phoneNumber,
        location: location ?? "", 
      },
    });

    return NextResponse.json({
      message: "User info updated successfully!",
      user: updatedUser, 
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to update user info", details:`error: ${err}` },
      { status: 500 }
    );
  }
};

// export const POST = async (req: Request) => {
//   try{
//     const body = await req.json()

//     const name = body.name
//     const phoneNumber = body.phoneNumber
//     const email = body.email
//     const password = body.password

//     await prisma.users.create({
//       data: {
//         name: name,
//         phoneNumber:phoneNumber,
//         email: email,
//         password:password
//       }
//     })

//     return NextResponse.json("Created")
//   }catch(err){
//     return NextResponse.json(err, {status: 500})
//   }
// }
