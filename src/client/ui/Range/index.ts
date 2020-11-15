import { memo } from 'react'

import { Range } from './Range'
export * from './Range'

const MemoRange = memo(Range)
export { MemoRange as Range }
