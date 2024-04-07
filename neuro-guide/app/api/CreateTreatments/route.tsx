import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST() {
    try {
        // Array of objects representing data for each row
        const rowsData = [
            { diagnosis: "yuh1", fact1: "fact1_value1", fact2: "fact2_value1", fact3: "fact3_value1", fact4: "fact4_value1", s1: "s1_value1", s2: "s2_value1", s3: "s3_value1" },
            { diagnosis: "yuh2", fact1: "fact1_value2", fact2: "fact2_value2", fact3: "fact3_value2", fact4: "fact4_value2", s1: "s1_value2", s2: "s2_value2", s3: "s3_value2" },
            { diagnosis: "yuh1", fact1: "fact1_value1", fact2: "fact2_value1", fact3: "fact3_value1", fact4: "fact4_value1", s1: "s1_value1", s2: "s2_value1", s3: "s3_value1" },
            { diagnosis: "yuh2", fact1: "fact1_value2", fact2: "fact2_value2", fact3: "fact3_value2", fact4: "fact4_value2", s1: "s1_value2", s2: "s2_value2", s3: "s3_value2" },
            { diagnosis: "yuh1", fact1: "fact1_value1", fact2: "fact2_value1", fact3: "fact3_value1", fact4: "fact4_value1", s1: "s1_value1", s2: "s2_value1", s3: "s3_value1" },
            { diagnosis: "yuh2", fact1: "fact1_value2", fact2: "fact2_value2", fact3: "fact3_value2", fact4: "fact4_value2", s1: "s1_value2", s2: "s2_value2", s3: "s3_value2" },
            { diagnosis: "yuh1", fact1: "fact1_value1", fact2: "fact2_value1", fact3: "fact3_value1", fact4: "fact4_value1", s1: "s1_value1", s2: "s2_value1", s3: "s3_value1" },
        ];

        for (const rowData of rowsData) {
            await prisma.treatments.create({ data: rowData });
        }

        return NextResponse.json({ message: "Rows created successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}
