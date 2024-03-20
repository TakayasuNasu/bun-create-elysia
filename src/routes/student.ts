import { jwt } from '@elysiajs/jwt'
import { Elysia, t } from 'elysia'

import { configure } from '@/configure'

export const studentRoute = new Elysia().group('/student', app =>
  app
    .use(configure)
    .use(
      jwt({
        name: 'jwt',
        secret: process.env.BIZMATES_STUDENT_LOGIN_TOKEN_SECRET,
      }),
    )
    .post(
      '/login',
      async ({ body, cookie: { bizmates_student_token }, jwt, set, authRepository }) => {
        const result = await authRepository.login(body)
        if (!result.success) {
          set.status = 400
          return {
            message: result.message,
          }
        }
        const iat = Math.floor(Date.now() / 1000)

        const token = await jwt.sign({
          iat: iat,
          exp: iat + process.env.EXPIRATION_TIME,
          sub: result.student.student_id,
        })

        bizmates_student_token.set({
          httpOnly: true,
          maxAge: process.env.EXPIRATION_TIME,
          value: token,
        })

        return {
          student: `student_id: ${result.student.student_id} successfully logged in`,
        }
      },
      {
        body: t.Object({
          email: t.String(),
          password: t.String(),
        }),
      },
    ),
)
