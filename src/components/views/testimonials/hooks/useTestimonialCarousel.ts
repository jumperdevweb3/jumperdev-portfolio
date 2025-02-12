import { PanInfo } from "framer-motion"
import { useState } from "react"

export const useTestimonialCarousel = (itemsCount: number) => {
  const [[page, direction], setPage] = useState([0, 0])

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + itemsCount) % itemsCount
    setPage([newPage, newDirection])
  }

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1)
    }
  }

  return {
    page,
    direction,
    setPage,
    handleDragEnd
  }
} 