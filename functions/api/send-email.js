// Cloudflare Pages Function for email sending
import { Resend } from 'resend';

export async function onRequestPost(context) {
  try {
    // Get the request body
    const request = context.request;
    const body = await request.json();
    const { name, email, phone, message, service } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: 'Brakujące wymagane pola' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
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
    const resend = new Resend(context.env.RESEND_API_KEY || '');
    
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
      return new Response(
        JSON.stringify({ error: 'Błąd podczas wysyłania wiadomości' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Wiadomość wysłana pomyślnie' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in contact form API:', error);
    return new Response(
      JSON.stringify({ error: 'Wystąpił błąd podczas przetwarzania formularza' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
