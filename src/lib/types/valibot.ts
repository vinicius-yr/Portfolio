import * as v from "valibot"

export const formTypeSchema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(3, 'Minimum 3 characters')
  ),

  email: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your email.'),
    v.email('The email is badly formatted.'),
  ),

  message: v.pipe(
    v.string(),
    v.minLength(70, 'Minimum 70 characters')
  )
})