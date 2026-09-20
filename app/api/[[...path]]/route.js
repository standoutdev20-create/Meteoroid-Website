import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { error: "This is a static website. No API endpoints are used." },
    { status: 404 },
  );
}
