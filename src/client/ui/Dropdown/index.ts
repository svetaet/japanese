import { memo } from 'react'

import { Dropdown } from './Dropdown'
export * from './Dropdown'

const MemoDropdown = memo(Dropdown)
export { MemoDropdown as Dropdown }
