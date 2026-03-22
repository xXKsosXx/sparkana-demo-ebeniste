import { NextResponse } from "next/server";

let resendInstance: InstanceType<typeof import("resend").Resend> | null = null;

async function getResend() {
  if (!resendInstance) {
    const { Resend } = await import("resend");
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  return resendInstance;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    const resend = await getResend();

    await resend.emails.send({
      from: "Atelier Marchand <onboarding@resend.dev>",
      to: process.env.EMAIL_TO || "kamal@sparkana.fr",
      subject: `Nouvelle demande de ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #210f07; color: #ffdbce; padding: 40px;">
          <h1 style="color: #f0bf5e; font-style: italic; border-bottom: 1px solid #504440; padding-bottom: 20px;">
            Atelier Marchand
          </h1>
          <h2 style="color: #f0bf5e; font-size: 14px; text-transform: uppercase; letter-spacing: 3px; margin-top: 30px;">
            Nouvelle demande de devis
          </h2>
          <div style="margin-top: 20px; padding: 20px; background: #2f1a12;">
            <p><strong style="color: #f0bf5e;">Nom :</strong> ${name}</p>
            <p><strong style="color: #f0bf5e;">Email :</strong> ${email}</p>
            <p><strong style="color: #f0bf5e;">Projet :</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #9c8e89;">
            Ce message a ete envoye depuis le formulaire de contact du site Atelier Marchand.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
