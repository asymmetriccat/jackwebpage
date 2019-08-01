import React, {Component} from 'react'

export default class Blog extends Component {
    render() {

        return (
            <div>
                <section className="colorlib-blog" data-section="blog">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Read</span>
                                <h2 className="colorlib-heading">Recent Blog</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <a href="blog.html" className="blog-img"><img src="images/blog-1.jpg"
                                                                                  className="img-responsive"
                                                                                  alt="HTML5 Bootstrap Template by colorlib.com"/></a>
                                    <div className="desc">
                                        <span><small>April 1, 2018 </small> | <small> reactjs </small> | <small> <i
                                            className="icon-bubble3"/> 4</small></span>
                                        <h3><a href="blog.html"> </a>Failed to compile.
                                            ./node_modules/react-dev-utils/formatWebpackMessages.js Module not found:
                                        </h3>
                                        <p> Today when I tried to run a react application with "yarn start". I got an
                                            error as shown in the title. Finally it was resolved by simply run " npm add
                                            @babel/runtime".
                                            <img src="images/blog_1_s.png"/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    {/*<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg"
                                                                                  className="img-responsive"
                                                                                  alt="HTML5 Bootstrap Template by colorlib.com"/></a>*/}
                                    <div className="desc">
                                        <span><small>July 31, 2019 </small> | <small> java </small> | <small> <i
                                            className="icon-bubble3"/> 4</small></span>
                                        <h3><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/"> Leetcode problems: longest-substring-without-repeating-characters </a>
                                        </h3>
                                        <p> Today I am starting to solve leetcode problems without using IDE. Below is the snapshot of the solution for the titled problem.
                                            <img src="images/2019-07-31_1.png"/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    {/*<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg"
                                                                                  className="img-responsive"
                                                                                  alt="HTML5 Bootstrap Template by colorlib.com"/></a>*/}
                                    <div className="desc">
                                        <span><small>July 31, 2019 </small> | <small> java </small> | <small> <i
                                            className="icon-bubble3"/> 4</small></span>
                                        <h3><a href="https://leetcode.com/problems/add-two-numbers/">  Leetcode problems: Add two numbers</a>
                                        </h3>
                                        <p>
                                            <img src="images/2019-07-31_2.png"/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    {/*<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg"
                                                                                  className="img-responsive"
                                                                                  alt="HTML5 Bootstrap Template by colorlib.com"/></a>*/}
                                    <div className="desc">
                                        <span><small>July 31, 2019 </small> | <small> java </small> | <small> <i
                                            className="icon-bubble3"/> 4</small></span>
                                        <h3><a href="https://leetcode.com/problems/most-common-word/">  Leetcode problems: Most common word</a>
                                        </h3>
                                        <p>
                                            <img src="images/2019-07-31_3.png"/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i
                                    className="icon-reload"/></a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
