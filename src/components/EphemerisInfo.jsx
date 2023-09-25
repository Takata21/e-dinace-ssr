import { EphemerisLabels } from '@/assets/constant'
import { useEphemerisStore } from '@/store/Ephemeris'
import { getEphemerisInfo } from '@/utils/ephemerisUtils'
import { getId } from '@/utils/utils'
export function EphemerisInfo() {
  const { ephemeris } = useEphemerisStore()
  const data = getEphemerisInfo(ephemeris?.result)

  return (
    <div className="my-5">
      <dl className="flex flex-col gap-3 text-base">
        {data.map((item, index) => (
          <div
            className="grid justify-between grid-cols-2 gap-2 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            key={getId()}
          >
            <dt className="pl-2 text-sm font-bold">{EphemerisLabels[index]}</dt>
            <dd className="">
              {item.replace(/{/g, '(').replace(/}/g, ')') === 'undefined'
                ? 'n.a'
                : item.replace(/{/g, '(').replace(/}/g, ')')}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
