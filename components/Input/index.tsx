import {ChangeEvent, FC} from 'react'

interface InputProps {
  type?: string,
  className?: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  img?: string,
  name: string,
  radius?: boolean,
  small?: boolean,
  label?: string
}

const Input: FC<InputProps> = ({
  className = '',
  type = 'text',
  value,
  onChange,
  placeholder = '',
  img,
  name,
  radius = false,
  small = false,
  label = false
}) => {
  return(
    <div className={`input ${className}
                    ${img ? ' with-icon' : ''}
                    ${radius ? ' radius' : ''}
                    ${small ? ' small' : ''}
                  `}>
      {label && <label htmlFor={name}>{label}</label>}
      {img && <img src={img} alt="Input icon" uk-svg="" />}
      <input 
        id={name} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        type={type} 
        onChange={e => onChange(e)} />
      
    </div>
  )
}

export default Input