import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram ,faChartArea , faRobot, faUserCheck} from  "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <section className="d-flex my-5">
            <div className="container">
                <h1 className="text-center m-3 font-weight-bold">The most trusted Cryptocurrency Platform</h1>
                <h5  className="text-center font-weight-light">Here are the few reasons why you should choose Chuck.</h5>
                <div className="row">

                    <div className=" col-md-6 col-lg-3 d-flex align-self-stretch">
                        <div className="media block-6 services d-block text-center">
                        <div className="icon">
                            <span><FontAwesomeIcon icon={faChartArea} size="4x"/></span>
                        </div>
                        <div className="media-body">
                            <h3 className="heading mb-3">Portfolio Analytics</h3>
                            <p>
                            Monitor all of your assets from exchanges and even offline wallets to track your performance over time.
                            </p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-self-stretch">
                        <div className="media block-6 services d-block text-center">
                        <div className="icon">
                            <span><FontAwesomeIcon icon={faRobot} size="4x" /></span>
                        </div>
                        <div className="media-body">
                            <h3 className="heading mb-3">Powerfull Bots</h3>
                            <p>
                            Sophisticated trading made simple. Choose from pre-built popular strategies, customize, and go live in minutes.
                            </p>
                        </div>
                        </div>
                    </div>
                        
                    <div className="col-md-6 col-lg-3 d-flex align-self-stretch">
                        <div className="media block-6 services d-block text-center">
                            <div className="icon">
                                <span><FontAwesomeIcon icon={faUserCheck} size="4x"/></span>
                            </div>
                            <div className="media-body">
                                <h3 className="heading mb-3">Industry best practies</h3>
                                <p>
                                Chuck supports a variety of the most popular digital currencies, with the most proficient experts we will be guiding you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-self-stretch">
                        <div className="media block-6 services d-block text-center">
                            <div className="icon">
                                    <span><FontAwesomeIcon icon={faProjectDiagram} size="4x"/></span>
                            </div>
                            <div className="media-body">
                                <h3 className="heading mb-3">Advanced Charting</h3>
                                <p>
                                Go beyond market cap rankings with integrated market screener and charts coupled with high quality streaming data.
                                </p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
        </section>
    )
}

export default Services
