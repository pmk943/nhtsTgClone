import "./Header.css";
function Header() {
  return (
    <div className="Header__conatiner">
      <div>
        <i class="bi bi-list" />
        <span>Nutrition and health Tracking System</span>
      </div>
      <div className="Header__conatiner__right">
        <img
          src="http://nhts.telangana.gov.in/img/logo_small.png"
          alt="TG emblem"
        />
        <button>
          <span>PEBBAIR</span>
          <i class="bi bi-caret-down" />
        </button>
      </div>
    </div>
  );
}

export default Header;
