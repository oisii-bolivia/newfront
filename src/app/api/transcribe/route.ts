import { openai } from "@/config/api";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.file) {
    return NextResponse.json({ message: "file not found" });
  }

  const transcript = await openai.audio.transcriptions.create({
    file: body.file,
    model: "whisper-1",
    language: "ja",
  });

  const result = transcript.text;

  return NextResponse.json({ result }, { status: 200 });
}
