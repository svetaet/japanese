import { memo } from 'react'

import { IconButton } from './IconButton'
export * from './IconButton'

const MemoIconButton = memo(IconButton)
export { MemoIconButton as IconButton }
