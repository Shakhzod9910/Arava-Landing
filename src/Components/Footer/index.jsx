import Image from "next/image";
import Telegram from "../../Assets/img/Telegram.png";
import Instagram from "../../Assets/img/Instagram.png";
import Facebook from "../../Assets/img/Facebook.png";
import Tiktok from "../../Assets/img/Tiktok.png";
import Youtube from "../../Assets/img/Youtube.png";
import AppStore from "../../Assets/img/App-Store.png";
import PlayMarket from "../../Assets/img/Play-Market.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul className="footer_list">
          <li>
            <h5>Ma’lumotlar</h5>
            <span>Korporativ hamkorlik</span>
            <span>Litsenziya</span>
          </li>
          <li className="where">
              <h5>Manzilimiz</h5>
              <span>Andijon viloyati, Andijon shahri, G’ayrat ko’chasi, 4-uy, 1-qavat</span>
          </li>
          <li className="footer_border">
            <h5 className="footer_download">Ijtimoiy tarmoqlar</h5>
            <h5 className="tel_number">+998 93 117 72 22</h5>
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
          </li>
          <li className="footer_download">
            <h5>Dasturni yuklab olish</h5>
            <div className="download_apps">
              <Image src={AppStore} />
            </div>
            <div className="download_apps">
              <Image src={PlayMarket}  />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
