import "./about.css"

export default function About() {
  return (
    <>
      <div className="about">
        <div className="container mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100">
          <button className="position-relative uk-button uk-button-default d-block d-md-none" type="button" data-uk-toggle="target: #offcanvas-overlay">Open</button>
          <h5 className="text-body-tertiary">ABOUT US</h5>
          <h2 className="m-0">WHO AM I?</h2>
          <p className="text-secondary">
            <span className="fw-bold">Hi Im Jackson Ford</span> On her way she met a copy.
            The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a
            thousand times and everything that was left from its origin
            would be the word (and) and the Little Blind Text should turn
            around and return to its own, safe country.
          </p>
          <p className="text-secondary">
            Even the all-powerful Pointing has no control about the blind texts it is
            an almost unorthographic life One day however a small line of blind text by
            the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <div className="row">
            <div className="col-md-3">
              <div className="uk-card uk-card-default uk-card-body mx-1 border-3 border-dark border-bottom ">
                <i className="icon icon-example" aria-hidden="true"></i>
                <p className="fs-5 text-dark">Graghic Design</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="uk-card uk-card-default uk-card-body mx-1 border-3 border-primary border-bottom ">
                <i className="icon icon-example" aria-hidden="true"></i>
                <p className="fs-5 text-dark">Web Design</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="uk-card uk-card-default uk-card-body mx-1 border-3 border-warning border-bottom ">
                <i className="icon icon-example" aria-hidden="true"></i>
                <p className="fs-5 text-dark">Software</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="uk-card uk-card-default uk-card-body mx-1 border-3 border-danger border-bottom ">
                <i className="icon icon-example" aria-hidden="true"></i>
                <p className="fs-5 text-dark">Application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
