import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    if (req.method === "POST") {
        try {

            const {
                first_name,
                last_name,
                email,
                company_name,
                help,
                company_size,
                info,
            } = await req.json();

            const transporter = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "8f8788e761fc1e",
                    pass: "509062e95f8329",
                },
            });
            const mailOptions = {
                from: "akshita@gmail.com",
                to: email,
                subject: "Contact Form Submission",
                html: ` <h1>Contact Form</h1>
                <p>First Name: ${first_name}</p>
                <p>Last Name: ${last_name}</p>
                <p>Work Email: ${email}</p>
                <p>Company Name: ${company_name}</p>
                <p>Company Size: ${company_size}</p>
                <p>Help: ${help}</p>
                <p>Info: ${info}</p> `,
            };
              
            await transporter.sendMail(mailOptions);
            return NextResponse.json("email has been sent");
        } catch (error) {
            return NextResponse.json("email has not been sent");
        }
    } else {
        return NextResponse.json('method not allowed');
    }

}