import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, phone, email, city, systemInfo, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const destination = process.env.CONTACT_DESTINATION_EMAIL ?? "office@mabryac.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    const { data, error: resendError } = await resend.emails.send({
      from: `AC SuperCenter <${fromEmail}>`,
      to: destination,
      replyTo: email,
      subject: `New Quote Request from ${name} — AC SuperCenter`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f7f9fc; padding: 24px;">
          <div style="background: #09152b; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">
              New Quote Request — <span style="color: #C8102E;">AC SuperCenter</span>
            </h1>
          </div>
          <div style="background: white; padding: 28px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151; width: 35%;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">
                  <a href="tel:${phone.replace(/\D/g, "")}" style="color: #C8102E; font-weight: bold;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">
                  <a href="mailto:${email}" style="color: #C8102E;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">City / Area</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${city || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">System Info</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${systemInfo || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #111827;">${message || "No additional message"}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px;">
              <p style="margin: 0; font-weight: bold; color: #991b1b; font-size: 14px;">
                Action Required: Follow up with this customer for their Trane system quote.
              </p>
            </div>
          </div>
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
            This message was sent via the contact form at acsupercenter.com
          </p>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return NextResponse.json({ error: resendError.message }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
