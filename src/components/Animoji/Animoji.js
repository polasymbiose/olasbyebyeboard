import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import './Animoji.css'

function Animoji({ src }) {
  const [state, toggle] = useState(true)
  const [hover, sethover] = useState(false)
  const audio = new Audio(require(`../../assets/${src}.mp3`))
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { mass: 4, tension: 400, friction: 12 }
  })
  const { y } = useSpring({
    from: { y: 0 },
    y: hover ? 1 : 0,
    config: { mass: 1, tension: 150, friction: 12 }
  })

  const handleClick = () => {
    audio.play()
    toggle(!state)
  }
  return (
    <div>
      <animated.div
        onClick={handleClick}
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        onMouseOver={() => sethover(true)}
        style={{
          transform: y
            .interpolate({
              range: [0, 1],
              output: [1, 1.1]
            })
            .interpolate(y => `scale(${y})`)
        }}
      >
        <animated.div
          style={{
            transform: x
              .interpolate({
                range: [0, 0.55, 1],
                output: [1, 1.1, 1]
              })
              .interpolate(x => `scale(${x})`)
          }}
        >
          <img src={require(`../../assets/${src}.png`)} />
        </animated.div>
      </animated.div>
    </div>
  )
}

export default Animoji
