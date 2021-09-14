import React from "react"
import { useState, useEffect } from "react"
import Confetti from "react-confetti"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

const VictoryConfetti = () => {
  const { width, height } = useWindowDimensions()
  return <Confetti width={width} height={height} />
}
export default VictoryConfetti
