
import {MovieDataDetails} from "./MovieDataDetatils"
import {NavBar} from "./NavBar"
import { SidebarRight } from "./SidebarRight"
import { ConnectSidebar } from "./sideBarConnect"
import {Footer} from "./Footer"
export function MovieDetailsPage(){
return (
    <div >
    <NavBar />
    <div className='container-fluid'>
      <div className="row  mx-2 g-1 colm-reverse g-lg-5 " style={{ marginTop: "6.2rem" }}>
        <div className='col-lg-3 mt-sm-5'>
          <ConnectSidebar />
          <div className="d-lg-none" > <Footer /></div>
        </div>
        <div className=" col-lg-7  m-lg-auto ">
            <MovieDataDetails/>
          <div className="d-none d-lg-block" >
            <Footer />
          </div>

        </div>
        <div className='col-lg-2 mb-xl-0 mb-4'>
          <SidebarRight />

        </div>
      </div>

    </div>
  </div>
)
}