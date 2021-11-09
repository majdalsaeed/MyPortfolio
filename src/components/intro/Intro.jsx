import "./intro.scss";
import img1 from "../image/majd.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:  1500,
      backSpeed: 70,
      strings: ["Wev","Web Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Majd Alsaeed</h1>
          <h3>
            Front-End <span ref={textRef}></span>
          </h3>
          <a href="#works">
            <ExpandMoreIcon className="icon" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}
