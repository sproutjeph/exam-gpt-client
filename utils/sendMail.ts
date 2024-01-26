"use server";

import nodeMailer, { Transporter } from "nodemailer";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";
import ejs from "ejs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface EmailOptions {
  email: string;
  subject: string;
  template: string;
  data: { [key: string]: any };
}

const sendEmail = async (options: EmailOptions): Promise<void> => {
  const transporter: Transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    service: process.env.SMTP_SERVER,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
  });

  const { email, subject, template, data } = options;

  const templatePath = join(__dirname, "../mails", template);

  //Render the email template with ejs
  const html: string = await ejs.renderFile(templatePath, data);

  const emailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject,
    html,
  };

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  await transporter.sendMail(emailOptions);
};

export default sendEmail;
