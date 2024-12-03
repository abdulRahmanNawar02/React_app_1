import { Link } from "react-router-dom"
import myImg from "../../assets/project-assets/about-BgAkqdr2.jpg"
import './sidebar.css'
export default function Sidebar() {
  return (
    <>
      <div className="myimg d-none d-md-block">
        <img className="w-100 h-100 object-fit-fill rounded-circle" src={myImg} alt="" />
        <div className="descrip my-3 text-center">
          <h3>Jackson Ford</h3>
          <p className="m-0">
            <a href="http://" target="_blank" rel="noopener noreferrer">UI/UX/Designer</a> in Philippines
          </p>
        </div>
        <div className="navlist">
          <ul className="list-group text-center">
            <li className="list-group-item border-0">
              <Link className="text-dark text-decoration-none" to={"/home"}>Home</Link>
            </li>
            <li className="list-group-item border-0">
              <Link className="text-dark text-decoration-none" to={"/about"}>About</Link>
            </li>
            <li className="list-group-item border-0">
              <Link className="text-dark text-decoration-none" to={"/skills"}>Skills</Link>
            </li>
            <li className="list-group-item border-0">
              <Link className="text-dark text-decoration-none" to={"./work"}>Work</Link>
            </li>
            <li className="list-group-item border-0">
              <Link className="text-dark text-decoration-none" to={"./Experiance"}>Experience</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* sidebar for mini-screen */}
      <div id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" data-uk-close></button>
          <div className="img_pro d-flex">
            <img className="w-25 h-25 m-auto object-fit-fill rounded-circle" src={myImg} alt="" />
          </div>
        <div className="descrip my-3 text-center">
          <h3>Jackson Ford</h3>
          <p className="m-0">
            <a href="http://" target="_blank" rel="noopener noreferrer">UI/UX/Designer</a> in Philippines
          </p>
        </div>
        <div className="navlist">
          <ul className="list-group text-center bg-dark">
            <li className="list-group-item border-0">
              <Link className="text-dark text-decoration-none" to={"/home"}>Home</Link>
            </li>
            <li className="list-group-item border-0">
              <Link className="text-dark text-decoration-none" to={"/about"}>About</Link>
            </li>
            <li className="list-group-item border-0">
              <Link className="text-dark text-decoration-none" to={"/skills"}>Skills</Link>
            </li>
            <li className="list-group-item border-0">
              <Link className="text-dark text-decoration-none" to={"./work"}>Work</Link>
            </li>
            <li className="list-group-item border-0">
              <Link className="text-dark text-decoration-none" to={"./Experiance"}>Experience</Link>
            </li>
          </ul>
        </div>



          
        </div>
      </div>
    </>
  )
}
