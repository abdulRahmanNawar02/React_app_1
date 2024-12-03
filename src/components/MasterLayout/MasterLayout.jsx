import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"

export default function MasterLayout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 bg-sidebar">
            <Sidebar />
          </div>
          <div className="col-12 col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
