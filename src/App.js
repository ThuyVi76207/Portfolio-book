import React, { useEffect } from "react";
import "./components/homestyles.css";
import { querySelectorAll } from "react-dom";
import hcare from "./asset/hcare.png";
import cmsimg from "./asset/cms.jpg";
import ecom from "./asset/ecommerce.jpg";
import thanks from "./asset/thanks.png";

function App() {
  useEffect(() => {
    let turnPageBtnf = document.querySelectorAll(".page-change");
    const turnPageBtn = [...turnPageBtnf];
    console.log(turnPageBtn);

    turnPageBtn.forEach((el, index) => {
      el.onclick = (e) => {
        let pageTurnId = el.getAttribute("data-page");
        if (!pageTurnId) return;

        let pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains("turn")) {
          pageTurn.classList.remove("turn");
          setTimeout(() => {
            pageTurn.style.zIndex = "unset";
          }, 600);
        } else {
          pageTurn.classList.add("turn");
          pageTurn.style.zIndex = 20 - index;
        }
      };
    });

    // start up animation
    let cover = document.querySelector(".cover.right");
    let page = document.querySelectorAll(".page-right.turn");

    setTimeout(() => {
      cover.classList.add("turn");
    }, 2100);

    setTimeout(() => {
      cover.style.zIndex = -1;
    }, 2800);

    page.forEach((el, index) => {
      el.style.zIndex = 20 - index;
    });

    page.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove("turn");
        setTimeout(() => {
          el.style.zIndex = "unset";
        }, 600);
      }, (index + 1) * 200 + 2100);
    });
  }, []);

  return (
    <div className="portfolio-app align-item-center">
      <div className="book-wrap">
        <div className="cover cover-left"></div>
        <div className="book">
          <div className="book-page">
            <div className="text-center">
              <div className="bg-img avt"></div>
              <br />
              <h1 className="name">Nguyen Thi Thuy Vi</h1>
              <br />
              <div className="social-list">
                <a
                  href="https://www.facebook.com/ThuyVi76207/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-facebook-square fb"></i>
                </a>
                <a
                  href="https://www.instagram.com/thuyvi_rua02/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i className="bx bxl-instagram-alt inst"></i>
                </a>

                <a
                  href="https://github.com/ThuyVi76207"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i className="bx bxl-github git"></i>
                </a>
              </div>
              <br />
              <p className="introduce">
                Hello, I'm a{" "}
                <span className="txt-header">Frontend Developer</span>. I was
                born and raised in Can Tho. Present, I'm living and working in
                Ho Chi Minh City. I have a special passion for website
                programming and I want to develop it.
              </p>
            </div>
          </div>
          <div className="book-page page-right turn">
            <div className="page-front">
              <div className="wrap-content">
                <img width={"100%"} height={"auto"} src={thanks} alt="" />
                <br />
                <h2 className="txt-thanks">Thank for watching</h2>
              </div>
            </div>
          </div>
          <div className={`book-page page-right turn`} id="page-3">
            <div className="page-front">
              <div className="wrap-content">
                <img width={"100%"} height={"auto"} src={cmsimg} alt="" />
                <a
                  href="https://github.com/ThuyVi76207/ReactJS-CMS-Ticket-Sale_App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="ytb-btn">
                    <i className="bx bxl-github git"></i>
                    <h3>Github</h3>
                  </div>
                </a>
                <br />
                <h1>CMS TICKET SALE</h1>

                <ul className="list-project">
                  <li>
                    Link Github:
                    https://github.com/ThuyVi76207/ReactJS-CMS-Ticket-Sale_App
                  </li>
                  <li>This is sale ticket manager website</li>
                  <li>
                    The technology: HTML, Typescript, ReactJS, Tailwind,
                    Firebase.
                  </li>
                </ul>

                <div
                  className="page-change align-item-center"
                  data-page="page-3"
                >
                  Next<i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </div>
            <div className="page-back">
              <div className="wrap-content">
                <img width={"100%"} height={"auto"} src={ecom} alt="" />
                <a
                  href="https://github.com/ThuyVi76207/E-commerec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="ytb-btn">
                    <i className="bx bxl-github git"></i>
                    <h3>Github</h3>
                  </div>
                </a>
                <br />
                <h1>ECOMMERCE WEBSITE </h1>

                <ul className="list-project">
                  <li>
                    Link Github: https://github.com/ThuyVi76207/E-commerec
                  </li>
                  <li>This is Sales Manager website</li>
                  <li>
                    The technology: HTML, CSS(SCSS), Javascript, PHP framework
                    Laravel.
                  </li>
                </ul>
                <div
                  className="page-change back align-item-center"
                  data-page="page-3"
                >
                  <i className="bx bx-left-arrow-alt"></i> Back
                </div>
              </div>
            </div>
          </div>

          <div className={`book-page page-right turn`} id="page-1">
            <div className="page-front flex-top">
              <div className="wrap-content">
                <h1>Eduction</h1>
                <br />
                <h3>
                  Ho Chi Minh Open University{" "}
                  <span className="time">10/2019 - today</span>
                </h3>
                <p>Major: Information Technology</p>
                <br />
                <h1>Skills</h1>
                <br />
                <ul className="list-skill">
                  <li>HTML5, CSS3, SCSS, and JavaScript.</li>
                  <li>
                    Experience working with front-end frameworks such as
                    ReactJS.{" "}
                  </li>
                  <li>Cut layout from Figma design.</li>
                  <li>
                    Knowledge of cross-browser compatibility and responsive web
                    design
                  </li>
                </ul>
                <br />
                <h1>Experience</h1>
                <br />
                <h3>
                  Bagang Tech<span className="time">9/2022 - 11/2022</span>
                </h3>

                <p>Intern front-end </p>

                <br />

                <h1>Competitive</h1>
                <br />
                <h3>
                  Robocode<span className="time">9/2021 - 10/2021</span>
                </h3>

                <h3>
                  Scientific Research
                  <span className="time">10/2022 - Present</span>
                </h3>

                <div
                  className="page-change align-item-center"
                  data-page="page-1"
                >
                  View my project<i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </div>
            <div className="page-back">
              <div className="wrap-content">
                <img width={"100%"} height={"auto"} src={hcare} alt="" />
                <a
                  href="https://github.com/ThuyVi76207/HealthCareIT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="ytb-btn">
                    <i className="bx bxl-github git"></i>
                    <h3> Github</h3>
                  </div>
                </a>
                <br />
                <h1>HEALTH CARE WEBSITE</h1>

                <ul className="list-project">
                  <li>Link website: https://health-care-it.vercel.app/</li>
                  <li>
                    Link Github: https://github.com/ThuyVi76207/HealthCareIT
                  </li>
                  <li>
                    The technology: HTML, SCSS, Javascript, ReactJS, NodeJS
                  </li>
                  <li>
                    Main functions: Login, Register, Book an appointment, Call
                    the video, Pay via e-wallet PayPal, VNPay, Management
                    functions, CRUD,...
                  </li>
                </ul>
                <div
                  className="page-change back align-item-center"
                  data-page="page-1"
                >
                  <i className="bx bx-left-arrow-alt"></i> Back
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cover right"></div>
      </div>
    </div>
  );
}

export default App;
