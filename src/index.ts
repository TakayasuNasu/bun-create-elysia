import { Elysia } from 'elysia'

import { studentRoute } from '@/routes/student'

export const app = new Elysia().use(studentRoute).get('/', () => ({ message: 'Server running.' }))

if (import.meta.path === Bun.main) {
  app.listen(process.env.PORT || 3000)
  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
}
