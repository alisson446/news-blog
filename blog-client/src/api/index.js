export const getJson = (path) => ({
  method: 'GET',
  uri: `${process.env.REACT_APP_API_URL}/${path}`,
  json: true
})

export const post = (path, body) => ({
  method: 'POST',
  uri: `${process.env.REACT_APP_API_URL}/${path}`,
  body,
  json: true
})

export const put = (path, body) => ({
  method: 'PUT',
  uri: `${process.env.REACT_APP_API_URL}/${path}`,
  body,
  json: true
})

export const remove = (path) => ({
  method: 'DELETE',
  uri: `${process.env.REACT_APP_API_URL}/${path}`,
  resolveWithFullResponse: true
})
