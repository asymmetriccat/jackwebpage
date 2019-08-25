import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Java developer at CRMSuite <span>12/2017-8/2019</span></h2>
                        <p> <ul>
                          <li>Participate actively in the complete backend development lifecycle, including design, development, and testing.
                          </li>
                          <li>Complete more than 20 web service client micro service projects. These projects are built based on Spring boot framework, JPA to persistent data, and gRPC services.
                          </li>
                          <li>Developed many SOAP web service clients independently. All of those micro service java spring boot projects were built in Docker images and deployed in k8s with Continuing Integration.
                          </li>
                          <li>Maintain java back-end applications and fix bugs. Add new function integrations upon customers’ requests. </li>
                        </ul> </p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-7">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Java developer Self-Employed <span>04/2016-11/2017</span></h2>
                        <p>
                          <ul>
                          <li>Take online java courses from oracle university and other websites. Self study courses for software engineer. Those courses including algorithms, data structures, database, and frontend tech skills such as javascript, html, css, etc.</li>
                          <li>Maintain java backend service for a small e-business application.  Develop chemistry related full stack web applications using java, Spring boot, Thymeleaf, Bootstrap and mysql.</li>
                        </ul>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Scientist at University of South Florida <span> 08/2011-04/2016 </span></h2>
                        <p><ul>
                          <li>Design and synthesis of small organic molecules for anti-cancer drug discovery. Develop novel reaction methodologies.</li>
                          <li>Build websites and data base for the research group.</li>
                        </ul></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Associate professor at Sun Yat-Sen University <span>11/2009-07/2011</span></h2>
                        <p><ul>
                          <li>Teach undergraduate and graduate students. </li>
                          <li> Manage an independent research group. Conduct research.</li>
                        </ul></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>PostDoctoral researcher at University of South Florida <span>09/2006-11/2009</span></h2>
                        <p><ul>
                          <li>Conduct research in organic synthesis. </li>
                          <li>Published 8 research papers at top ranked journals </li>
                        </ul></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>PhD student at SIOC, Chinese Academy of Science <span>08/2003-07/2006</span></h2>
                        <p></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
