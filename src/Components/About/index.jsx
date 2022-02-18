import Image from "next/image";
import Market from "../../Assets/img/img1.png";
import Car from "../../Assets/img/img2.png";
import Person from "../../Assets/img/img3.png";
import Navbar from "../Navbar";
function About() {
  return (
    <section className="about ">
      <Navbar/>
      <div className="header container">
        <div className="left_wrapper">
          <h1>
            <span className="inside_header">Uydan turib</span> masofadan <span>xarid</span> qiling!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nunc ac
            eget eget lacinia porta massa. Commodo vel cursus mus rhoncus a sed.
          </p>
        </div>
        <div className="right_wrapper">
          <div className="top_img">
            <div className="top_left_img">
              <Image src={Market} alt="market" />
            </div>
            <div className="top_right_img">
              <Image src={Car} alt="car" />
            </div>
          </div>
          <div className="bottom_img">
             <Image src={Person} alt="person" />

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
