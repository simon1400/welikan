import {useState} from 'react'
import InputRange from 'react-input-range';

const Range = () => {

  const [value, setValue] = useState({
    min: 0, 
    max: 20
  })

  return (
    <div className="range">
      <span>Рейтинг</span>
      <InputRange
        maxValue={20}
        minValue={0}
        allowSameValues={true}
        value={value}
        onChange={value => setValue(value)} />
    </div>
  )
}

export default Range