import { useEffect, useState } from 'react'

type Sizes = {
  large: number
  medium: number
  small: number
}

export interface UseScreenSizeProps {
  breakpoints?: Sizes
}

const defaultSizes = {
  large: 1024,
  medium: 768,
  small: 425
}

export const useScreenSize = ({
  breakpoints = defaultSizes
}: UseScreenSizeProps) => {
  const [currentWidth, setCurrentWidth] = useState(window.screen.width)

  const handleChangeSize = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    setCurrentWidth(width)
  }

  useEffect(() => {
    handleChangeSize()

    window.addEventListener('resize', handleChangeSize)
    return () => window.removeEventListener('resize', handleChangeSize)
  }, [])

  const isTablet =
    currentWidth <= breakpoints.medium && currentWidth > breakpoints.small

  const isMobile = currentWidth <= breakpoints.small

  return {
    currentWidth,
    isTablet,
    isMobile
  }
}
