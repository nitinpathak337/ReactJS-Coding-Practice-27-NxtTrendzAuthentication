// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-content">
      <div className="details">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          className="home-image-sm"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <p className="home-para">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a maker of the era and
          we are in a revolution. Your fashion makes you been and heard that way
          you are. So, celebrate the seasons now and exciting fashion in your
          own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>

      <img
        className="home-image-lg"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </>
)

export default Home
