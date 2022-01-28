import { FC, useState } from "react"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { ru } from 'date-fns/locale'

interface DateRangeStateProps {
  startDate: Date,
  endDate: Date,
  key: string
}

interface DateRangeHandle {
  selection?: DateRangeStateProps
}

const DatePicker: FC = () => {

  const [selection, setSelection] = useState<DateRangeStateProps>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  const handleSelect = (ranges: DateRangeHandle) => {
    setSelection(ranges.selection || {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    })
  }

  return (
    <div className="date-picker">
      <DateRange
        ranges={[selection]}
        onChange={handleSelect}
        locale={ru}
        months={2}
        direction="horizontal"
      />
    </div>
  )
}

export default DatePicker