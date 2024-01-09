import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="logo"> MrCodeIq </h1>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>

      <ul className="menu">
        <li>
          <Link to="/">الرئيسية</Link>
        </li>
        <li>
          <Link to="/services">الخدمات</Link>
        </li>
        <li>
          <Link to="/projects">المشاريع</Link>
        </li>
        {/* <li>
          <Link to="/blog" onClick={handleLinkClick}>
            المدونة
          </Link>
        </li> */}
        <li>
          <Link to="/skills">المهارات</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
