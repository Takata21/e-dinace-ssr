const URL = 'https://flat-hare-60.deno.dev/'
export async function getEphemeris({
  targetBody,
  latitud,
  longitud,
  startTime,
  stopTime,
}) {
  const dataToSend = {
    url: `https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND='${targetBody}'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='500@399'&SITE_COORD='${longitud},${latitud}'&START_TIME='${startTime}'&STOP_TIME='${stopTime}'&CSV_FORMAT='YES'&STEP_SIZE='1%20d'&QUANTITIES='1,9,20,23,24,29'`,
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
  }
  try {
    const response = await fetch(URL, requestOptions)
    if (!response.ok) {
      throw new Error(
        'La solicitud no se completó correctamente. Recargue la página e inténtelo nuevamente.'
      )
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error al generar efemérides')
  }
}
