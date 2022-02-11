import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * ! 로그인시 입력한 Email로 등록된 사용자 검색
 * @auth 장선규
 * @param {string} email `string`
 * @returns {Promise<User | null>}
 */
export const findUser = async (email: string): Promise<User | null> => {
  return await prisma.user
    .findUnique({
      where: {
        userEmail: email,
      },
      rejectOnNotFound: false,
    })
    .then((res) => {
      return res
    })
    .finally(async () => {
      prisma.$disconnect
    })
}

/**
 * ! 로그인 성공시 토큰 생성
 * @param {string} token `string`
 * @param {number} id `number`
 * @returns {Promise<void>}
 */
export const insertToken = async (token: string, id: number): Promise<void> => {
  await prisma.token
    .create({
      data: {
        refreshToken: '',
        accessToken: token,
        userId: id,
      },
    })
    .finally(async () => {
      prisma.$disconnect
    })
}

/**
 * ! 토큰 제거
 * info : 추후 토큰 관련 DB 수정시 삭제될 수 있습니다.
 * @auth 장선규
 * @param {string} token `string`
 * @returns {code: number, data: any}
 */
export const deleteToken = async (token: string) => {
  return await prisma.token
    .delete({
      where: {
        accessToken: token,
      },
    })
    .then(() => {
      return {
        code: 200,
        data: true,
      }
    })
    .catch((e) => {
      return {
        code: 500,
        data: e,
      }
    })
    .finally(async () => {
      prisma.$disconnect
    })
}
