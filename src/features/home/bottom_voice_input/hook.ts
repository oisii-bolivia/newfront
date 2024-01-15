import { axiosClient } from "@/lib/api_client";
import { blobToBase64 } from "@/util/blob_to_base64";
import { useEffect, useRef, useState } from "react";

const mimeType = "audio/webm";

export const useTranscriptionRecorder = () => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getMicPermision();
  }, []);

  const getTranscription = async (base64: string) => {
    try {
      const res = await axiosClient.post("/api/openai/transcribe", {
        audio: base64,
      });
      const text = res.data.result as string;
      setText(text);
    } catch (error) {
      console.log(error);
    }
  };

  const getMicPermision = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    setAudioChunks([]);
    if (stream == null || !permission) return;
    const media = new MediaRecorder(stream, { mimeType });
    mediaRecorder.current = media;

    mediaRecorder.current.start();
    setIsRecording(true);
    let localAudioChunks: Blob[] = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    if (mediaRecorder.current == null) return;
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      blobToBase64(audioBlob, getTranscription);
      setIsRecording(false);
    };
  };

  return {
    startRecording,
    stopRecording,
    text,
    isRecording,
    permission,
  };
};
