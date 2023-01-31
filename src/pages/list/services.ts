import request from "@/request"

// 获取列表
export function foxList(params: {
  pageNum: number
  pageSize: number
})
: Promise<{
  pageNum: number
  totalCount: number
  list: ListData[]
}> {
  return request.get('/list', { params })
}
