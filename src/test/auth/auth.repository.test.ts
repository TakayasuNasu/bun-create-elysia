import { describe, expect, it } from 'bun:test'

import { Student } from '@/auth/auth.model'
import { AuthRepository } from '@/auth/auth.repository'

describe('AuthRepository', () => {
  describe('login', () => {
    it('should return success for a valid login attempt', async () => {
      const validStudent: Student = {
        student_id: '183829',
        email: 'example@gmail.com',
        password: 'password',
        status: true,
      }

      const result = await AuthRepository.login(validStudent)

      expect(result.success).toBe(true)
      expect(result).toHaveProperty('student')
      expect(result.student).toEqual(validStudent)
    })

    it('should return failure for an invalid login attempt', async () => {
      const invalidStudent: Student = {
        student_id: 'S000124',
        email: 'wrong.email@domain.com',
        password: 'wrongpassword',
        status: false,
      }

      const result = await AuthRepository.login(invalidStudent)

      expect(result.success).toBe(false)
      expect(result).toHaveProperty('message')
      expect(result.message).toBe('Not found.')
    })
  })
})
