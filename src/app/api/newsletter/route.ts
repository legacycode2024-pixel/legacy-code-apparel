import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const response = await fetch(
      'https://us3.api.mailchimp.com/3.0/lists/10d9e685c2/members',
      {
        method: 'POST',
        headers: {
          Authorization: 'apikey fe7e035b5650701be56e4ce1cc2e20b7-us3',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          tags: ['website-signup'],
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const data = await response.json();
      return NextResponse.json({ error: data.detail }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}