import { defineEnvVars } from "@sveltejs/kit/hooks";
import * as v from "valibot"

export const variables = defineEnvVars({
  RESEND_API_KEY: {
    schema: v.pipe(
      v.string()
    )
  },
})