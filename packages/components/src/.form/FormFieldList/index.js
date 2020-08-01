import React, { useState, useEffect } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const FormFieldList = (props) => {
  const [value, setValue] = useState(props.dflt)
  useEffect(() => {
    if (props.value !== value) setValue(props.value)
  }, [props.value])
  const update = (evt) => {
    props.updateValue(props.name, evt.target.value)
    setValue(evt.target.value)
  }

  return (
    <RadioGroup onChange={update} value={value}>
      {Object.keys(props.list).map((item, index) => (
        <FormControlLabel
          key={item}
          control={<Radio color="primary" />}
          value={item}
          checked={value === item ? true : false}
          label={props.list[item]}
          className="po-list-item"
        />
      ))}
    </RadioGroup>
  )
}

export default FormFieldList
