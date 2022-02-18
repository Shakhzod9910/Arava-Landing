import Stroke from "../../Assets/img/Stroke.png";
import { useRef } from "react";
import Image from "next/image";
function Question(){
    const answer = useRef(null)

  function dropDown(evt){
    evt.currentTarget.classList.toggle('answer')
  }

    return(
        <div className="comments container">
          <h1>Eng ko‘p beriladigan savollar</h1>
          <ul>
            <li  onClick={dropDown}>
              <div className="question">
                <h4>What learning materials will I get?</h4>
                <div className="drop" >
                  <Image className="stroke" src={Stroke} alt="Stroke" />
                </div>
              </div>
              <p>
                As a Lingoda student, you can download the class materials for
                free and use them at any time. After your class, you will also
                find a quiz to help you refresh and practice your new skills.
                For English and A1 German students, downloadable exercises are
                available as well. All materials are uniquely created by Lingoda
                experts to align with CEFR standards. If you want to learn more
                about CEFR, view here.
              </p>
            </li>
            <li onClick={dropDown}>
              <div className="question">
                <h4>Concretely, what happens in a class?</h4>
                <div className="drop">
                  <Image className="stroke" src={Stroke} alt="Stroke" />
                </div>
              </div>
              <p>
                As a Lingoda student, you can download the class materials for
                free and use them at any time. After your class, you will also
                find a quiz to help you refresh and practice your new skills.
                For English and A1 German students, downloadable exercises are
                available as well. All materials are uniquely created by Lingoda
                experts to align with CEFR standards. If you want to learn more
                about CEFR, view here.
              </p>
            </li>
            <li onClick={dropDown}>
              <div className="question">
                <h4>Is Lingoda a language learning app?</h4>
                <div className="drop">
                  <Image className="stroke" src={Stroke} alt="Stroke" />
                </div>
              </div>
              <p>
                As a Lingoda student, you can download the class materials for
                free and use them at any time. After your class, you will also
                find a quiz to help you refresh and practice your new skills.
                For English and A1 German students, downloadable exercises are
                available as well. All materials are uniquely created by Lingoda
                experts to align with CEFR standards. If you want to learn more
                about CEFR, view here.
              </p>
            </li>
            <li onClick={dropDown}>
              <div className="question">
                <h4>What software & hardware do I need?</h4>
                <div className="drop">
                  <Image className="stroke" src={Stroke} alt="Stroke" />
                </div>
              </div>
              <p>
                As a Lingoda student, you can download the class materials for
                free and use them at any time. After your class, you will also
                find a quiz to help you refresh and practice your new skills.
                For English and A1 German students, downloadable exercises are
                available as well. All materials are uniquely created by Lingoda
                experts to align with CEFR standards. If you want to learn more
                about CEFR, view here.
              </p>
            </li>
            <li onClick={dropDown}>
              <div className="question">
                <h4>How long will it take to improve my language skills?</h4>
                <div className="drop">
                  <Image className="stroke" src={Stroke} alt="Stroke" />
                </div>
              </div>
              <p>
                As a Lingoda student, you can download the class materials for
                free and use them at any time. After your class, you will also
                find a quiz to help you refresh and practice your new skills.
                For English and A1 German students, downloadable exercises are
                available as well. All materials are uniquely created by Lingoda
                experts to align with CEFR standards. If you want to learn more
                about CEFR, view here.
              </p>
            </li>
          </ul>
        </div>
    )
}

export default Question