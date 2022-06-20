import {useState} from 'react'
import InputRange from 'react-input-range';
import t from '../../data/translations.json'

const Range = () => {

  const [value, setValue] = useState({
    min: 0, 
    max: 20
  })

  return (
    <div className="range">
      <span>{t.rating}</span>
      <InputRange
        maxValue={20}
        minValue={0}
        allowSameValues={true}
        value={value}
        // @ts-ignore
        onChange={value => setValue(value)} />
    </div>
  )
}

export default Range