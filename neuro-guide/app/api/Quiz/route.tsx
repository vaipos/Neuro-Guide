import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "./schema";

export async function POST(request: NextRequest) {
  const reqBody = await request.json();

  const parsedBody = {
    ...reqBody,
    question1: Number(reqBody.question1),
    question2: Number(reqBody.question2),
    question3: Number(reqBody.question3),
    question4: Number(reqBody.question4),
    question5: Number(reqBody.question5),
    question6: Number(reqBody.question6),
    question7: Number(reqBody.question7),
    question8: Number(reqBody.question8),
  };

  const valid = schema.safeParse(parsedBody);

  if (!valid.success) {
    console.log("AYO NO");
    return NextResponse.json({ error: "" });
  }

  const {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
  } = parsedBody;

  const newResponse = await prisma.userResponse.create({
    data: {
      username: "oyo",
      Question1: question1,
      Question2: question2,
      Question3: question3,
      Question4: question4,
      Question5: question5,
      Question6: question6,
      Question7: question7,
      Question8: question8,
      Diagnosis: 101,
    },
  });

  return NextResponse.json(newResponse, { status: 201 });
}