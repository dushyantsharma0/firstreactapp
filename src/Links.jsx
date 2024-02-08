import { NavLink } from "react-router-dom";

function Links() {




  return (
    <>
      <header>
       
        <nav>
          <ul>
            <li>
              <NavLink to="/home" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" >About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" >Contact</NavLink>
            </li>
            <li>
              <NavLink to="/data" >Data</NavLink>
            </li>
            <li>
              <NavLink to="/dataadd" >ADD Data</NavLink>
            </li>
          </ul>
        </nav>
      </header>


      

    </>
  );
}
export default Links
