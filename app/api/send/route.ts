import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request, res: Response) {

  const { email, subject, message } = await req.json();
  console.log(email, subject, message)

  if (!fromEmail) {
    throw new Error("From emal is required");
  }

  const data = await resend.emails.send({
    from: 'Utha <onboarding@resend.dev>',
    to: [fromEmail],
    subject: subject,
    html: `<p> email : ${email}  </p> <p> message : ${message}  </p> <p> subject : ${subject}  </p>`
  });

  return Response.json(data);
  try {

  } catch (error) {
    return Response.json({ error });
  }
}