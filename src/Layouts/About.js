import React from "react";
import AboutHeader from "../Components/About/AboutHeader";
import AboutButton from "../Elements/About/AboutButton";
import AboutHeadline from "../Elements/About/AboutHeadline";
import AboutQuestionTitle from "../Elements/About/AboutQuestionTitle";
import AboutQuestionAnswer from "../Elements/About/AboutQuestionAnswer";
import AboutImg from "../Elements/About/AboutImg";
import { RiInstagramLine, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

function About({ uiState, setUiState }) {
    let questionOne = "What is SoundScape, exactly?";
    let answerOne = "Simply said, it's a music player that doesn't have adverts or other interruptions that enables you to code while listening to relaxed pop music";
    let questionTwo = "Who made this?";
    let answerTwo = "Sam came up with this project. a computer scientist, developer, and designer who enjoys making amazing internet-based stuff! If you enjoyed what you just saw and want to see more, scroll down to visit his social media accounts!";

    return (
        <div className={`about ${uiState.aboutShown ? "" : "about--hidden"}`}>
            <AboutHeader uiState={uiState} setUiState={setUiState} />
            <div className="about__wrapper">
                {/* Need our headline */}
                <div className="about-group">
                    <p>Hey there,</p>
                    <AboutHeadline content="Welcome to SoundScape" />
                </div>
                {/* Need img */}
                <AboutImg />
                {/* Need Questions */}
                <div className="about-group">
                    <AboutQuestionTitle content={questionOne} />
                    <AboutQuestionAnswer content={answerOne} />
                </div>
                <div className="about-group">
                    <AboutQuestionTitle content={questionTwo} />
                    <AboutQuestionAnswer content={answerTwo} />
                </div>

                <hr />

                {/* Second Headline */}
                <div className="about-group">
                    <p>Sam's</p>
                    <AboutHeadline content="Socials" />
                </div>

                {/* Socials */}
                <div className="about-socials">
                    <div className="about-socials-group">
                        <RiInstagramLine className="about-socials-icon" />
                        <p className="about-socials-text">@yungofficial5</p>
                    </div>
                    
                    <div className="about-socials-group">
                        <RiMailLine className="about-socials-icon" />
                        <p className="about-socials-text">
                        samyung05@gmail.com
                        </p>
                    </div>
                </div>

                <hr />
                {/* Third Headline */}
                <div className="about-group">
                    <p>Like what you saw?</p>
                    <AboutHeadline content="See his work!" />
                </div>
                {/* Portfolio Button */}
                <AboutButton />
            </div>
        </div>
    );
}

export default About;
