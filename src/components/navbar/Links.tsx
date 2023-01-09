import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <>
    <li>
    <NavLink to="/" 
      className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
      >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/benefits" 
      className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
      >
      Benefits
    </NavLink>
  </li>
  <li>
    <NavLink to="/classes" 
      className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
      >
      Classes
    </NavLink>
  </li>
  <li>
    <NavLink to="/trainers" 
      className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
      >
      Training
    </NavLink>
  </li>
  <li>
    <NavLink to="/contact" 
      className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
      >
      Contact
    </NavLink>
  </li>
</>
  )
}

export default Links