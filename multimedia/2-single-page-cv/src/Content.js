import './Content.css'
import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPersonDigging,faPersonChalkboard,faPeopleLine,faBug } from '@fortawesome/free-solid-svg-icons';

class Content extends Component{
    render() {
        return (
            <div id="content">
                <div className="hero" >
                </div>

                <div className="container container-about">
                    <h1>
                        About
                    </h1>

                    <p>
                        My goal is to build beautiful software systems that work efficiently, are easy to maintain, and help you save thousands every fiscal year. If you have a legacy system that requires some updating, let's get in touch!
                    </p>

                    <div className="grid mt-lg-4" >
                        <div className="row">
                            <div className="col-12 col-lg-5 text-center">
                                <img style={{width: '100%', borderRadius: '25px'}} src="/multimedia/2-single-page-cv/build/mug.jpg" alt="profile"/>
                            </div>
                            <div className="col-12 col-lg-7 mt-4 mt-lg-5">
                                <h2 style={{color: '#6b4d57'}}>
                                    Software Engineer & Backend Developer
                                </h2>

                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <b>Date of Birth</b>: Feb 22, 1987
                                        </div>
                                        <div className="col">
                                            <b>Place of Birth</b>: Colombia
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <b>Website</b>: <a href="/">Digitarum</a>
                                        </div>
                                        <div className="col">
                                            <b>Degree:</b> CS Engineering
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <b>Email</b>: account@domain.com
                                        </div>
                                        <div className="col">
                                            <b>Phone number</b>: (+34) 654 321 01
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <b>Location:</b>: Girona, Spain
                                        </div>
                                        <div className="col">
                                            <b>Available for work:</b> Partially
                                        </div>
                                    </div>

                                    <p>
                                        I have over 10 years of experience working with Backend systems, designing robust microservices and migrating platforms that have become "too big to fail". The bigger the monster, the better the reward!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container container-resume">
                    <h1>Resume</h1>

                    <p>Here are some of my numbers:</p>

                    <div className="grid">
                        <div className="row">
                            <div className="col col-6 col-lg-3">
                                <FontAwesomeIcon className="icon"  icon={faPersonDigging} />
                                <span className="number">100</span>
                                <p>projects deployed to production.</p>
                            </div>
                            <div className="col col-6 col-lg-3">
                                <FontAwesomeIcon className="icon" icon={faBug} />
                                <span className="number">45%</span>
                                <p>fewer bugs after one month.</p>
                            </div>
                            <div className="col col-6 col-lg-3">
                                <FontAwesomeIcon className="icon"  icon={faPeopleLine} />
                                <span className="number">19</span>
                                <p>companies supported.</p>
                            </div>
                            <div className="col col-6 col-lg-3">
                                <FontAwesomeIcon className="icon"  icon={faPersonChalkboard} />
                                <span className="number">300</span>
                                <p>junior developers trained.</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div style={{height: "500px"}}>
                    <h1>
                        Portfolio
                    </h1>
                </div>

                <div style={{height: "500px"}}>
                    <h1>
                        Services
                    </h1>
                </div>

                <div style={{height: "500px"}}>
                    <h1>
                        Contact
                    </h1>
                </div>

            </div>
        )
    }
}

export default Content;
