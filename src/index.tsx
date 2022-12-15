import { useEffect, useState } from 'react'

type Sizes = {
  large: number
  medium: number
  small: number
  xlarge: number
}

export interface UseScreenSizeProps {
  breakpoints?: Sizes
}

const defaultSizes: Sizes = {
  large: 1024,
  medium: 768,
  small: 425,
  xlarge: 1440
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

  const isDesktop = currentWidth > breakpoints.large

  const isLargeDesktop = currentWidth > breakpoints.xlarge

  return {
    currentWidth,
    isTablet,
    isMobile,
    isDesktop,
    isLargeDesktop
  }
}
