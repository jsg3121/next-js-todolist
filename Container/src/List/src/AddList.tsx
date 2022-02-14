import http from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'store'
import useSWR, { useSWRConfig } from 'swr'

interface TodoListData {
  title: string
  content: string
  createDate: string
}

export const AddList: NextPage = (props) => {
  const { register, handleSubmit } = useForm()
  const { mutate } = useSWRConfig()
  const id = useSelector(({ auth }) => auth.id)

  const { data: list = [] } = useSWR(`/api/list/${id}`, async () => {
    return await http
      .request({
        method: 'GET',
        url: `/api/list/${id}`,
      })
      .then((res) => res.data)
  })

  const handleClick = React.useCallback(
    (data) => {
      mutate(`/api/list/addlist`, async () => {
        await http
          .request<Array<TodoListData>>({
            method: 'POST',
            url: '/api/list/addlist',
            data: {
              ...data,
              id,
            },
          })
          .then((res) => {
            const list = res.data
            return list
          })
      }).then(async () => {
        await mutate(`/api/list/${id}`)
      })
    },
    [id, mutate]
  )

  return (
    <>
      <ul>
        {list.map((item: any, index: number) => {
          return (
            <li key={index}>
              <p>title : ${item.title}</p>
              <p>cotent : ${item.content}</p>
              <p>create date : ${item.createDate}</p>
            </li>
          )
        })}
      </ul>
      <form onSubmit={handleSubmit(handleClick)}>
        <div>
          <p>제목</p>
          <input type="text" {...register('title')} />
        </div>
        <div>
          <p>내용</p>
          <input type="text" {...register('content')} />
        </div>
        <button>업로드</button>
      </form>
    </>
  )
}
