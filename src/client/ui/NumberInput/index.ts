import { memo } from 'react'

import { NumberInput } from './NumberInput'
export * from './NumberInput'

const MemoNumberInput = memo(NumberInput)
export { MemoNumberInput as NumberInput }
