import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

const TimerCircle = ({ totalTime, stream, socket }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime)
  const { id } = useParams()

  useEffect(() => {
    if (timeLeft === 0) {
      socket.emit('callEnded', id)
      return undefined
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, socket, id])

  const percentageLeft = (timeLeft / totalTime) * 100
  const radius = 66.5
  const circumference = 2 * Math.PI * radius
  const progress = circumference - (percentageLeft / 100) * circumference

  return (
    <div style={{ position: 'relative' }}>
      {stream && (
        <video
          playsInline
          ref={stream}
          autoPlay
          style={{
            maxWidth: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            transform: 'translate3d(0, 0, 0)',
            width: '136px',
            height: '136px',
          }}
        >
          <track kind="captions" />
        </video>
      )}
      <svg style={{ position: 'absolute', top: 0, left: 0 }} width="136%" height="136%">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#38a169" />
            <stop offset="100%" stopColor="#38a169" />
          </linearGradient>
        </defs>
        <circle r={radius} cx="68" cy="68" stroke="#fc8181" strokeWidth="4" fill="none" />
        <motion.circle
          r={radius}
          cx="68"
          cy="68"
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progress}
          animate={{ strokeDashoffset: progress }}
          transition={{ duration: 0.1 }}
        />
      </svg>
    </div>
  )
}

TimerCircle.propTypes = {
  totalTime: PropTypes.number.isRequired,
  stream: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
  }).isRequired,
}

// Default props for non-required props
TimerCircle.defaultProps = {
  stream: null,
}

export default TimerCircle
