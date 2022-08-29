import { Chevron } from 'shared/components/navigation/primary.js'
import Option from './option'
import { Li, Ul, Details, Summary, SumDiv, Deg } from 'shared/components/workbench/menu'
import { useTranslation } from 'next-i18next'

const OptionGroup = props => {
  const { t } = useTranslation(['optiongroups'])

  return (
    <Li>
      <Details>
        <Summary>
          <SumDiv>
            <Deg />
            <span className="font-bold">
              { t(props.group) }
            </span>
          </SumDiv>
          <Chevron />
        </Summary>
        <Ul>
          {Object.entries(props.options).map(([option, type]) => typeof type === "string"
            ? <Option {...props} type={type} option={option} key={option} />
            : <OptionGroup {...props} group={option} options={type} key={option}/>)
          }
        </Ul>
      </Details>
    </Li>
  )
}

export default OptionGroup
