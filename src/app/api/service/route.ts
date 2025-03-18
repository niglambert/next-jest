// src/app/api/service/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((resolve) => setTimeout(() => resolve(), 1000));
  return NextResponse.json({ message: "Fetched Data" });
}
