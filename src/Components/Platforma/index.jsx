import Image from "next/image";
import Vector from "../../Assets/img/Vector.svg";
import Buy from "../../Assets/img/Buy.svg";
import Uns from "../../Assets/img/uns.png";
import Mobile from "../../Assets/img/mobile.png";
import Third from "../../Assets/img/third.png";
import Apple from "../../Assets/img/Apple.svg";
import Play from "../../Assets/img/play.svg";
import Phones from "../../Assets/img/phones.svg";
import Downloadnow from "../../Assets/img/Downloadnow.svg";
import AppStore from "../../Assets/img/ApppStore.svg";
import GooglePlay from "../../Assets/img/GooglePlay.svg";
import Person from "../../Assets/img/person.svg";
import Arrow from "../../Assets/img/Arrow.svg";
import Arrow2 from "../../Assets/img/Arrow2.svg";
import Question from "../Questions";
import Footer from "../Footer";
import Resizable from "../Slider";

function Platforma() {
  return (
    <section className="platforma">
      <div className="vector_line">
        <Image className="vectio_line_img" src={Vector} alt="vector" />
      </div>
      <div className="about_platform container">
        <h2>Platforma haqida</h2>
      </div>
      <div className="sliders">
        <Resizable />
      </div>
      <ul className="about_list container">
        <li>
          <div className="img_wrapper">
            <Image className="image" src={Buy} alt="vector" />
          </div>
          <h1>Ilovani yuklab oling</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magnis
            facilisis donec etiam dignissim sodales duis ac. At quis odio amet
            velit commodo donec donec
          </p>
        </li>
        <li>
          <div className="img_wrapper">
            <Image className="image" src={Buy} alt="vector" />
          </div>
          <h1>Ilovani yuklab oling</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magnis
            facilisis donec etiam dignissim sodales duis ac. At quis odio amet
            velit commodo donec donec
          </p>
        </li>
        <li>
          <div className="img_wrapper">
            <Image className="image" src={Buy} alt="vector" />
          </div>
          <h1>Ilovani yuklab oling</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magnis
            facilisis donec etiam dignissim sodales duis ac. At quis odio amet
            velit commodo donec donec
          </p>
        </li>
      </ul>
      <h2 id="how_to_work_header">Bu qanday ishlaydi?</h2>

      <div className="how_to_work ">
        <div className="colum ">
          <div className="side">
            <Image className="image" src={Uns} alt="Uns" />
          </div>
          <div className="headers">
            <h1>Do‘kondan mahsulot tanlang</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magnis
              facilisis donec etiam dignissim sodales duis act consectetur
              adipiscing elit.
            </p>
          </div>
        </div>

        <div className="colum second">
          <div className="side">
            <Image className="image" src={Third} alt="Uns" />
          </div>
          <div className="headers">
            <h1>O‘z agentingizni toping</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magnis
              facilisis donec etiam dignissim sodales duis act consectetur
              adipiscing elit.
            </p>
          </div>
        </div>

        <div className="line">
          <span>01</span>
          <span>02</span>
          <span>03</span>
        </div>

        <div className="colum">
          <div className="side side_absolute">
            <Image className="image" src={Mobile} alt="Uns" />
          </div>
          <div className="headers">
            <h1>Ro‘yxatdan o’ting</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magnis
              facilisis donec etiam dignissim sodales duis act consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
        <div className="download">
          <div className="download_wrwpper container">
            <div className="download_header">
              <h1>Hoziroq yuklab oling!</h1>
              <p>
                Arava ilovasini yuklab olib, siz o‘zingiz uchun keng
                imkoniyatlarni ochasiz
              </p>
              <div className="download_link">
                <div className="store">
                  <div className="download_app">
                    <Image className="download_img" src={Apple} alt="Apple" />
                  </div>
                  <div className="download_p">
                    <span>
                      <Image
                        className="download_img"
                        src={Downloadnow}
                        alt="download"
                      />
                    </span>
                    <span>
                      <Image
                        className="download_img"
                        src={AppStore}
                        alt="Apple"
                      />
                    </span>
                  </div>
                </div>
                <div className="store">
                  <div className="download_app">
                    <Image className="download_img" src={Play} alt="Play" />
                  </div>
                  <div className="download_p">
                    <span>
                      <Image
                        className="download_img"
                        src={Downloadnow}
                        alt="download"
                      />
                    </span>
                    <span>
                      <Image
                        className="download_img"
                        src={GooglePlay}
                        alt="googlr"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="download_img_wrapper">
              <Image className="phones_img" src={Phones} alt="Phones" />
            </div>
          </div>
        </div>
        <div className="clients">
          <div className="client_wrapper container">
            <h1>Mijozlarimizning fikrlari</h1>
            <div className="massage_box">
              <div className="massager">
                <Image className="person_img" src={Person} alt="Person" />
              </div>
              <div className="massage">
                <div className="user_name">
                  <h3>Ergashev Doston</h3>
                  <span>19.04.2021</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  egestas in ac sit rhoncus dictumst iaculis purus eu. Dictum quam
                  eget massa ut. Tincidunt ac in ut ac diam eget tristique nunc.
                  Ut at commodo leo duis arcu commodo. Sed eget morbi libero velit
                  aliquet. Vel blandit ut mi.
                </p>
              </div>
            </div>
            <div className="slider">
              <div className="arrow">
                <Image className="arrow_img" src={Arrow} alt="Arrow" />
              </div>
              <div className="arrow2">
                <Image className="arrow_img" src={Arrow2} alt="Arrow2" />
              </div>
            </div>
          </div>
          <Question/>
          <Footer/>
          
        </div>
    </section>
  );
}

export default Platforma;
