import { useEffect, useState } from 'react'

export const useScreenSize = () => {
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

  const sizes = {
    large: 1024,
    medium: 768,
    small: 425
  }

  const isTablet = currentWidth <= sizes.medium && currentWidth >= sizes.small // boolean
  const isMobile = currentWidth <= sizes.small // boolean

  return {
    currentWidth,
    isTablet,
    isMobile
  }
}
