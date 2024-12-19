import React from "react";
import Navbar from "./Navbar";
import "./HelpSupportPage.css";
import { GrLocation } from "react-icons/gr";
import {
  BsChatDotsFill,
  BsChatLeftText,
  BsChatRight,
  BsChatRightText,
} from "react-icons/bs";
import { IoChatbox, IoShareSocialOutline } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";
import { MdOutlineSocialDistance } from "react-icons/md";
import { LuMailCheck } from "react-icons/lu";

const HelpAndSupportPage = () => {
  return (
    <div className="help-support-container">
      <Navbar />
      <main className="help-main">
        <h1>Hello, how can we help you?</h1>
        <p>Find Travel guide, FAQ, chat</p>

        <section className="help-options">
          <div className="option-card">
            <div className="icon1">❓</div>
            <div className="text-content">
              <h2>FAQ</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="option-card">
            <GrLocation className="profile-icon-large" />
            <div className="text-content">
              <h2>Travel Guide</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </section>

        <section className="expandable-section">
          <div className="header">
            <BsChatRightText className="chat-icon-large" />
            <div className="title-text">
              <h2>Chat</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="social-icons">
            <a href="#" className="chat-icon telegram">
              <img src="/telegram-icon.svg" alt="Telegram" />
              <p>Telegram</p>
            </a>
            <a href="#" className="chat-icon whatsapp">
              <img src="/whatsapp-icon.svg" alt="WhatsApp" />
              <p>WhatsApp</p>
            </a>
            <a href="#" className="chat-icon livechat">
              <img src="/live-chat-icon.svg" alt="Live Chat" />
              <p>Live Chat</p>
            </a>
          </div>
        </section>

        <section className="expandable-section">
          <div className="header">
            <MdOutlineSocialDistance className="chat-icon-large" />
            <div className="title-text">
              <h2>Social</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="social-icons">
            <a href="#" className="chat-icon telegram">
              <img src="/facebook-icon.svg" alt="facebook" />
            </a>
            <a href="#" className="chat-icon whatsapp">
              <img src="/instagram-icon.svg" alt="instagram" />
            </a>
            <a href="#" className="chat-icon livechat">
              <img src="/twitter-icon.svg" alt="twitter" />
            </a>
            <a href="#" className="chat-icon livechat">
              <img src="/linkedin-icon.svg" alt="linkedin" />
            </a>
          </div>
        </section>

        <section className="expandable-section">
          <div className="header">
            <LuMailCheck className="chat-icon-large" />
            <div className="title-text">
              <h2>Send Query</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <form className="query-form">
            <div className="form-row">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Subject" className="form-input" />
              <input
                type="text"
                placeholder="Order No."
                className="form-input"
              />
            </div>
            <textarea
              placeholder="Your Query"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HelpAndSupportPage;
