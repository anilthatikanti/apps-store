// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, search, tabClassName} = props
  const {tabId, displayText} = tabDetails
  const ClassName = tabClassName ? 'selectItem' : 'item'

  const searching = () => {
    search(tabId)
  }

  return (
    <li className="list">
      <button className={ClassName} type="button" onClick={searching}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
