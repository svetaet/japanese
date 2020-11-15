import { RefObject } from 'react'

export type FocusableElementT = { focus: () => void }
export type FocusableElementRefT = RefObject<FocusableElementT>

const focusElementWithRef = (ref: FocusableElementRefT) => ref.current && ref.current.focus()

export default focusElementWithRef
