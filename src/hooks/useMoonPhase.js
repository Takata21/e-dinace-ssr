import { EARTH_DIAMETER } from '@/assets/constant'
import { getMoon } from '@/services/Moon'
import {
  convertAge,
  formatGeographicCoordinates,
  getLunarPhaseDescription,
} from '@/utils/astronomyUtils'
import { useEffect, useState } from 'react'

export async function useMoonPhase({ dateTimeValue }) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchMoonPhase = async () => {
      try {
        setIsLoading(true)
        const moonPhase = await getMoon(dateTimeValue)

        setData(moonPhase)
      } catch (error) {
        throw new Error(
          'Error al cargar las fases lunares. Por favor, vuelva a intentarlo.'
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchMoonPhase()
  }, [dateTimeValue])
  console.log(data)
  const { days, hours, minutes } = convertAge(data?.age)
  const phaseDesc = getLunarPhaseDescription(data?.age).es
  const subSolarCoordinates = formatGeographicCoordinates(
    data?.subsolar_lon,
    data?.subsolar_lat
  )
  const subEarthCoordinates = formatGeographicCoordinates(
    data?.subearth_lon,
    data?.subearth_lat
  )
  const earthDiameters = (data?.distance / EARTH_DIAMETER).toFixed(2)

  const moonData = {
    ...data,
    days,
    hours,
    minutes,
    phaseDesc,
    subSolarCoordinates,
    subEarthCoordinates,
    earthDiameters,
  }
  return { isLoading, moonData }
}
