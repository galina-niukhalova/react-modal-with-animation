import React from 'react'
import { ReactComponent as Close } from 'assets/icons/close.svg'

const icons: IconsProps = {
  close: <Close />,
}

interface IconsProps {
  close: React.ReactNode,
}

export type IconNamesType = keyof IconsProps

export default icons

