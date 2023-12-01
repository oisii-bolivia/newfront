import { openai } from "@/config/api";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const audioFile: any = data.get("file");

  if (!audioFile) {
    return NextResponse.json({ message: "file not found" });
  }

  const transcript = await openai.audio.transcriptions.create({
    file: audioFile,
    model: "whisper-1",
    language: "ja",
  });

  const result = transcript.text;

  return NextResponse.json({ result }, { status: 200 });
}
