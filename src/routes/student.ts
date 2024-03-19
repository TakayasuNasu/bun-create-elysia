import { Elysia } from 'elysia'

export const studentRoute = new Elysia().post('/student', ({ body }) => {
  console.log(body)
  return {
    user: 'user_name',
  }
})
