// Write your code here
import './index.css'

const RepositoryItem = each => {
  const {list} = each
  const {avatatrUrl, forksCount, issuesCount, name, starsCount} = list
  return (
    <li className="langList">
      <img src={avatatrUrl} className="imgSize" alt="avatar" />
      <p className="red">{name}</p>

      <div className="infoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="tinyImg"
          alt="stars"
        />
        <p>{starsCount} stars</p>
      </div>

      <div className="infoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          className="tinyImg"
          alt="forks"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="infoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          className="tinyImg"
          alt="issues"
        />

        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
