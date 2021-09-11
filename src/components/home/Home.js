import './Home.css';
import Main from './Main';
import SectionCards from './SectionCards';

const Home = () => (
  <div>
    <header>
      <nav>
        <p className="nav-arrow"> &#60; 2021</p>
        <p className="nav-title">temperature</p>
        <div className="nav-icons">
          <i className="fas fa-microphone" />
          <i className="fas fa-cog" />
        </div>
      </nav>
    </header>
    <Main />
    <SectionCards />
  </div>
);

export default Home;
