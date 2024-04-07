// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "./schema";

export async function POST(request: NextRequest) {
  
    try {
        // Parse the incoming JSON request body
        const reqBody = await request.json();

        // Create a new user response in the database using Prisma
        const newUserResponse = await prisma.userResponse.create({
            data: {
                username: reqBody.email,
                Question1: Number(reqBody.question1),
                Question2: Number(reqBody.question2),
                Question3: Number(reqBody.question3),
                Question4: Number(reqBody.question4),
                Question5: Number(reqBody.question5),
                Question6: Number(reqBody.question6),
                Question7: Number(reqBody.question7),
                Question8: Number(reqBody.question8),
                Diagnosis: 101,
            },
        });

        // Return a successful response with the newly created user response data
        return NextResponse.json(newUserResponse, { status: 201 });
    } catch (error) {
        // If an error occurs during the process, handle it and return an appropriate response
        console.error("Error creating user response:", error);
        return NextResponse.error();
    }
}
