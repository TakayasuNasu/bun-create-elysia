import { PrismaClient } from '@prisma/client'

export interface Iauthenticate {
  (email: string, password: string): Promise<boolean>
}

export const authenticate: Iauthenticate = async (email, password) => {
  const db = new PrismaClient()
  const student = await db.student.findUnique({
    where: {
      email: email,
    },
  })

  if (!student) return false

  if (student.password !== password) return false

  return true
}

export const AuthRepository = {
  async login(
    student: { email: string; password: string },
    auth: Iauthenticate = authenticate,
  ): Promise<boolean> {
    return await auth(student.email, student.password)
  },
}
