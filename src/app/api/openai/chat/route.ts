import { maxToken, openai } from "@/config/api";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const userMessage = body.message;
  const userId = body.userId;

  if (userMessage == null || userMessage == "")
    return NextResponse.json({ msg: "テキストがありません" }, { status: 400 });

  const comp = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    max_tokens: maxToken,
    messages: [
      {
        role: "system",
        content: "貴方は人を癒す為のチャットボットです。",
      },
      { role: "user", content: userMessage },
    ],
  });

  const result = comp.choices[0].message.content;

  console.log(result);

  if (result == null || result === "")
    return NextResponse.json({ msg: "message not found" }, { status: 400 });

  const messages = await prisma.message.create({
    data: {
      message: result,
      userId: userId,
    },
  });

  return NextResponse.json({ messages }, { status: 200 });
}
