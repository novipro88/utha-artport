import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request, res: Response) {

  const { email, subject, message } = await req.json();
  console.log(email, subject, message)

  if (!fromEmail) {
    throw new Error("From email is required");
  }
  try {
    const data = await resend.emails.send({
      from: 'Utha Art <onboarding@resend.dev>',
      to: [fromEmail],
      subject: subject,
      html: `<p>email : ${email}</p>
      <p>subject : ${subject}</p>
      <p>message : ${message}</p>
      `
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}