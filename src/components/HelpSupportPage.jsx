import React, { useState } from "react";
import Navbar from "./Navbar";
import "./HelpSupportPage.css";
import { GrLocation } from "react-icons/gr";
import { BsChatRightText } from "react-icons/bs";
import { MdOutlineSocialDistance } from "react-icons/md";
import { LuMailCheck } from "react-icons/lu";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaArrowRightToBracket } from "react-icons/fa6";

const HelpAndSupportPage = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isIconsVisible, setIconsVisible] = useState(false);
  const [isIconVisible, setIconVisible] = useState(false);

  const toggleIconsVisibility = () => {
    setIconsVisible(!isIconsVisible);
  };

  const toggleIconVisibility = () => {
    setIconVisible(!isIconVisible);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="help-support-container">
      <Navbar />
      <main className="help-main">
        <h1>Hello, how can we help you?</h1>
        <p>Find guide, FAQ, chat</p>

        <section className="help-options">
          <div className="option-card">
            <div className="icon1">❓</div>
            <div className="title-text">
              <h2>FAQ</h2>
              <p>Find answers to common questions</p>
            </div>
            <FaArrowRightToBracket className="small-screen-icon" />
          </div>
          <div className="option-card">
            <GrLocation className="profile-icon-large" />
            <div className="title-text">
              <h2>Social Sharing</h2>
              <p>Explore & Discover Platform!</p>
            </div>
              <FaArrowRightToBracket className="small-screen-icon" />
          </div>
        </section>

        <section className="expandable-section">
          <div className="header">
            <BsChatRightText className="chat-icon-large" />
            <div className="title-text">
              <h2>Chat</h2>
              <p>Connect with us</p>
            </div>
            <button className="toggle-button" onClick={toggleIconsVisibility}>
              {isIconsVisible ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
          {isIconsVisible && (
            <div className="social-icons">
              <a href="#" className="chat-icon telegram">
                <img src="/Social-media-icons/telegram.png" alt="Telegram" />
                <p>Telegram</p>
              </a>
              <a href="#" className="chat-icon whatsapp">
                <img src="/Social-media-icons/whatsapp.png" alt="WhatsApp" />
                <p>WhatsApp</p>
              </a>
              <a href="#" className="chat-icon chat">
                <img src="/Social-media-icons/chatlogo.webp" alt="Live Chat" />
                <p>Live Chat</p>
              </a>
            </div>
          )}
        </section>

        <section className="expandable-section">
          <div className="header">
            <MdOutlineSocialDistance className="chat-icon-large" />
            <div className="title-text">
              <h2>Social</h2>
              <p>Follow us and stay updated</p>
            </div>
            <button className="toggle-button" onClick={toggleIconVisibility}>
              {isIconVisible ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
          {isIconVisible && (
            <div className="social-icons">
              <a href="#" className="chat-icon telegram">
                <img src="/Social-media-icons/facebook.png" alt="facebook" />
              </a>
              <a href="#" className="chat-icon whatsapp">
                <img src="/Social-media-icons/instagram.png" alt="instagram" />
              </a>
              <a href="#" className="chat-icon twitter">
                <img src="/Social-media-icons/telegram.png" alt="twitter" />
              </a>
              <a href="#" className="chat-icon linkedin">
                <img src="/Social-media-icons/linkedin.png" alt="linkedin" />
              </a>
            </div>
          )}
        </section>

        <section className="expandable-section">
          <div className="header">
            <LuMailCheck className="chat-icon-large" />
            <div className="title-text">
              <h2>Send Query</h2>
              <p>each out to us with your questions</p>
            </div>
            <button className="toggle-button" onClick={toggleFormVisibility}>
              {isFormVisible ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
          {isFormVisible && (
            <form className="query-form">
              <div className="form-row">
                <input type="text" placeholder="Name" className="form-input" />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-input"
                />
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
          )}
        </section>
      </main>
    </div>
  );
};

export default HelpAndSupportPage;
