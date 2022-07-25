import nodemailer, { Transporter } from "nodemailer";
import { injectable } from "tsyringe";

import { IMailProvaider } from "../IMailProvaider";

@injectable()
export class EtherealMailProvider implements IMailProvaider {
  private client: Transporter;

  constructor() {
    nodemailer
      .createTestAccount()
      .then((account) => {
        const trasporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass,
          },
        });

        this.client = trasporter;
      })
      .catch((err) => console.error(err));
  }

  async sendMail(to: string, subject: string, body: string): Promise<void> {
    const message = await this.client.sendMail({
      to,
      from: "Rentex <noreplay@rentx.com>",
      subject,
      text: body,
      html: body,
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }
}
