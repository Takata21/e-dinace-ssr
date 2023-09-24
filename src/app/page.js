import { Slider } from '@/components/Carousel'
import { MoonEclipsesInfo } from '@/components/MoonEclipsesInfo'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Slider />
      <MoonEclipsesInfo />
    </div>
  )
}
