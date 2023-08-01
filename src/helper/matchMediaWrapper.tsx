import { useEffect, useState } from "react"

const MatchMediaWrapper = ({mobileContent, desktopContent}: any) => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false)

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 800px)")
    setIsNarrowScreen(mediaWatcher.matches);

    function updateIsNarrowScreen(e: { matches: boolean | ((prevState: boolean) => boolean) }) {
      setIsNarrowScreen(e.matches);
    }

    if(mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
      }
    } else {
      mediaWatcher.addListener(updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeListener(updateIsNarrowScreen)
      }
    }
  }, [])

  return isNarrowScreen ? mobileContent : desktopContent;
}

export default MatchMediaWrapper;