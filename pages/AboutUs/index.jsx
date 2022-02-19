import Navbar from "../../src/Components/Navbar";
import Footer from "../../src/Components/Footer";
import Image from "next/image";
import Img1 from "../../src/Assets/img/img11.svg";
import Img2 from "../../src/Assets/img/img22.svg";
import Img3 from "../../src/Assets/img/img33.svg";
// import ReactPlayer from "react-player";
import Question from "../../src/Components/Questions";
function AboutUs() {
  return (
    <section className="AboutUs">
      <Navbar />
      <div className="header_aboutus container">
        <h1>Biz haqimizda</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
          egestas sit iaculis turpis senectus. Id tristique sed fames sagittis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Convallis egestas sit
          iaculis turpis senectus. Id tristique sed fames sagittis. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="imagesWrapper container">
        <ul>
          <li>
            <Image src={Img1} />
          </li>
          <li>
            <Image src={Img2} />
          </li>
          <li>
            <Image src={Img3} />
          </li>
        </ul>
      </div>
      <div className="video_wrapper container">
        <div className="left_wrapper">
          <h2>Donation</h2>
          <p>
            Welcome to the National Hookah Community Association "NHCA". We are
            a diverse alliance of businesses from all ends of the Hookah
            experience, from manufacturers and importers of molasses, pipes and
            accessories to distributors, Hookah lounges and Hookah/shisha retail
            stores.
          </p>
          <p>
            If you are a Hookah business, please join us and help us defend and
            protect your business, our culture and community.
          </p>
          <p>
            If you are an interested member of the public, welcome. Please enjoy
            learning about Hookah and its unique culture and practice.
          </p>
        </div>
        <div className="right_wrapper">
          {/* <ReactPlayer controls  border-radius="8px" url="https://youtu.be/PkkV1vLHUvQ"/> */}
        </div>
      </div>
        <Question/>
      <Footer />
    </section>
  );
}

export default AboutUs;
