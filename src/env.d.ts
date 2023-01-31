/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * 环境变量
 */
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_FETCH_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

/**
 * Naive-UI message 扩展
 */
interface Window {
  $message: {
    error: (msg: string) => void
  }
}

/**
 * 类型工具
 */
type Simplify<O> = {
  [K in keyof O]: O[K]
}

type SetNullable<T extends object, U extends keyof T> = {
  [K in keyof T]: K extends U ? T[K] | null : T[K]
}

/**
 * 详情页类型
 */
type DetailPageMode = {
  isCreateMode: boolean
  isPreviewMode: boolean
  isUpdateMode: boolean
  isCopyMode: boolean
}

/**
 * 操作类型
 *
 * 0: 创建
 * 1: 查看
 * 2: 编辑
 * 3: 复制
 * 4: 删除
 * 5: 上线
 * 6: 下线
 */

type ActionType = 0 | 1 | 2 | 3 | 4 | 5 | 6

/**
 * 接口返回类型
 */
type ServerResponse<T> = DJServerResponse<T> & DDServerResponse<T>

interface DJServerResponse<T> {
  code: number
  msg: string
  result: T
}

interface DDServerResponse<T> {
  status: string
  errorMsg: string
  content: T
}

/**
 * 列表数据类型
 * ：需要自己填充
 */
interface ListData {
  // ...
}
