import axios from 'axios'

export default function SYQrequest(options: any) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:9001/',
      timeout: 10000
    })

    instance
      .request(options)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
