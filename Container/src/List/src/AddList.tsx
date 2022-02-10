import http from 'axios'
import type { NextPage } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'store'
import useSWR, { useSWRConfig } from 'swr'

export const AddList: NextPage = (props) => {
  const { register, handleSubmit } = useForm()
  const { mutate } = useSWRConfig()
  const email = useSelector(({ user }) => user.email)

  const { data } = useSWR('/api/test', async (...args) => {
    const res = await fetch(...args)
    return await res.json()
  })

  const handleClick = React.useCallback(
    (data) => {
      mutate('/api/addlist', async () => {
        await http
          .request({
            method: 'POST',
            url: '/api/addlist',
            data: {
              ...data,
              email,
            },
          })
          .then((res) => res.data)
      })
    },
    [email, mutate]
  )

  return (
    <>
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
