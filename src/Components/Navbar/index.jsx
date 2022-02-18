import Image from "next/image";
import Arava from "../../Assets/img/Arava.png";
import Multiplay from "../../Assets/img/multiply.png";
import Telegram from "../../Assets/img/Telegram.png";
import Instagram from "../../Assets/img/Instagram.png";
import Facebook from "../../Assets/img/Facebook.png";
import Tiktok from "../../Assets/img/Tiktok.png";
import Youtube from "../../Assets/img/Youtube.png";
import Hamburger from '../../Assets/img/text.png'
import { useRef } from "react";

function Navbar() {

  const menu = useRef(null)

  function openMenu(evt){
    menu.current.classList.add('activeMenu')
  }
  function closeMenu(evt){
    menu.current.classList.remove('activeMenu')
  }

  return (
    <section className="about ">
      <div className="navbar container">
        <div className="logo">
          <Image src={Arava} alt="logo" />
        </div>
        <div className="hamburger" onClick={openMenu}>
        <Image src={Hamburger} alt="logo" />
        </div>
        <div ref={menu} className="navlinks">
        <div className="adresseds">
            <h6>Manzilimiz</h6>
            <p>Andijon viloyati, Andijon shahri, G’ayrat ko’chasi, 4-uy, 1-qavat</p>
            <span>+998 93 117 72 22</span>
            <ul>
            <li>
                <Image src={Telegram} alt="telegram" />
              </li>
              <li>
                <Image src={Instagram} alt="Instagram" />
              </li>
              <li>
                <Image src={Facebook} alt="Facebook" />
              </li>
              <li>
                <Image src={Tiktok} alt="Tiktok" />
              </li>
              <li>
                <Image src={Youtube} alt="youtube" />
              </li>
            </ul>
          </div>
          <h1>Biz haqimizda</h1>
          <h1>Yordam</h1>
          <button>Bog‘lanish</button>
          <div className="times" onClick={closeMenu}>
            <Image src={Multiplay} alt="logo" />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Navbar;
