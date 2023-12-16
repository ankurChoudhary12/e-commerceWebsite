import React from 'react';

import Header from './Header'; // You need to create a Header component
import Footer from './Footer'; // You need to create a Footer component

import './about.css'; // Import the CSS file

const About = () => {
  return (
    <div>
      <Header />
      <main id="main">
        {/* Breadcrumbs */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Ankur Choudhary</h2>
              <ol>
                <li>Portfolio Details</li>
                <li>Experienced MERN Stack Developer skilled in designing and developing responsive web applications using
React, Node.js, Express, and MongoDB. Proficient in front-end and back-end technologies, with a strong
focus on user experience and performance optimization. Collaborative team player with a commitment to
delivering high-quality software solutions</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Portfolio Details Section */}
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src="assets/img/portfolio/portfolio-1.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src="assets/img/portfolio/portfolio-2.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>: Web design</li>
                    <li><strong>Client</strong>: ASU Company</li>
                    <li><strong>Project date</strong>: 01 March, 2020</li>
                    <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>This is an example of portfolio detail</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
