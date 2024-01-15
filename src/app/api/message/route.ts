import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const userId = params.get("id");

  console.log(params);

  if (!userId)
    return NextResponse.json({ msg: "user id is not found" }, { status: 400 });

  const messages = await prisma.message.findMany({
    where: {
      userId,
    },
  });

  return NextResponse.json({ messages }, { status: 200 });
}
