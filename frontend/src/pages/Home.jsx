import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">

      <div className="hero-content">
        <h1>Welcome to E-Commerce Store</h1>

        <p>
          Discover the latest Electronics, Fashion, Mobiles, Accessories and
          much more at the best prices.
        </p>

        <div className="hero-btns">
          <Link to="/products">
            <button className="primary-btn">Shop Now</button>
          </Link>

          <Link to="/register">
            <button className="secondary-btn">Get Started</button>
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
          alt="Shopping"
        />
      </div>

    </div>
  );
}

export default Home;