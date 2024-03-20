import { Student } from '@/auth/auth.model'

type Result =
  | {
      success: true
      student: Student
      message: string
    }
  | {
      success: false
      student: null
      message: string
    }

export const AuthRepository = {
  async login(student: Omit<Student, 'student_id'>): Promise<Result> {
    if (student.email == 'example@gmail.com' && student.password == 'password') {
      return {
        success: true,
        student: {
          student_id: '183829',
          email: student.email,
          password: 'password',
        },
        message: 'Login successful',
      }
    }
    return {
      success: false,
      student: null,
      message: 'Not found.',
    }
  },
}
