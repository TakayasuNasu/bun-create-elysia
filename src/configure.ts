import { Elysia } from 'elysia'

import { AuthRepository } from '@/auth/auth.repository'

export const configure = new Elysia({ name: 'setup' }).decorate({
  authRepository: AuthRepository,
})
