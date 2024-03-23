import { PrismaClient, Student } from '@prisma/client'

export interface IfindByEmail {
  (email: string): Promise<Student | undefined>
}

export const findStudentByEmail: IfindByEmail = async email => {
  const db = new PrismaClient()
  const student = await db.student.findUnique({
    where: {
      email: email,
    },
  })
  if (!student) return undefined
  return student
}
