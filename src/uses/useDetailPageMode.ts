import { useRouter } from 'vue-router'

export default function (): DetailPageMode {
  const router = useRouter()
  const { params } = router.currentRoute.value
  const modeValue = +params.mode as Exclude<ActionType, 4 | 5 | 6>

  return {
    isCreateMode: modeValue === 0,
    isPreviewMode: modeValue === 1,
    isUpdateMode: modeValue === 2,
    isCopyMode: modeValue === 3,
  }
}
