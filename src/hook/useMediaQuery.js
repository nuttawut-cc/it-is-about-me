import { useState, useEffect } from 'react'

const useMediaQuery = (query) => {
  const media = window.matchMedia(query)
  const [matches, setMatches] = useState(media.matches)

  useEffect(() => {
    const onMatching = e => setMatches(e.matches)
    media.addListener(onMatching)
    return () => media.removeListener(onMatching)
  })

  return matches
}

export default useMediaQuery
