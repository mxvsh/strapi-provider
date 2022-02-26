import React from 'react'
import useFetch, { Provider } from 'use-http'
import qs from 'qs'

export const StrapiProvider = ({ children, url }) => {
  return <Provider url={url}>{children}</Provider>
}

export const useCollection = (name) => {
  const api = useFetch('/' + name)

  const find = (query = {}) => {
    const q = qs.stringify(query)
    return api.get(`?${q}`)
  }

  const findOne = (id, query = {}) => {
    const q = qs.stringify(query)
    return api.get(`/${id}?${q}`)
  }

  const create = (data) => {
    return api.post(data)
  }

  const put = () => {}
  const _delete = () => {}

  return {
    find,
    findOne,
    create,
    put,
    delete: _delete,
    del: _delete
  }
}
