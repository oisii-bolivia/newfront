import { openai } from "@/config/api";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const filePath = "tmp/input.wav";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const base64Audio = body.audio;

  if (!base64Audio) {
    return NextResponse.json({ message: "audio not found" });
  }

  const audio = Buffer.from(base64Audio, "base64");

  try {
    fs.writeFileSync(filePath, audio);

    const readStream = fs.createReadStream(filePath);

    const transcript = await openai.audio.transcriptions.create({
      file: readStream,
      model: "whisper-1",
      language: "ja",
    });
    fs.unlinkSync(filePath);

    const result = transcript.text;

    return NextResponse.json({ result }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
