import { memo } from 'react'

import { Checkbox } from './Checkbox'
export * from './Checkbox'

const MemoCheckbox = memo(Checkbox)
export { MemoCheckbox as Checkbox }
