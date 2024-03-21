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

type Optional = 'student_id' | 'status'

export const AuthRepository = {
  async login(student: Omit<Student, Optional>): Promise<Result> {
    if (student.email == 'example@gmail.com' && student.password == 'password') {
      return {
        success: true,
        student: {
          student_id: '183829',
          email: student.email,
          password: 'password',
          status: true,
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
