import { FC, useEffect, useState } from "react"

// const data = {
//   "a": {
//     "23": "asdfdsg",
//     "23": "sdfg",
//     "23": "dfghgf",
//     "23": "fghjfghj",
//     "23": "fghj",
//   },
//   "b": {
//     "23": "asdfdsg",
//     "23": "sdfg",
//     "23": "dfghgf",
//     "23": "fghjfghj",
//     "23": "fghj",
//   }
// }

interface DirectionListProps {
  data: any
} 

const DirectionList: FC<DirectionListProps> = ({
  data
}) => {

  const indexWords = (input: any) => {
    return input.reduce((acc: any, cur: any) => {
      
      acc[cur.attributes.title[0]] 
        ? acc[cur.attributes.title[0]].push(cur.attributes.title) 
        : acc[cur.attributes.title[0]] = [ cur.attributes.title ];

      return acc;
    }, {});
  }

  const [filteredData, setFilteredData] = useState(indexWords(data))

  useEffect(() => {
    setFilteredData(indexWords(data))
  }, [data])
  
  return (
    <div className="direction-list">
      <ul>
        {Object.keys(filteredData).map((key: any) => {
          return filteredData[key].map((item: string, idx: number) => <li key={key+idx}>
            {idx === 0 && <b>{key}</b>}
            <a href="/abs">{item}</a>
            {/* <span>23</span> */}
          </li>)
        })}
      </ul>
    </div>
  )
}

export default DirectionList