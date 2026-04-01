import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, rating, tee, review } = await req.json();
    console.log('New Review:', { name, rating, tee, review });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
