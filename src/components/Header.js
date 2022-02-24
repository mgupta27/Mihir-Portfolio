import NavigationBar from './NavigationBar';
import './styles/Header.css'

const Header = () => {
  return(
    <div className="container">
      <div className="name">
        Mihir Gupta
      </div>
      <div className="profile-image" />
      <NavigationBar />
    </div>
  );
}

export default Header;
