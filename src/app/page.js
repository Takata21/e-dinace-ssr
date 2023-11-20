import { Carousel } from '@/components/Slider/Slider'
import { MoonEclipsesInfo } from '@/components/MoonEclipsesInfo'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Carousel />
      <MoonEclipsesInfo />
    </div>
  )
}
