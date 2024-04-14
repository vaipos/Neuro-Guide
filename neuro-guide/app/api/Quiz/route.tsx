// // Import necessary modules
// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/prisma/client";
// import schema from "./schema";
// import { error } from "console";

// export async function POST(request: NextRequest) {
  
//     try {
//         // Parse the incoming JSON request body
//         const reqBody = await request.json();
//         const validSchema = schema.safeParse(reqBody);

//         if (!validSchema.success) {
//             return NextResponse.json(error);
//         }

//         // Create a new user response in the database using Prisma
//         const newUserResponse = await prisma.userResponse.create({
//             data: {
//                 username: reqBody.email,
//                 Question1: Number(reqBody.question1),
//                 Question2: Number(reqBody.question2),
//                 Question3: Number(reqBody.question3),
//                 Question4: Number(reqBody.question4),
//                 Question5: Number(reqBody.question5),
//                 Question6: Number(reqBody.question6),
//                 Question7: Number(reqBody.question7),
//                 Question8: Number(reqBody.question8),
//                 Diagnosis: 101,
//             },
//         });

//         // Return a successful response with the newly created user response data
//         return NextResponse.json(newUserResponse, { status: 201 });
//     } catch (error) {
//         // If an error occurs during the process, handle it and return an appropriate response
//         console.error("Error creating user response:", error);
//         return NextResponse.error();
//     }
// }


// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "./schema";
import { error } from "console";

export async function POST(request: NextRequest) {
  
    try {
        // Parse the incoming JSON request body
        const reqBody = await request.json();
        
        // Convert question values to numbers before validation
        reqBody.question1 = Number(reqBody.question1);
        reqBody.question2 = Number(reqBody.question2);
        reqBody.question3 = Number(reqBody.question3);
        reqBody.question4 = Number(reqBody.question4);
        reqBody.question5 = Number(reqBody.question5);
        reqBody.question6 = Number(reqBody.question6);
        reqBody.question7 = Number(reqBody.question7);
        reqBody.question8 = Number(reqBody.question8);

        const validSchema = schema.safeParse(reqBody);

        if (!validSchema.success) {
            return NextResponse.json(error);
        }

        // Create a new user response in the database using Prisma
        const newUserResponse = await prisma.userResponse.create({
            data: {
                username: reqBody.email,
                Question1: reqBody.question1,
                Question2: reqBody.question2,
                Question3: reqBody.question3,
                Question4: reqBody.question4,
                Question5: reqBody.question5,
                Question6: reqBody.question6,
                Question7: reqBody.question7,
                Question8: reqBody.question8,
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
