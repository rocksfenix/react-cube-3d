type event = {
  side: number
}

export interface Cube3DProps {
  style: any
  size: number
  speed: number
  height: number
  rotateX: number
  rotateY: number
  sensivity: number
  sensivityFade: number
  touchSensivity: number
  onClick?: (event: event) => void
  children: React.PropsWithChildren<any>
}