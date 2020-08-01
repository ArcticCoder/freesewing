import React, { useState } from 'react'
import FormFieldList from '../../.form/FormFieldList'
import OptionPreamble from '../OptionPreamble'
import { injectIntl } from 'react-intl'
import { languages } from '@freesewing/i18n'

const DraftSettingLanguage = (props) => {
  const [value, setValue] = useState(props.value === null ? props.intl.locale : props.value)
  const [expanded, setExpanded] = useState(false)

  const update = (name, newValue, evt) => {
    props.updateValue(props.name, newValue)
    setValue(newValue)
  }

  const reset = () => {
    setValue(props.dflt || props.intl.locale)
    props.updateValue(props.name, props.dflt || props.intl.locale)
  }
  const patternReset = () => {
    setValue(props.intl.locale)
    props.updateValue(props.name, props.intl.locale)
  }
  const toggleExpanded = () => setExpanded(!expanded)

  const option = (
    <FormFieldList
      name={props.name}
      value={value}
      dflt={props.dflt}
      designDflt={props.intl.locale}
      onChange={update}
      label={'po-list-' + props.name}
      updateValue={update}
      list={languages}
    />
  )

  return (
    <li>
      <OptionPreamble
        dflt={props.dflt}
        designDflt={props.intl.locale}
        value={value}
        desc={props.desc}
        title={props.title}
        id={'po-list-' + props.name}
        displayValue={languages[value]}
        reset={reset}
        patternReset={patternReset}
        toggleExpanded={toggleExpanded}
        expanded={expanded}
        showHelp={() =>
          props.raiseEvent('showHelp', {
            type: 'draftSetting',
            value: props.name
          })
        }
        option={option}
        noDocs={props.noDocs}
      />
    </li>
  )
}

export default injectIntl(DraftSettingLanguage)
