import { getEphemeris } from '@/services/Ephemeris'
import { create } from 'zustand'
export const useEphemerisStore = create((set) => {
  return {
    loading: false,
    ephemeris: null,

    fetchEphemeris: async ({
      targetBody,
      latitud,
      longitud,
      startTime,
      stopTime,
    }) => {
      set({ loading: true })
      try {
        const data = await getEphemeris({
          targetBody,
          latitud,
          longitud,
          startTime,
          stopTime,
        })
        set({ ephemeris: data })
      } catch (error) {
      } finally {
        set({ loading: false })
      }
    },
  }
})
