import React from 'react';

const Contact = () => {
    return (
        <section className="contact-page-section py-8 absolute top-20 relative overflow-hidden">
  <div className="animated-bg absolute inset-0 z-0"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="sec-title text-center mb-10">
      <div className="title text-teal-500 text-lg font-bold mb-3 inline-block border-b-2 border-gray-300">
        Contact Us
      </div>
      <h2 className="text-gray-800 text-4xl font-bold">Let's Get in Touch.</h2>
    </div>
    <div className="inner-container bg-amber-600 shadow-lg rounded-lg overflow-hidden">
      <div className="row flex flex-wrap">
        <div className="form-column w-full md:w-2/3 p-4">
          <div className="inner-column bg-white p-10 rounded-lg">
            <form id="contact-form" className="ai-powered-form">
              <div className="row flex flex-wrap -mx-3">
                <div className="form-group w-full md:w-1/2 px-3 mb-5">
                  <input type="text" name="name" placeholder="Name" required
                    className="w-full h-14 p-4 border border-gray-300 rounded focus:border-teal-500/5 outline-none floating-label" />
                </div>
                <div className="form-group w-full md:w-1/2 px-3 mb-5">
                  <input type="email" name="email" placeholder="Email" required
                    className="w-full h-14 p-4 border border-gray-300 rounded focus:border-teal-500/5 outline-none floating-label" />
                </div>
                <div className="form-group w-full md:w-1/2 px-3 mb-5">
                  <input type="text" name="subject" placeholder="Subject" required
                    className="w-full h-14 p-4 border border-gray-300 rounded focus:border-teal-500/5 outline-none floating-label" />
                </div>
                <div className="form-group w-full md:w-1/2 px-3 mb-5">
                  <input type="text" name="phone" placeholder="Phone" required
                    className="w-full h-14 p-4 border border-gray-300 rounded focus:border-teal-500/5 outline-none floating-label" />
                </div>
                <div className="form-group w-full px-3 mb-5">
                  <textarea name="message" placeholder="Message" required
                    className="w-full h-64 p-4 border border-gray-300 rounded focus:border-teal-500/5 outline-none resize-none floating-label"></textarea>
                </div>
                <div className="form-group w-full px-3">
                  <button type="submit"
                    className="theme-btn btn-style-one w-full h-14 bg-amber-600 text-white font-bold rounded-lg hover:bg-transparent hover:text-gray-600 border-2 border-gray-800 transition transform hover:scale-105">
                    Send Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="info-column w-full md:w-1/3 p-4">
          <div className="inner-column p-10 text-white">
            <h2 className="text-3xl font-bold mb-10">Contact Info</h2>
            <ul className="list-info mb-10 space-y-6">
              <li className="text-lg flex items-center">
                <i className="fas fa-globe text-2xl mr-4"></i> 123 lorem ispum Abc, Street Chandigarh.
              </li>
              <li className="text-lg flex items-center">
                <i className="far fa-envelope text-2xl mr-4"></i> example@test
              </li>
              <li className="text-lg flex items-center">
                <i className="fas fa-phone text-2xl mr-4"></i> 1-234-567-890 <br /> 1-234-567-890
              </li>
            </ul>
            <ul className="social-icon-four flex space-x-4">
              <li className="follow font-bold text-2xl mr-4">Follow on:</li>
              <li><a href="#" className="text-2xl"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" className="text-2xl"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="text-2xl"><i className="fab fa-google-plus-g"></i></a></li>
              <li><a href="#" className="text-2xl"><i className="fab fa-dribbble"></i></a></li>
              <li><a href="#" className="text-2xl"><i className="fab fa-pinterest-p"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default Contact;
