
import "./work.scss";
import img2 from "../image/BikeTime.png";
import img3 from "../image/DatingApp.png";
export default function Work() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                        <div className="left">
                            <div className="item">
                                <img src={img2} alt="" className="img2" />
                                <h3>BikeTime</h3>
                            </div>
                            <div className="item">
                            <img src={img3} alt="" className="img2" />
                                <h3>Dating App</h3>
                            </div>
                            
                        </div>
                        <div className="right">
                        
                        </div>
                </div>
            </div>
        </div>
    )
}
