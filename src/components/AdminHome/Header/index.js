import './Header.css'
function Header() {
    return (
        <div className="Header__conatiner">
            <i class="bi bi-list" />
            <span>Nutrition and health Tracking System</span>
            <img src="http://nhts.telangana.gov.in/img/logo_small.png" alt="TG emblem" />
            <button>
                <span>PEBBAIR</span>
                <i class="bi bi-caret-down" />
            </button>
            
        </div>
    )
}

export default Header;
