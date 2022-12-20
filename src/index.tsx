import { useEffect, useState } from 'react'

type Sizes = {
  medium: number
  small: number
  large: number
}

export interface UseScreenSizeProps {
  breakpoints?: Sizes
}

const defaultSizes: Sizes = {
  medium: 768,
  small: 425,
  large: 1024
}

const isClientSide = typeof window === 'object'

export const useScreenSize = ({
  breakpoints = defaultSizes
}: UseScreenSizeProps) => {
  const [currentWidth, setCurrentWidth] = useState(0)
  const [currentHeight, setCurrentHeight] = useState(0)

  useEffect(() => {
    if (!isClientSide) return

    const handleChangeSize = () => {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth

      const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight

      setCurrentWidth(width)
      setCurrentHeight(height)
    }

    window.addEventListener('resize', handleChangeSize)
    handleChangeSize()

    return () => window.removeEventListener('resize', handleChangeSize)
  }, [])

  const isLargeDesktop = currentWidth > breakpoints.large

  const isDesktop =
    currentWidth > breakpoints.medium && currentWidth <= breakpoints.large

  const isTablet =
    currentWidth > breakpoints.small && currentWidth <= breakpoints.medium

  const isMobile = currentWidth <= breakpoints.small

  return {
    currentWidth,
    currentHeight,
    isLargeDesktop,
    isDesktop,
    isTablet,
    isMobile
  }
}
