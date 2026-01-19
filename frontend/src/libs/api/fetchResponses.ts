import { InterviewResponse } from "@/types/interviewResponse";

export async function fetchResponses(): Promise<InterviewResponse[]> {
  const res = await fetch("http://localhost:3000/api/responses");

  if (!res.ok) {
    throw new Error("Failed to fetch responses");
  }

  return res.json();
}