import { defineEnvVars } from "@sveltejs/kit/hooks";

export const variables = defineEnvVars({
  RESEND_API_KEY: {},
  EMAIL: {}
})