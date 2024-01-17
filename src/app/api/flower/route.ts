import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const userId = body.userId;

  console.log(body);

  if (!userId)
    return NextResponse.json({ msg: "user id is not found" }, { status: 400 });

  const flower = await prisma.flower.upsert({
    create: {
      userId,
      talkCount: 1,
    },
    update: {
      talkCount: { increment: 1 },
    },
    where: {
      userId,
    },
  });

  return NextResponse.json({ flower }, { status: 200 });
}

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const userId = params.get("id");

  if (!userId)
    return NextResponse.json({ msg: "user id is not found" }, { status: 400 });

  const flower = await prisma.flower.findUnique({
    where: {
      userId,
    },
  });

  return NextResponse.json({ flower }, { status: 200 });
}
