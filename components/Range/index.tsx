import {useEffect, useState} from 'react'
import InputRange from 'react-input-range';
import t from '../../data/translations.json'

import { useRange, UseRangeProps } from 'react-instantsearch-hooks-web'

const Range = (props: UseRangeProps) => {

  const { start, range, refine } = useRange({
    attribute: 'rating',
    min: 0,
    max: 5,
    precision: 1,
  });

  const [value, setValue] = useState<any>(range)
  
  const onRangeSubmit = (value: any) => {    

    setValue(value)  

    refine([
      Number.isFinite(value.min) ? value.min : undefined,
      Number.isFinite(value.max) ? value.max: undefined,
    ]);
    
  };

  return (
    <div className="range">
      <span>{t.rating}</span>
      <InputRange
        maxValue={range.max}
        minValue={range.min}
        allowSameValues={true}
        value={value}
        // @ts-ignore
        onChange={onRangeSubmit} />
    </div>
  )
}

export default Range