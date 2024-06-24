import React from "react";
import MainLogo from "../Logo/logo.svg";
import { Link } from "react-router-dom";
import CallIcion from "../Logo/Callicon.svg";
import Location from "../Logo/location.svg";
import Time from "../Logo/Time.svg";
import Trophy from "../Logo/Vector0.svg";
import Warrantee from "../Logo/Vector1.svg";
import Hand from "../Logo/shipping.svg";
import Call from "../Logo/Vector2.svg";
import Dasharrow from "../Logo/Vectorarrow.svg";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <section className="contactpart1">
        <img src={MainLogo} alt="" />
        <h1>Contact</h1>
        <div className="contactlink">
          <Link className="link11" to="/">
            Home
          </Link>
          <div>
            <img src={Dasharrow} alt="" />
          </div>
          <Link className="link11" to="/contact">
            Contact
          </Link>
        </div>
      </section>
      <section className="contactpart2">
        <h2 className="s2h2">Get In Touch With Us</h2>
        <p className="s2p">
          For More Information About Our Product & Services. Please Feel Free To
          Drop <br />
          Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="ping">
            <div>
            <div className="ping1">
            <img src={Location} alt="" />
            <div className="pingh4">
              <h4>Address</h4>
              <p>
                236 5th SE Avenue,
                <br /> New York NY10000,
                <br /> United States
              </p>
            </div>
          </div>
          <div className="ping1">
            <img src={CallIcion} alt="" />
            <div>
              <h4>Phone</h4>
              <p>
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="ping1">
            <img src={Time} alt="" />
            <div>
              <h4>Working Time</h4>
              <p>
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
          <div>
            <form className="ping2" action="" method="post">
              <p>
                Your name <br /> <input type="text" placeholder="ABC" />
              </p>
              <p>
                Email address <br />
                <input type="email" placeholder="abc@def.com" />
              </p>
              <p>
                Subject <br />
                <input type="text" placeholder="This is an option" />
              </p>
              <p>
                Message <br />
                <textarea
                  className="message"
                  type="text"
                  placeholder="Hi! i’d like to ask about"
                ></textarea>
              </p>
            </form>
            <button className="s2bt">Submit</button>
          </div>
        </div>
      </section>
      <section className="contactpart3">
        <div className="contactframe">
          <div className="frame">
            <img src={Trophy} alt="" />
            <div>
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className="frame">
            <img src={Warrantee} alt="" />
            <div>
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="frame">
            <img src={Hand} alt="" />
            <div>
              <h4>Free Shipping</h4>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div className="frame">
            <img src={Call} alt="" />
            <div>
              <h4>Order over 150 $</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
