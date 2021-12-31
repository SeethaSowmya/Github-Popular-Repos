import './index.css'

const LanguageFilterItem = props => {
  const {details, isActive, tabSelection} = props
  const {language, id} = details
  const sendId = () => {
    tabSelection(id)
  }

  const tabClassname = isActive ? 'button' : 'normalButton'
  return (
    <li>
      <button className={tabClassname} onClick={sendId} type="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
