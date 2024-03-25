import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "./schema";

export async function POST(request: NextRequest) {
    const reqBody = await request.json(); // Renamed req1 to reqBody for clarity
    const valid = schema.safeParse(reqBody);

    if (!valid.success){
        return NextResponse.json({error: ""});
    }
    
    const newResponse = await prisma.userResponse.create({ 
        data: {
            username: reqBody.username,
            Question1: reqBody.Question1,
            Question2: reqBody.Question2,
            Question3: reqBody.Question3,
            Question4: reqBody.Question4,
            Question5: reqBody.Question5,
            Question6: reqBody.Question6,
            Question7: reqBody.Question7,
            Question8: reqBody.Question8,
            Diagnosis: reqBody.Diagnosis,
        }
       
    });
    return NextResponse.json(newResponse, {status: 201});
}
