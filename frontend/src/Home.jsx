import logo from './logo.svg';
import './App.css';
import { NavBar } from "./NavBar.jsx"
import "./style.css"
import { SidebarRight } from './SidebarRight.jsx';
import { ConnectSidebar } from "./sideBarConnect.jsx"
import { CardsFilm } from './cardsFilm.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./Footer.jsx"

export function Home() {
  return (
    <div >
      <NavBar />
      <div className='container-fluid'>
        <div className="row  mx-2 g-1 colm-reverse g-lg-5" style={{ marginTop: "4.7rem" }}>
          <div className='col-lg-3 mt-sm-5'>
            <ConnectSidebar />
            <div className="d-lg-none"> <Footer  /></div>
          </div>
          <div className=" col-lg-7  m-lg-auto ">
            <CardsFilm />
            <div className="d-none d-lg-block" >
              <Footer />
            </div>

          </div>
          <div className='col-lg-2'>
            <SidebarRight />

          </div>
        </div>

      </div>
    </div>
  );
}

