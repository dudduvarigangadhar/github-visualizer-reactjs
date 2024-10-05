import {useState, useEffect, useContext} from 'react'
import Header from '../Header'
import ProfileContext from '../../ProfileContext/index'
import './index.css'

const Repository = () => {
  const [repos, setRepos] = useState([])
  const {username} = useContext(ProfileContext)
  console.log('username', username)

  useEffect(() => {
    const fetchRepos = async () => {
      const options = {
        method: 'GET',
      }
      // api url
      const response = await fetch(apiUrl, options)
      if (response.ok === true) {
        const fetchedData = await response.json()
        console.log(fetchedData)
        const updatedData = fetchedData.map(eachItem => ({
          name: eachItem.name,
          languages: eachItem.languages,
          forks: eachItem.forks,
          forksCount: eachItem.forksCount,
          forksUrl: eachItem.forks_url,
          id: eachItem.id,
          stargazersCount: eachItem.stargazers_count,
          stargazersUrl: eachItem.stargazers_url,
        }))
      }
    }
    fetchRepos()
  }, [])

  return (
    <div className="repo-bg-container">
      <Header />
      <div>
        <h2 className="repo-main-heading">Repositories</h2>
      </div>
    </div>
  )
}

export default Repository
