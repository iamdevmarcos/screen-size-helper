import { useEffect, useState } from 'react'

type Sizes = {
  medium: number
  small: number
  large: number
  xlarge: number
}

export interface UseScreenSizeProps {
  breakpoints?: Sizes
}

const defaultSizes: Sizes = {
  medium: 768,
  small: 425,
  large: 1024,
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

  const isLargeDesktop =
    currentWidth <= breakpoints.xlarge && currentWidth > breakpoints.large

  const isDesktop =
    currentWidth <= breakpoints.large && currentWidth > breakpoints.medium

  const isTablet =
    currentWidth <= breakpoints.medium && currentWidth > breakpoints.small

  const isMobile = currentWidth <= breakpoints.small

  return {
    currentWidth,
    isLargeDesktop,
    isDesktop,
    isTablet,
    isMobile
  }
}
