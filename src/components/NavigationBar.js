import { Link } from 'react-router-dom';
import './styles/NavigationBar.css'

const NavigationBar = () => {
  return(
    <div className="navigation-bar">
        <ul>
          <li>
              <Link to="/">About</Link>
          </li>
          <li>
              <Link to="/Projects">Projects</Link>
          </li>
          <li>
              <Link to="/Blog">Blog</Link>
          </li>
          <li>
              <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
  );
}

export default NavigationBar;
