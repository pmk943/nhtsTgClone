import Header from "./Header"
import Sidebar from "./Sidebar"
import './AdminHome.css'
import AdminMainPage from './AdminMainPage'
import { Outlet } from "react-router-dom"

function AdminHome() {
    return (
        <div className="AdminHome__container">

            <nav className="Admin__nav" >
                <Sidebar />
            </nav>
            <main className="Admin__main">
                <header >
                    <Header/>
                </ header>
                <section>
                    <Outlet />
                </section>
                
                <footer>
                    {/* Footer goes inside the main */}
                    <p>© 2015 Women Development and Child Welfare Department, Govt. of Telangana.</p>
                </footer>
            </main>
        </div>
    )
}

export default AdminHome
