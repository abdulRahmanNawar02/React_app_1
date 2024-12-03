import bgImgOne from "../../assets/project-assets/img_bg_1-PzvG2r05.jpg"
import bgImgTwo from "../../assets/project-assets/img_bg_2-DzCs5o-0.jpg"
import '../../app.css'
// import bgImgTwo from "../../assets/project-assets/img_bg_2-DzCs5o-0.jpg"

export default function Home() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" data-interval="2000" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner ">
          <div className="carousel-item  active">
          <button className="position-absolute uk-button uk-button-default d-block d-md-none" type="button" data-uk-toggle="target: #offcanvas-overlay">Open</button>

            <div className=" vw-50 position-absolute top-50 start-50 translate-middle">
              <h1 className="display-3 fw-bold">Hi!</h1>
              <h1 className="display-3 fw-bold">I`m Jackson</h1>
              <p className="m-0">
                100% html5 bootstrap templates Made
              </p>
              <p className="m-0">
                By
                <a className="ps-1" href="http://" target="_blank" rel="noopener noreferrer">
                  Colorlib.com
                </a>
              </p>
            </div>
            <img src={bgImgOne} className="d-block w-100 vh-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={bgImgTwo} className="d-block w-100 vh-100" alt="..."/>
          </div>
        </div>
      </div>
    </>
  )
}
