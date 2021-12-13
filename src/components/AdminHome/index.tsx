import Header from "./Header"
import Sidebar from "./Sidebar"
import './AdminHome.css'
import AdminMainPage from './AdminMainPage'
import { Outlet } from "react-router-dom"

function AdminHome() {
    return (
        <div className="AdminHome__container">

            <nav>
                <Sidebar />
            </nav>
            <main>
                <header >
                    <Header/>
                </ header>
                <section>
                    <Outlet />
                </section>
                
                <footer>
                    {/* Footer goes inside the main */}
                </footer>
            </main>
        </div>
    )
}

export default AdminHome
