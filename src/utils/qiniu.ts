import axios from 'axios'

type SignatureInfo =  {
  key: string
  url: string
  token: string
}

type ServerSignature = {
  status: string
  content: {
    qiniu: SignatureInfo
  }
}

// 七牛云上传文件签名
function foxQNSignature(): Promise<SignatureInfo> {
  return axios.get<ServerSignature>('/nock/file/signature', {
    baseURL: import.meta.env.VITE_FETCH_URL,
    params: { fileType: 'xlsx' },
    withCredentials: true,
  }).then(res => {
    if (res.data.status !== 'ok') {
      throw new Error('获取上传签名信息失败')
    }
    return res.data.content.qiniu
  })
}

// 七牛云文件上传
export async function foxQNUpload(file: File) {
  const { key, token, url } = await foxQNSignature()
  const formData = new FormData()

  formData.append('key', key)
  formData.append('token', token)
  formData.append('file', file)

  await axios.post('https://up.qbox.me', formData)

  return url
}
