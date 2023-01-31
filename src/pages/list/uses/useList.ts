import type { Options } from '@uses/useProgressBar'
import { usePagination } from 'vue-request'
import { foxList } from '../services'

type R = Awaited<ReturnType<typeof foxList>>
type P = Parameters<(typeof foxList)>

export default function (options: Options<R, P>) {
  return usePagination<R, P, R>(foxList, {
    manual: true,
    pagination: {
      currentKey: 'pageNum',
      totalKey: 'totalCount',
      pageSizeKey: 'pageSize',
    },
    throttleInterval: 300,
    // TODO：usePagination 参数类型修正
    ...options as any,
  })
}
