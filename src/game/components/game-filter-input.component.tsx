import Select from 'react-select'
import { SelectOption } from "../games.constants"

interface Props {
  name: string
  isSearchable?: boolean
  selectedValue: SelectOption
  options: SelectOption[]
  onChange: (value: string) => void
}

export const GameFilterInput = ({ name, isSearchable = true, selectedValue, options, onChange }: Props) => {
  return (
    <Select
      name={name}
      className="select"
      isSearchable={isSearchable}
      value={selectedValue}
      options={options}
      onChange={(filter) => {
        if (!filter?.value) return
        onChange(filter.value)
      }}

      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          color: 'white',
          backgroundColor: 'rgba(255, 255, 255, .1)',
          border: '1px solid rgba(255, 255, 255, .2)',
          borderRadius: '20px',
          minWidth: '200px',
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          color: '#000',
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          background: 'rgba(255, 255, 255, .8)',
          border: '1px solid rgba(255, 255, 255, .2)',
          color: '#000',
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          color: 'white',
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: 'white',
        }),
      }}
    />
  )
}