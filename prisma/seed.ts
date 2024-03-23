import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  const students = [
    {
      name: 'Jam',
      nickname: 'JamieZ',
      skypeName: 'jamie.skype',
      email: 'student+111222@gmail.jpn',
      password: 'password',
      status: 1,
      contractType: 1,
      rankId: 5,
      levelId: 2,
    },
    {
      name: 'Run',
      nickname: 'CaseyRun',
      skypeName: 'casey.skype',
      email: 'student+111333@gmail.jpn',
      password: 'password!',
      status: 1,
      contractType: 0,
      rankId: 4,
      levelId: 3,
    },
    {
      name: 'Tech',
      nickname: 'DevonTech',
      skypeName: 'devon.skype',
      email: 'student+111444@gmail.jpn',
      password: 'password',
      status: 1,
      contractType: 2,
      rankId: 3,
      levelId: 1,
    },
  ]

  await Promise.all(
    students.map(student => {
      return prisma.student.create({
        data: student,
      })
    }),
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
