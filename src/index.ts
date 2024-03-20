import { Elysia } from 'elysia'

import { studentRoute } from '@/routes/student'

const app = new Elysia()
  .use(studentRoute)
  .get('/', () => ({ message: 'Server running.' }))
  .listen(process.env.PORT || 3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
