import { jwt } from '@elysiajs/jwt'
import { Elysia, t } from 'elysia'

import { configure } from '@/configure'
import { findStudentByEmail } from '@/models/student'

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
      async ({
        body,
        cookie: { student_access_token, student_refresh_token },
        jwt,
        set,
        authRepository,
      }) => {
        const result = await authRepository.login(body)

        if (!result) {
          set.status = 400
          return {
            message: 'Student could not be found',
          }
        }

        const student = await findStudentByEmail(body.email)

        const iat = Math.floor(Date.now() / 1000)

        const token = await jwt.sign({
          iat: iat,
          exp: iat + process.env.EXPIRATION_TIME,
          sub: String(student?.id),
        })

        student_access_token.set({
          httpOnly: true,
          maxAge: process.env.EXPIRATION_TIME,
          value: token,
        })

        student_refresh_token.set({
          httpOnly: true,
          maxAge: process.env.EXPIRATION_WEEK,
          value: token,
        })

        return {
          student: `student_id: ${student?.id} successfully logged in`,
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
