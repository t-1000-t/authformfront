import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const useElasticScroll = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current

    // Handle the drag behavior
    let isDragging = false
    let startX
    let scrollLeft

    const startDrag = (e) => {
      isDragging = true
      startX = e.pageX || e.touches[0].pageX
      scrollLeft = scrollContainer.scrollLeft
      scrollContainer.style.cursor = 'grabbing'
    }

    const stopDrag = () => {
      isDragging = false
      scrollContainer.style.cursor = 'grab'
    }

    const drag = (e) => {
      if (!isDragging) return
      const x = e.pageX || e.touches[0].pageX
      const walk = (x - startX) * 3 // Adjust the drag multiplier
      scrollContainer.scrollLeft = scrollLeft - walk

      // Elastic effect with GSAP
      gsap.to(scrollContainer, {
        scrollLeft: scrollContainer.scrollLeft,
        ease: 'elastic.out(1, 0.75)', // Elastic easing effect
      })
    }

    // Adding event listeners
    scrollContainer.addEventListener('mousedown', startDrag)
    scrollContainer.addEventListener('touchstart', startDrag)
    scrollContainer.addEventListener('mousemove', drag)
    scrollContainer.addEventListener('touchmove', drag)
    scrollContainer.addEventListener('mouseup', stopDrag)
    scrollContainer.addEventListener('mouseleave', stopDrag)
    scrollContainer.addEventListener('touchend', stopDrag)

    // Cleanup event listeners when the component is unmounted
    return () => {
      scrollContainer.removeEventListener('mousedown', startDrag)
      scrollContainer.removeEventListener('touchstart', startDrag)
      scrollContainer.removeEventListener('mousemove', drag)
      scrollContainer.removeEventListener('touchmove', drag)
      scrollContainer.removeEventListener('mouseup', stopDrag)
      scrollContainer.removeEventListener('mouseleave', stopDrag)
      scrollContainer.removeEventListener('touchend', stopDrag)
    }
  }, [])

  return scrollRef
}

export default useElasticScroll
