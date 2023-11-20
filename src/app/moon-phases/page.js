'use client'
import { Loader } from '@/components/Loader/Loader'
import { useState } from 'react'

export default function MoonPages() {
  const [dateTimeValue, setDateTimeValue] = useState()

  const { isLoading } = useMoonPhase({ dateTimeValue })
  // const [isImageLoading, setIsImageLoading] = useState(true)
  // const handleChange = (e) => {
  //   setSelectedDate(e.target.value)
  // }
  // const handleClick = (e) => {
  //   e.preventDefault()
  //   window.scrollTo(0, 0)
  //   setDateTimeValue(inputRef.current.value)
  // }

  // const handleKeyDown = (e) => {
  //   e.preventDefault() // Prevenir la entrada manual
  // }
  console.log(isLoading)
  return (
    <div className="flex flex-col justify-between w-full min-h-screen p-5 text-white bg-black xl:flex-row">
      {isLoading ? <Loader /> : <>hola</>}
    </div>
  )
}
