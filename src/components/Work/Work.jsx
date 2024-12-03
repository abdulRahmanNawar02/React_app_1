import './work.css'
export default function Work() {
  return (
    <>
      <div className="work">
        <div className="container mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100">
          <button className="position-relative uk-button uk-button-default d-block d-md-none" type="button" data-uk-toggle="target: #offcanvas-overlay">Open</button>
          <h5 className="text-body-tertiary">MY SPECIALTY</h5>
          <h2 className="m-0">MY SKILLS</h2>
          <div data-uk-filter="target: .js-filter">

            <ul className="uk-subnav uk-subnav-pill">
                <li data-uk-filter-control=".tag-white"><a href="#">White</a></li>
                <li data-uk-filter-control=".tag-blue"><a href="#">Blue</a></li>
                <li data-uk-filter-control=".tag-black"><a href="#">Black</a></li>
            </ul>

            <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" data-uk-grid>
                <li className="tag-white">
                    <div className="uk-card uk-card-default uk-card-body">Item</div>
                </li>
                <li className="tag-blue">
                    <div className="uk-card uk-card-primary uk-card-body">Item</div>
                </li>
                <li className="tag-white">
                    <div className="uk-card uk-card-default uk-card-body">Item</div>
                </li>
                <li className="tag-white">
                    <div className="uk-card uk-card-default uk-card-body">Item</div>
                </li>
                <li className="tag-black">
                    <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                </li>
                <li className="tag-black">
                    <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                </li>
                <li className="tag-blue">
                    <div className="uk-card uk-card-primary uk-card-body">Item</div>
                </li>
                <li className="tag-black">
                    <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                </li>
                <li className="tag-blue">
                    <div className="uk-card uk-card-primary uk-card-body">Item</div>
                </li>
                <li className="tag-white">
                    <div className="uk-card uk-card-default uk-card-body">Item</div>
                </li>
                <li className="tag-blue">
                    <div className="uk-card uk-card-primary uk-card-body">Item</div>
                </li>
                <li className="tag-black">
                    <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
