import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    try {
        // Parse the incoming request URL to extract query parameters
        const { searchParams } = new URL(request.url);
        const diagnosis = searchParams.get('diagnosis');
      
        if (diagnosis) {
            // Fetch treatment data based on the diagnosis from the request
            const data = await prisma.treatments.findMany({ where: { diagnosis } });
            // Return the treatment data as a JSON response
            return NextResponse.json(data, { status: 200 });
        } else {
            // If diagnosis parameter is missing, return an error response
            return NextResponse.error();
        }
    } catch (error) {
        // If an error occurs during the process, handle it and return an appropriate response
        console.error('Error fetching treatment data:', error);
        return NextResponse.error();
    }
}
