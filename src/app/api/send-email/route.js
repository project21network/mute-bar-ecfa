import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
// You'll need to add your Resend API key to your environment variables
const getResendClient = () => {
  return new Resend(process.env.RESEND_API_KEY || '');
};

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, message, service } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Brakujące wymagane pola' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      <h2>Nowa wiadomość z formularza kontaktowego</h2>
      <p><strong>Imię i nazwisko:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      ${service ? `<p><strong>Usługa:</strong> ${service}</p>` : ''}
      <p><strong>Wiadomość:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Initialize Resend client
    const resend = getResendClient();
    
    // Send email using Resend
    const { error } = await resend.emails.send({
      from: 'Formularz kontaktowy <noreply@boguslawkrol-artbud.pl>',
      to: 'sepatar1321@gmail.com',
      subject: `Nowa wiadomość od ${name}`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Błąd podczas wysyłania wiadomości' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Wiadomość wysłana pomyślnie' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form API:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas przetwarzania formularza' },
      { status: 500 }
    );
  }
}
