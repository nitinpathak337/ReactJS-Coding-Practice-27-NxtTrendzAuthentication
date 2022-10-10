// Write your JS code here
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-container">
      <img
        className="home-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <div className="nav-items">
        <ul className="list-container">
          <li className="nav-item-para">Home</li>
          <li className="nav-item-para">Products</li>
          <li className="nav-item-para">Cart</li>
        </ul>
        <button type="button" className="nav-item-button">
          Logout
        </button>
      </div>

      <img
        className="home-logout"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
    </div>
    <div className="icons-container">
      <img
        className="nav-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
      />
      <img
        className="nav-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
      />
      <img
        className="nav-icon"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
      />
    </div>
  </nav>
)

export default Header
