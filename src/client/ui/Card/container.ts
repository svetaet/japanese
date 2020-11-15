import { memo, FC } from 'react'

export const container = <T>(component: FC<T>) => memo(component)
