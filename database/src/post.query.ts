import { Post, PrismaClient } from '@prisma/client'
import { pick } from 'lodash-es'

interface PostData
  extends Array<Pick<Post, 'title' | 'content' | 'createDate'>> {}

type ResultData = {
  status: number
  data: string | PostData
}

const prisma = new PrismaClient()

/**
 * ! 등록된 TodoList 화면에 표시
 * @param {string} id `string`
 * @returns {ResultData}
 */
export const findPost = async (id: string): Promise<ResultData> => {
  return await prisma.post
    .findMany({
      where: {
        writer: parseInt(id, 10),
      },
    })
    .then((res) => {
      const data: any = []
      res.forEach((item) => {
        data.push(pick(item, ['title', 'content', 'createDate']))
      })
      return {
        status: 200,
        data,
      }
    })
    .catch((err) => {
      return {
        status: 500,
        data: err,
      }
    })
}
