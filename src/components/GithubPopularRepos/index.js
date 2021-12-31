import {Component} from 'react'

import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem/index'
import RepositoryItem from '../RepositoryItem/index'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    List: [],
    status: true,
    isLoading: true,
    activeTabId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.fetchTheData()
  }

  tabSelection = id => {
    this.setState({activeTabId: id})
    this.fetchTheData()
  }

  onSuccess = data => {
    const updatedList = data.popular_repos.map(each => ({
      avatatrUrl: each.avatar_url,
      forksCount: each.forks_count,
      issuesCount: each.issues_count,
      name: each.name,
      id: each.id,
      starsCount: each.stars_count,
    }))
    this.setState({List: updatedList, isLoading: false})
  }

  onFailure = () => {
    this.setState({status: false, isLoading: false})
  }

  fetchTheData = async () => {
    const {activeTabId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)

    const data = await response.json()
    console.log(response.ok, 'resp')
    if (response.ok === true) {
      this.onSuccess(data)
    } else {
      this.onFailure()
    }
  }

  render() {
    const {List, isLoading, status, activeTabId} = this.state
    return (
      <div className="Container">
        <h1>Popular</h1>
        <ul className="unOL">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              details={eachLanguage}
              isActive={eachLanguage.id === activeTabId}
              key={eachLanguage.id}
              tabSelection={this.tabSelection}
            />
          ))}
        </ul>
        {isLoading && (
          <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
        )}
        {status && (
          <ul className="unOL2">
            {List.map(each => (
              <RepositoryItem list={each} key={each.id} />
            ))}
          </ul>
        )}
        {!status && (
          <div className="failContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
              className="failureImg"
            />
            <h1>Something Went Wrong</h1>
          </div>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
