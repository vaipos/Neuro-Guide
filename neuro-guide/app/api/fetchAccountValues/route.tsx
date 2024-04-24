import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get('email');
    if (!email) {
      return NextResponse.json({ error: 'Email parameter is missing' }, { status: 400 });
    }

    const data = await prisma.userResponse.findMany({
      where: { username: String(email) }
    });

    const responseData = data.map((response) => ({
      Question1: response.Question1,
      Question2: response.Question2,
      Question3: response.Question3,
      Question4: response.Question4,
      Question5: response.Question5,
      Question6: response.Question6,
      Question7: response.Question7,
      Question8: response.Question8,
      diagnosis: response.Diagnosis,
      date: response.date
    }));

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error('Error fetching user responses:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}