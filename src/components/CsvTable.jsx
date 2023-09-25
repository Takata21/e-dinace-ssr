import { Headers } from '@/assets/constant'
import { csvToObjectArray } from '@/utils/ephemerisUtils'
import { EphemerisInfo } from '@/components/EphemerisInfo'

export function CsvTable({ info }) {
  const data = csvToObjectArray(info)

  return (
    <div className="mx-5">
      <h2 className="my-2 text-2xl font-bold">
        Información de Efemérides Generada(s)
      </h2>
      <EphemerisInfo />
      <table className="w-full mxd:hidden md:overflow-x-auto">
        <thead>
          <tr>
            {Headers.map((text, index) => (
              <th data-testid="th" key={index} className="text-sm text-left">
                {text?.abbreviation}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((ephem) => (
            <tr key={ephem.date}>
              <td className="py-2 text-sm text-left">{ephem?.date}</td>
              <td className="py-2 text-sm text-left">{ephem?.raIcrf}</td>
              <td className="py-2 text-sm text-left">{ephem?.decIcrf}</td>
              <td className="py-2 text-sm text-left">{ephem?.ApMag}</td>
              <td className="py-2 text-sm text-left">{ephem?.sBrt}</td>
              <td className="py-2 text-sm text-left">{ephem?.delta}</td>
              <td className="py-2 text-sm text-left">{ephem?.delDot}</td>
              <td className="py-2 text-sm text-left">{ephem?.sotr}</td>
              <td className="py-2 text-sm text-left">{ephem?.sto}</td>
              <td className="py-2 text-sm text-left">{ephem?.cnst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
