import { ChangeEvent, FC } from "react"

interface TextareaProps {
  className?: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  placeholder?: string,
  name: string,
  label?: string
}

const Textarea: FC<TextareaProps> = ({
  onChange,
  className,
  value,
  name,
  label = false,
  placeholder = ''
}) => {
  return (
    <div className={`textarea ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea 
        name={name} 
        id={name}
        placeholder={placeholder}
        onChange={e => onChange(e)}
        value={value} />
    </div>
  )
}

export default Textarea