import courses from "./data.json";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const {title,description,level} = await request.json();
  courses.push(course);
  return NextResponse.json(courses);
}
