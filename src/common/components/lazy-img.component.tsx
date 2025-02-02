import { CSSProperties, memo, useEffect, useState } from 'react'

type Props = {
  className?: string
  src?: string
  alt: string
  style?: CSSProperties
  isErrorIconHidden?: boolean
}

export const LazyImg = memo(({ className, src, alt, style }: Props) => {
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!src) {
      return
    }

    let preloadImg: HTMLImageElement | null = document.createElement('img')
    preloadImg.src = src

    preloadImg.addEventListener('load', () => {
      preloadImg = null
    })

    preloadImg.addEventListener('error', () => {
      setIsError(true)
    })
  }, [])

  if (isError) {
    return (
      <div className={className} style={style}>
        {"No Image"}
      </div>
    )
  }

  return (
    <div className={className}>
      <img src={src} alt={alt} style={{ ...style }} />
    </div>
  )
})
