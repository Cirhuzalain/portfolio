import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Particles from "react-tsparticles";
import down from "./img/arrow.svg";
import one from "./img/1.webp";
import two from "./img/2.webp";
import three from "./img/3.webp";
import four from "./img/4.webp";
import five from "./img/5.webp";
import six from "./img/6.webp";
import seven from "./img/7.webp";
import eight from "./img/8.webp";
import nine from "./img/9.webp";
import ten from "./img/10.webp";
import eleven from "./img/11.webp";
import avatar from "./img/alain.jpeg";
import ProjectDetails from "./components/ProjectDetails.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LinkMeta from "./components/LinkMeta.jsx";

export default function App() {
  const bgLists = [
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ten,
      eleven
  ];

  let counter = 0; // Maybe useState
  let divBackground = useRef(null);

  useEffect(() => {
        setInterval(function() {
            divBackground.current.style.backgroundImage = `url(${
                    bgLists[counter % bgLists.length]
            })`;

            counter += 1;
        }, 5000);
        window.addEventListener("scroll", handleScroll);
        document.getElementsByTagName("canvas")[0]
                 .setAttribute(
                    "style",
                    "width: 100% !important; height: 100% !important; position: relative !important; z-index: 0 !important; top: 0px !important; left: 0px !important; pointer-events: none;"
                 );
        return () => {
          window.removeEventListener("scroll", handleScroll);
        }
  }, []);

  useIsSSR = () => {
    const [isISsr, setIsSsr] = useState(true);

        useEffect(() => {
            setIsSsr(false);
        }, []);

        return isISsr;
  }

   const isISsr = useIsSSR();
   if (!isISsr){
       window.mobilecheck = function() {
            var check = false;
            (function(a) {
                  if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                      a
                    ) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                      a.substr(0, 4)
                    )
                  )
                  check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
       };
   }

  /**
   * Set CSS attribute based on IE or current modern Browser
   */
  setCustomStyle = () => {
        if (!window.mobilecheck()) {
              if (document.all) {
                document
                  .getElementsByClassName("bg-dark")[0]
                  .setAttribute(
                    "cssText",
                    "background-color: #343a40 !important; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12) !important;"
                  );
              } else {
                document
                  .getElementsByClassName("bg-dark")[0]
                  .setAttribute(
                    "style",
                    "background-color: #343a40 !important; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12) !important"
                  );
              }
        }
  }

  /**
   * Set CSS attribute based on IE or current modern Browser
   */
  unSetCustomStyle = () => {
        if (!window.mobilecheck()) {
              if (document.all) {
                document
                  .getElementsByClassName("bg-dark")[0]
                  .setAttribute(
                    "cssText",
                    "background-color: transparent !important; box-shadow: unset"
                  );
              } else {
                document
                  .getElementsByClassName("bg-dark")[0]
                  .setAttribute(
                    "style",
                    "background-color: transparent !important; box-shadow: unset"
                  );
              }
        }
  }

  /**
   * Change navbar behavior base on the window page offset
   */
  headerColorChange = () => {
    if (!isISsr){
        const windowsScrollTop = window.pageYOffset;

        if (windowsScrollTop > 875) {
          setCustomStyle();
        } else {
          unSetCustomStyle();
        }
    }
  }

  handleScroll = (event) => {
      if (!isISsr){
        if (!window.mobilecheck()) {
            headerColorChange();
        } else {
            setCustomStyle();
        }
      }
  }



  checkMobile = () => {
    if (!isISsr) {
        return window.mobilecheck();
    }
    return false;
  }

  handleSubmit = () => {
      // Process form data
      // Send data with fetch, axios API or Vanilla AJAX
  }

  return (
      <html lang="en">
        <LinkMeta />
      <body>
      <div ref={divBackground} className="main-content">
        <Header />
        <div className="second-content">
          <div className="intro">
            <h1>Hi There !</h1>
            <h1>I&apos;m Alain</h1>
            <h2>Software Engineer | LifeLong Learner</h2>
          </div>
            <Particles
              width="100vw"
              height="100vh"
              options={{
                particles: {
                  number: {
                    value: `${checkMobile() ? (20):(80)}`,
                  },
                  size: {
                    value: 4
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 0.9,
                    straight: false,
                  },
                },
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                detectRetina: true,
              }}
            />
          <a href="#abouts" className="scroll">
            <img src={down} alt="navigation" />
          </a>
        </div>
        <section id="abouts" className="section-about">
          <div className="container">
            <div className="row abouts">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                      <div className="jss1 jss3 jss_content">
                        <div className="jss5 jss6">
                          <a href="#alain" onClick={e => e.preventDefault()}>
                            <img src={avatar} alt="" />
                          </a>
                        </div>
                        <div className="jss8 jss10">
                          <p className="text-muted">
                              Alain is an Entrepreneur, a Researcher & a Software Engineer with strong passion and interest for Machine Learning more broadly
                              and Natural Language Processing / Understanding more specifically, its broader applications (Entertainment, Health, Mobility, ...) to have societal impact
                              in the realm of questions pertaining to awareness, adaptation, robustness, fairness, explainability, security, privacy, monitoring, ... (M^3A2RFESPLP, ...).
                              He previously spent some time at <a href="https://aimsammi.org/" rel="noreferrer noopener" target="_blank">AIMS</a> thinking about the foundation of Machine Intelligence.
                              He has extensively worked on several projects
                              including but not limited to designing, implementing and
                              deploying web / mobile applications. Throughout his career, he
                              has worked with Python, Golang, Rust, C++, Java and Javascript based framework.
                              More recently, he started experimenting with training and evaluating
                              the properties of the representation learned by deep networks.
                          </p>
                       </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section id="projects">
            <h2 className="section-heading">Projects</h2>
            <div className="container">
                <div className="row">
                    <ProjectDetails />
                </div>
            </div>
          </section>
        </section>
        <section id="contacts" className="section-contact">
          <h2 className="section-heading">Contacts</h2>
          <div className="container">
            <div className="row">
              <div className="about card col-md-12 col-md-offset-1">
                <a href="mailto:cirhuzalain@gmail.com">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary" />
                        <i className="fa fa-envelope fa-stack-1x fa-inverse" />
                     </span>
                </a>
                <a href="https://github.com/Cirhuzalain"
                   rel="noreferrer noopener"
                   target="_blank">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary" />
                        <i className="fab fa-github-square fa-stack-1x fa-inverse" />
                    </span>
                </a>
                <a
                    href="https://twitter.com/cirhuzalain"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary" />
                        <i className="fab fa-twitter-square fa-stack-1x fa-inverse" />
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/mcalino/"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary" />
                        <i className="fab fa-linkedin fa-stack-1x fa-inverse" />
                    </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-VVM9MZ5PGV"></script>
      <script src="/server.js"></script>
      <script src="/analytics.js"></script>
     </body>
    </html>
  );
}