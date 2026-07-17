import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // NOTE: In a production environment, this is where you would add
    // email sending logic (e.g., Resend, SendGrid, Nodemailer) 
    // or save to a database. For now, it prevents data loss by logging.
    console.log("🟢 CONTACT FORM SUBMISSION RECEIVED:", data);
    
    return NextResponse.json({ success: true, message: "Enquiry processed successfully" });
  } catch (error) {
    console.error("Failed to process contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
