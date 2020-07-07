import React, { useState } from 'react'
import FormFieldList from '../../.form/FormFieldList'
import OptionPreamble from '../OptionPreamble'

const DraftSettingUnits = props => {
  const [value, setValue] = useState(props.dflt)
  const [expanded, setExpanded] = useState(false)

  const update = (name, newValue, evt) => {
    props.updateValue(props.name, newValue)
    setValue(newValue)
  }

  const reset = () => {
    setValue(props.dflt)
    props.updateValue(props.name, props.dflt)
  }

  const patternReset = () => {
    setValue(props.designDflt)
    props.updateValue(props.name, props.designDflt)
  }

  const toggleExpanded = () => setExpanded(!expanded)

  let option = (
    <FormFieldList
      name="units"
      value={value}
      dflt={props.dflt}
      onChange={update}
      label="po-bool-units"
      updateValue={update}
      list={props.list}
    />
  )

  return (
    <li>
      <OptionPreamble
        dflt={props.dflt}
        designDflt={props.designDflt}
        value={value}
        desc={props.desc}
        title={props.title}
        id="po-list-units"
        displayValue={props.list[value]}
        reset={reset}
        patternReset={patternReset}
        toggleExpanded={toggleExpanded}
        expanded={expanded}
        showHelp={() =>
          props.raiseEvent('showHelp', {
            type: 'draftSetting',
            value: 'units'
          })
        }
        option={option}
        noDocs={props.noDocs}
      />
    </li>
  )
}

export default DraftSettingUnits
