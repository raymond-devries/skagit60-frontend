import { HTTP } from "@/http";

async function getAllPeaks() {
  const response = await HTTP.get("peaks");
  return response.data;
}

export { getAllPeaks };
