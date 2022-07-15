// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="listItem">
      <img className="appLogo" s src={imageUrl} alt={appName} />
      <h1 className="appName">{appName}</h1>
    </li>
  )
}
export default AppItem