import { defineEnvVars } from "@sveltejs/kit/hooks";
import * as v from "valibot"

export const variables = defineEnvVars({
  RESEND_API_KEY: {
    schema: v.string(),
    static: true,
    public: false
  },
})