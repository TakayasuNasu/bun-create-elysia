declare module 'bun' {
  interface Env {
    PORT: string
    BIZMATES_STUDENT_LOGIN_TOKEN_SECRET: string
    EXPIRATION_TIME: number
    EXPIRATION_WEEK: number
    DATABASE_URL: string
  }
}
