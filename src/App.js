import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
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
import avatar from "./img/alain.jpg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Card from "./Card";
import Cards from "./components/Card.js";
import CardAvatar from "./components/CardAvatar.js";
import CardBody from "./components/CardBody.js";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-134246383-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

initializeReactGA();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollClassName: ""
    };
    this.bgLists = [
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
    this.divBackground = React.createRef();
    this.navInfo = React.createRef();
    this.counter = 0;
    this.handleScroll = this.handleScroll.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
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
   * Set CSS attribute based on IE or cureent modern Browser
   */
  setCustomStyle(){
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
  };

  /**
   * Set CSS attribute based on IE or cureent modern Browser
   */
  unSetCustomStyle(){
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
  };

  /**
   * Change navbar behavior base on the window page offset
   */
  headerColorChange() {
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > 875) {
      this.setCustomStyle();
    } else {
      this.unSetCustomStyle();
    }
  }

  componentDidMount() {
    let c = this;
    setInterval(function() {
      c.divBackground.current.style.backgroundImage = `url(${
        c.bgLists[c.counter % c.bgLists.length]
      })`;

      c.counter += 1;
    }, 5000);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (!window.mobilecheck()) {
      this.headerColorChange();
    } else {
      this.setCustomStyle();
    }
  }

  render() {
    return (
      <div ref={this.divBackground} className="main-content">
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
          className="nav-custom"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav ref={this.navInfo}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#abouts">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="second-content">
          <div className="intro">
            <h1>Hi There !</h1>
            <h1>I&apos;m Alain</h1>
            <h2>Engineer | LifeLong Learner</h2>
          </div>
          {window.mobilecheck() ? (
            <Particles
              width="100vw"
              height="100vh"
              params={{
                particles: {
                  number: {
                    value: 20
                  },
                  size: {
                    value: 4
                  }
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    }
                  }
                }
              }}
            />
          ) : (
            <Particles
              width="100vw"
              height="100vh"
              params={{
                particles: {
                  number: {
                    value: 150
                  },
                  size: {
                    value: 4
                  }
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    }
                  }
                }
              }}
            />
          )}

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
                  <Cards profile style={{ boxShadow : '12px 15px 20px 0 rgba(46, 61, 73, 0.15)', 
                                        borderRadius : '0.375rem', border : '1px solid rgba(0,0,0,.125)' }}>
                    <CardAvatar profile>
                      <a href="#alain" onClick={e => e.preventDefault()}>
                        <img src={avatar} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody profile>
                      <p className="text-muted">
                      Alain is an engineer with strong passion and interest for machine
                      learning and its broader applications to have societal impact  
                      in the realm of questions pertaining to awareness, adaptation, robustness and monitoring (A2RM). 
                      He is currently undergoing the African Master's in Machine Intelligence 
                      (<a href="https://aimsammi.org/" rel="noreferrer noopener" target="_blank">AMMI</a>).  
                      He has extensively worked on several projects
                      including but not limited to designing, implementing and
                      deploying web / mobile applications. Throughout his career, he
                      has worked with Python, Java and Javascript based framework.
                      More recently he started experimenting with training
                      and evaluating deep networks.
                      </p>
                    </CardBody>
                  </Cards>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <section id="projects">
            <h3 className="section-subheading">Projects</h3>
            <div className="container">
            <div className="row">
                <Card
                  data={{
                    link: "https://github.com/Cirhuzalain/CLSDemo",
                    title: "Multilingual news dataset",
                    desc:
                      "Crawled and scraped over 1000000 web links from RFI, BBC, VOA and DW using Requests, BeautifulSoup and Stem",
                    icon: "fa-newspaper",
                    n: 3
                  }}
                />
                <Card
                  data={{
                    link: "https://github.com/Cirhuzalain/Languagemodel",
                    title: "Language Model",
                    desc:
                      "Generate realistic text from news article using a Reccurent Neural Network (RNN)",
                    icon: "fa-language",
                    n: 3
                  }}
                />
                <Card
                  data={{
                    link: "https://github.com/Cirhuzalain/Word2vec",
                    title: "Word2vec",
                    desc:
                      "Trained a word2vec model with skipgram and negative sampling using the news dataset",
                    icon: "fa-project-diagram",
                    n: 3
                  }}
                />
              </div>
              <div className="row row-second">
                <Card
                  data={{
                    link: "https://github.com/Cirhuzalain/BikeSharePatterns",
                    title: "Bikeshare Prediction",
                    desc:
                      "Predicting bikeshare patterns using a Feed Forward Neural Network (FFNN)",
                    icon: "fa-bicycle",
                    n: 3
                  }}
                />
                <Card
                  data={{
                    link:
                      "https://github.com/Cirhuzalain/SkinCancer",
                    title: "Skin Cancer Analysis",
                    desc:
                      "Classify different categories of skin cancer using a residual Network",
                    icon: "fa-allergies",
                    n: 3
                  }}
                />
                <Card
                  data={{
                    link: "https://github.com/Cirhuzalain/GenerateFaces",
                    title: "Generate faces",
                    desc:
                      "Generate realistic faces and handwritten digits using a Deep Convolution Generative Adversarial Network (DCGAN)",
                    icon: "fa-user",
                    n: 3
                  }}
                />
              </div>
              
            </div>
          </section>
          <section>
            <h3 className="section-subheading">Miscellaneous</h3>
            <div className="container">
              <div className="row">
                <Card
                  data={{
                    link:
                      "https://play.google.com/store/apps/details?id=com.nijus.alino.bfwcoopmanagement",
                    title: "Buy From Women App",
                    desc: "A data collection app for farmer",
                    icon: "fa-female",
                    n: 5
                  }}
                />
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
                <a
                  href="https://github.com/Cirhuzalain"
                  rel="noreferrer noopener"
                  target="_blank"
                >
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
        <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">
            © 2020 McAlino
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
