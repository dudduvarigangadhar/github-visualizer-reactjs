import Header from '../Header'
import './index.css'

const Home = () => {
  const home = null

  return (
    <div className="background-container">
      <Header />
      <div>
        <div className="InputContainer">
          <input placeholder="Enter github username" />
        </div>
      </div>
    </div>
  )
}

export default Home
