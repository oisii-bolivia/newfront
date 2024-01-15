export const blobToBase64 = (
  blob: Blob,
  callback: (base64: string) => void
) => {
  const reader = new FileReader();
  reader.onload = function () {
    const result = reader?.result;
    if (result == null) return;
    if (typeof result == "string") {
      const base64data = result.split(",")[1] as string;
      callback(base64data);
    }
  };
  reader.readAsDataURL(blob);
};
