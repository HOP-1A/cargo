"use client";

export default function Header() {
  return (
      <div className="whiteheader flex-column">
        <nav className="flexrow">
          <a href="index.php" className="nav-logo">
            <img src="https://www.cargoservice.mn/img/logo-black.png" alt="A&amp;N" />
          </a>
          <div className="flexrow">
          <div className="nav-item">Эхлэл</div>
          <div className="nav-item">Тооцоолуур</div>
          <div className="nav-item">Заавар</div>
          <img 
            src="https://static-00.iconduck.com/assets.00/dark-theme-icon-2048x2048-ymrfkxsy.png" 
            alt="Dark and Light Mode Icon" 
            className="round-image"
          />
          </div>
        </nav>
      </div>
  );
}