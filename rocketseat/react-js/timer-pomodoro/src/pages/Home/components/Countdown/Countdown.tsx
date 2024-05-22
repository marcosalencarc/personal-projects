import { CountDownContainer, Separator } from './styles'

export interface CountdownProps {
  minutes: string
  seconds: string
}

export function Countdown({ minutes, seconds }: CountdownProps) {
  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  )
}
