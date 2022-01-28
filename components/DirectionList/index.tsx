import { FC } from "react"

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

const DirectionList: FC = () => {
  return (
    <div className="direction-list">
      <ul>
        <li><b>A</b><a href="/asd">Аллергология</a><span>23</span></li>
        <li><a href="/asd">Аллергология</a><span>23</span></li>
        <li><a href="/asd">Аллергология</a><span>23</span></li>
        <li><a href="/asd">Аллергология</a><span>23</span></li>
        <li><b>A</b><a href="/asd">Аллергология</a><span>23</span></li>
        <li><a href="/asd">Аллергология</a><span>23</span></li>
        <li><a href="/asd">Аллергология</a><span>23</span></li>
        <li><a href="/asd">Аллергология</a><span>23</span></li>
      </ul>
    </div>
  )
}

export default DirectionList