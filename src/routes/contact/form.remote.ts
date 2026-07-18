import { EMAIL, RESEND_API_KEY } from "$app/env/private";
import { form } from "$app/server";
import { formTypeSchema } from "$lib/types/valibot";
import { Resend } from "resend";

const resend = new Resend(RESEND_API_KEY);

export const sendMail = form(
  formTypeSchema,
  async ({ name, email, message }) => {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [EMAIL],
      subject: "New contact from portfolio",
      html: `<b>Email:</b> ${email} <br/> <b>Name:</b> ${name} <br/> <b>Message:</b> ${message}`,
    });

    if (error) {
      return console.error({ error });
    }
  },
);
