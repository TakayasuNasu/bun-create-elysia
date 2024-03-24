import { describe, expect, it } from 'bun:test'

import { app } from '@/index'

describe('auth', () => {
  it('should log in a student', async () => {
    const response = await app.handle(
      new Request(`http://localhost:${process.env.PORT}/student/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'student+111222@gmail.jpn',
          password: 'password',
        }),
      }),
    )

    expect(response.headers.get('set-cookie')).toMatch(/token=.+;/)
  })

  it('should not log in with wrong password', async () => {
    const response = await app.handle(
      new Request(`http://localhost:${process.env.PORT}/student/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'student+111222@gmail.jpn',
          password: 'ppppp',
        }),
      }),
    )

    const body = await response.json()
    expect(body).toEqual({
      message: 'Student could not be found',
    })

    expect(response.status).toEqual(400)
  })

  it('should not log in with wrong email', async () => {
    const response = await app.handle(
      new Request(`http://localhost:${process.env.PORT}/student/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'student@gmail.jpn',
          password: 'password',
        }),
      }),
    )

    const body = await response.json()
    expect(body).toEqual({
      message: 'Student could not be found',
    })

    expect(response.status).toEqual(400)
  })
})
