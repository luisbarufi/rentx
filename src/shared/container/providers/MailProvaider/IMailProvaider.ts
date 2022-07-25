export interface IMailProvaider {
  sendMail(to: string, subject: string, body: string): Promise<void>;
}
