import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  const students = [
    {
      name: 'Jam',
      nickname: 'JamieZ',
      skypeName: 'jamie.skype',
      email: 'uat-student+111222@bizmates.jpn',
      password: 'password',
      status: 1,
      contractType: 1,
      rankId: 5,
      levelId: 2,
      facebook_uid: 'JamieZ_Facebook',
    },
    {
      name: 'Run',
      nickname: 'CaseyRun',
      skypeName: 'casey.skype',
      email: 'uat-student+111333@bizmates.jpn',
      password: 'password!',
      status: 1,
      contractType: 0,
      rankId: 4,
      levelId: 3,
      facebook_uid: null,
    },
    {
      name: 'Tech',
      nickname: 'DevonTech',
      skypeName: 'devon.skype',
      email: 'uat-student+111444@bizmates.jpn',
      password: 'password',
      status: 1,
      contractType: 2,
      rankId: 3,
      levelId: 1,
      facebook_uid: 'DevonTech_Facebook',
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
