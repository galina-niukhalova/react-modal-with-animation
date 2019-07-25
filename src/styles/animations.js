import { keyframes } from 'styled-components'

export const animationTime = {
  veryFast: '.2s',
  fast: '.2s',
  normal: '.4s',
}

export const animationKeyframes = {
  slideRightEnter: keyframes`
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  `,
  slideRightLeave: keyframes`
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }`,
}
