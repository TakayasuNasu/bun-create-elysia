import { Elysia, t, Static } from 'elysia'

const student = t.Object({
  student_id: t.String(),
  email: t.String(),
  password: t.String(),
  status: t.Boolean(),
})

export type Student = Static<typeof student>

const app = new Elysia()

export const authModel = app.model({
  'auth.student': student,
})
