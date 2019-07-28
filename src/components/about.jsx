import React, {Component} from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>Jack is a self-taught java programmer with several years working experience. He
                                                was previously a research scientist with a Ph.D degree in chemistry. He
                                                has more than 20 publications in top rank academic journals. He is
                                                currently a <span
                                                > <a href="https://www.youracclaim.com/badges/86bba8e7-40d1-4229-a5af-37694d989a99">certified professional java programmer,</a></span> and
                                                he always enjoys studying and coding.</p>
                                            <p>I believe: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle." ―Steve Jobs </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my working experiences</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb"/>
                </span>
                                    <div className="desc">
                                        <h3>backend skills</h3>
                                        <p>Familiar with using java EE, Spring boot frame work to build SOAP, gRPC or RESTful web service java applications.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3"/>
                </span>
                                    <div className="desc">
                                        <h3>frontend skills</h3>
                                        <p>Know to use HTML, CSS, javascript, reactJS, typescript, angular to build frontend web pages.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data"/>
                </span>
                                    <div className="desc">
                                        <h3>Databases and Dev tools</h3>
                                        <p>Have experiences with Docker, K8s and CICD for deployment. Good at Postgresql, mysql, spring jpa.</p>
                                    </div>
                                </div>
                            </div>
                            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
