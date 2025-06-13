"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend("re_ffg8kBSh_D2PctLkj3PMo3q5dCJnh7yp4")

const contactSchema = z.object({
  name: z.string().min(2, "Naam moet minstens 2 karakters bevatten."),
  email: z.string().email("Voer een geldig e-mailadres in."),
  message: z.string().min(10, "Bericht moet minstens 10 karakters bevatten."),
})

// Email template in website stijl
function getEmailTemplate(content: string) {
  return `
    <!DOCTYPE html>
    <html lang="nl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Luka Dekeerle - Portfolio</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .header h1 {
          color: #ffffff;
          font-size: 28px;
          font-weight: 900;
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
        }
        
        .header p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          font-weight: 500;
          position: relative;
          z-index: 1;
        }
        
        .content {
          padding: 40px 30px;
        }
        
        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .info-card {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          margin: 24px 0;
          position: relative;
          overflow: hidden;
        }
        
        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
        }
        
        .info-card h3 {
          color: #1e293b;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }
        
        .info-card h3::before {
          content: '👤';
          margin-right: 8px;
          font-size: 20px;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          padding: 8px 0;
        }
        
        .info-item:last-child {
          margin-bottom: 0;
        }
        
        .info-label {
          font-weight: 600;
          color: #475569;
          min-width: 80px;
          font-size: 14px;
        }
        
        .info-value {
          color: #1e293b;
          font-weight: 500;
        }
        
        .message-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          margin: 24px 0;
          position: relative;
        }
        
        .message-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #10b981, #059669);
        }
        
        .message-card h3 {
          color: #1e293b;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }
        
        .message-card h3::before {
          content: '💬';
          margin-right: 8px;
          font-size: 20px;
        }
        
        .message-text {
          color: #374151;
          line-height: 1.7;
          font-size: 15px;
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }
        
        .cta-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          padding: 24px;
          margin: 24px 0;
          text-align: center;
          color: white;
        }
        
        .cta-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        
        .cta-card p {
          opacity: 0.9;
          margin-bottom: 20px;
        }
        
        .reply-button {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .reply-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }
        
        .footer {
          background: #1e293b;
          padding: 30px;
          text-align: center;
          color: #94a3b8;
        }
        
        .footer h4 {
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        
        .contact-info {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        
        .social-links {
          margin-top: 20px;
        }
        
        .social-links a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          margin: 0 10px;
        }
        
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
          margin: 30px 0;
        }
        
        @media (max-width: 600px) {
          .container {
            margin: 10px;
            border-radius: 16px;
          }
          
          .header, .content, .footer {
            padding: 24px 20px;
          }
          
          .contact-info {
            flex-direction: column;
            gap: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        ${content}
      </div>
    </body>
    </html>
  `
}

export async function sendContactEmail(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    // Valideer de data
    const validatedData = contactSchema.parse(data)

    // Email naar Luka (jou)
    const lukaEmailContent = `
      <div class="header">
        <h1>Nieuw Contact Bericht</h1>
        <p>Je hebt een nieuw bericht ontvangen via je portfolio website</p>
      </div>
      
      <div class="content">
        <div class="badge">Nieuw Bericht</div>
        
        <div class="info-card">
          <h3>Contact Informatie</h3>
          <div class="info-item">
            <span class="info-label">Naam:</span>
            <span class="info-value">${validatedData.name}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Email:</span>
            <span class="info-value">${validatedData.email}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Datum:</span>
            <span class="info-value">${new Date().toLocaleDateString("nl-NL", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}</span>
          </div>
        </div>
        
        <div class="message-card">
          <h3>Bericht</h3>
          <div class="message-text">${validatedData.message.replace(/\n/g, "<br>")}</div>
        </div>
        
        <div class="cta-card">
          <h3>💡 Snel Antwoorden</h3>
          <p>Je kunt direct antwoorden op dit email om contact op te nemen met ${validatedData.name}.</p>
          <a href="mailto:${validatedData.email}?subject=Re: Contact via Portfolio&body=Hallo ${validatedData.name},%0D%0A%0D%0ABedankt voor je bericht! " class="reply-button">
            Direct Antwoorden
          </a>
        </div>
      </div>
      
      <div class="footer">
        <h4>Luka Dekeerle</h4>
        <div class="contact-info">
          <div class="contact-item">
            <span>📧</span>
            <span>dekeerle.luka2005@gmail.com</span>
          </div>
          <div class="contact-item">
            <span>📱</span>
            <span>+32 468 211 449</span>
          </div>
          <div class="contact-item">
            <span>📍</span>
            <span>Kortrijk, België</span>
          </div>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/luka-dekeerle-412b7334b">LinkedIn</a>
        </div>
      </div>
    `

    // Email naar de klant (bevestiging)
    const clientEmailContent = `
      <div class="header">
        <h1>Bedankt voor je Bericht!</h1>
        <p>Je bericht is succesvol ontvangen</p>
      </div>
      
      <div class="content">
        <div class="badge">Bevestiging</div>
        
        <p style="font-size: 16px; color: #374151; margin-bottom: 24px;">
          Hallo <strong>${validatedData.name}</strong>,
        </p>
        
        <p style="font-size: 15px; color: #4b5563; line-height: 1.7; margin-bottom: 24px;">
          Bedankt voor je interesse en het versturen van je bericht! Ik heb je bericht goed ontvangen en zal zo snel mogelijk contact met je opnemen.
        </p>
        
        <div class="info-card">
          <h3>Jouw Bericht</h3>
          <div class="info-item">
            <span class="info-label">Verzonden:</span>
            <span class="info-value">${new Date().toLocaleDateString("nl-NL", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}</span>
          </div>
        </div>
        
        <div class="message-card">
          <h3>Je Bericht</h3>
          <div class="message-text">${validatedData.message.replace(/\n/g, "<br>")}</div>
        </div>
        
        <div class="cta-card">
          <h3>🚀 Wat Gebeurt Er Nu?</h3>
          <p>Ik bekijk je bericht en neem binnen 24 uur contact met je op. Heb je nog vragen? Je kunt altijd antwoorden op deze email!</p>
          <a href="mailto:dekeerle.luka2005@gmail.com?subject=Re: Portfolio Contact&body=Hallo Luka,%0D%0A%0D%0A" class="reply-button">
            Direct Contact
          </a>
        </div>
        
        <div class="divider"></div>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border-left: 4px solid #10b981;">
          <h4 style="color: #065f46; margin-bottom: 12px; font-size: 16px;">💼 Over Mij</h4>
          <p style="color: #047857; font-size: 14px; line-height: 1.6; margin: 0;">
            Ik ben een gepassioneerde developer uit Kortrijk, België. Ik help bedrijven en particulieren met het realiseren van hun digitale projecten, van websites tot complexe applicaties.
          </p>
        </div>
      </div>
      
      <div class="footer">
        <h4>Luka Dekeerle - Portfolio</h4>
        <div class="contact-info">
          <div class="contact-item">
            <span>📧</span>
            <span>dekeerle.luka2005@gmail.com</span>
          </div>
          <div class="contact-item">
            <span>📱</span>
            <span>+32 468 211 449</span>
          </div>
          <div class="contact-item">
            <span>📍</span>
            <span>Kortrijk, België</span>
          </div>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/luka-dekeerle-412b7334b">LinkedIn Profiel</a>
        </div>
        <p style="margin-top: 16px; font-size: 12px; opacity: 0.7;">
          Dit is een automatisch gegenereerd bericht. Je kunt direct antwoorden op deze email.
        </p>
      </div>
    `

    // Verstuur email naar Luka
    const { error: lukaError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["dekeerle.luka2005@gmail.com"],
      subject: `🚀 Nieuw Contact: ${validatedData.name}`,
      html: getEmailTemplate(lukaEmailContent),
      replyTo: validatedData.email,
    })

    if (lukaError) {
      console.error("Resend error (Luka):", lukaError)
      return {
        success: false,
        message: "Er is een fout opgetreden bij het versturen van je bericht. Probeer het later opnieuw.",
      }
    }

    // Verstuur bevestigingsemail naar klant
    const { error: clientError } = await resend.emails.send({
      from: "Luka Dekeerle <onboarding@resend.dev>",
      to: [validatedData.email],
      subject: "✅ Bevestiging: Je bericht is ontvangen!",
      html: getEmailTemplate(clientEmailContent),
      replyTo: "dekeerle.luka2005@gmail.com",
    })

    if (clientError) {
      console.error("Resend error (Client):", clientError)
      // Luka's email is al verstuurd, dus we geven nog steeds success terug
      // maar loggen de fout voor de bevestigingsemail
    }

    return {
      success: true,
      message:
        "Bedankt voor je bericht! Je ontvangt ook een bevestigingsemail. Ik neem zo snel mogelijk contact met je op.",
    }
  } catch (error) {
    console.error("Send email error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    return {
      success: false,
      message: "Er is een onverwachte fout opgetreden. Probeer het later opnieuw.",
    }
  }
}
