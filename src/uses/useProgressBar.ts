import { useLoadingBar } from 'naive-ui'

export type Options<R, P> = {
  onSuccess?: (data: R, params: P) => void;
  onError?: (error: Error, params: P) => void;
  onBefore?: (params: P) => void;
  onAfter?: (params: P) => void;
}

export default function <
  R,
  P extends unknown[]
>(options: Options<R, P> = {}) {
  const loadingBar = useLoadingBar()
  const { onBefore, onSuccess, onError, onAfter } = options

  return {
    onBefore(params: P) {
      loadingBar.start()
      onBefore && onBefore(params)
    },

    onSuccess(data: R, params: P) {
      loadingBar.finish()
      onSuccess && onSuccess(data, params)
    },

    onError(error: Error, params: P) {
      loadingBar.error()
      onError && onError(error, params)
    },

    onAfter(params: P) {
      onAfter && onAfter(params)
    }
  }
}
