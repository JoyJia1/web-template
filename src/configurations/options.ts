import { map } from 'lodash'
import { actionTypeMap } from './map'

export const actionTypeOptions = map(actionTypeMap, (value, key) => ({
  label: value,
  value: +key as Exclude<ActionType, 0>
}))
