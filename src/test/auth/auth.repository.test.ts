import { describe, expect, it, mock } from 'bun:test'

import { AuthRepository, Iauthenticate } from '@/auth/auth.repository'

describe('AuthRepository', () => {
  describe('login', () => {
    it('should return success for a valid login attempt', async () => {
      const auth: Iauthenticate = mock(async () => true)
      const result = await AuthRepository.login({ email: 'email', password: 'password' }, auth)
      expect(result).toBe(true)
    })

    it('should return failure for an invalid login attempt', async () => {
      const auth: Iauthenticate = mock(async () => false)
      const result = await AuthRepository.login({ email: 'email', password: 'password' }, auth)
      expect(result).toBe(false)
    })
  })
})
