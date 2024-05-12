/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import { RxCaretSort } from 'react-icons/rx'
import { FiInfo } from 'react-icons/fi'

import TableProps from '../IndexTable/interface'
import Graph from '../Graph'

import { BigDownArrow, BookMarkEmpty, BookMarkFill } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Graphdata } from 'design-systems/Templates/MarketAnaliticsTemplate/utils'

const CollectionTables: React.FC<TableProps> = ({ headData, data }) => {
  return (
    <div className="h-full w-full overflow-auto  pe-[12px]">
      <table className="rounded-corners h-full w-full rounded-sm font-Lexend">
        <thead>
          <tr>
            {headData?.map((item: any, key: number) => (
              <th key={key}>
                <div className="flex gap-2">
                  {key === 0 && <BookMarkEmpty />}
                  {item.isInfo && <FiInfo className="text-md" />}
                  <Typography
                    className={`line-clamp-2 overflow-hidden text-ellipsis ${key === 0 && 'ml-14'}`}
                    size="md"
                  >
                    <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                      {item.name}
                    </Typography>
                  </Typography>
                  {item.isSort && <RxCaretSort className="text-md" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, key: number) => (
            <tr className="!border-b-2 !border-black225_05" key={key}>
              <td>
                <div className="flex items-center gap-2 ">
                  <BookMarkFill />
                  <BigDownArrow className="-rotate-90" />
                  <Image alt="IMG" className="!rounded-br-[10px] !rounded-tl-[10px]" src={item.image} />
                  <Typography>
                    <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                      {item.name}
                    </Typography>
                  </Typography>
                </div>
              </td>
              <td>
                <Typography>{item.price}</Typography>
                <Typography className={item?.price < 0 ? 'text-warning-300' : 'text-green'}>
                  {item?.price + '%'}
                </Typography>
              </td>
              <td className=" !max-w-[120px]">
                <div className="!w-full">
                  <Graph
                    data={Graphdata}
                    height={31}
                    hideXAxis={true}
                    lineColor="#17D178"
                    width="100%"
                    xKey="month"
                    yKey="value"
                  />
                </div>
              </td>
              <td>{item.mc}</td>
              <td>{item.diluted_mc}</td>
              <td>{item.volume}</td>
              <td>{item.liquidity}</td>
              <td>{item.holder}</td>
              <td>{item.buyer}</td>
              <td>{item.seller}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="transparent-footer-bg">
          <tr>
            <td colSpan={headData.length || 0}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default CollectionTables
