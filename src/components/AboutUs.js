import React from 'react';

function AboutUs(props) {
    return (
        <div>
            <section id="about" className="bg-emp-light pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
      <div className="container">
        <div className="wow fadeInUp bg-white">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="items-center justify-between overflow-hidden lg:flex">
                <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                  <span className="mb-5 inline-block bg-emp-light py-2 px-5 text-lg font-medium text-dark-orange">
                    About Us
                  </span>
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                    Bringing you refreshing taste to Addis.
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    We have started providing service 3 months ago at our new location, bole. 
                    We have started providing service 3 months ago at our new location, bole. 
                    We have started providing service 3 months ago at our new location, bole. 
                  </p>
                  <a href="" className="inline-flex items-center justify-center rounded bg-emp-dark-orange py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg">
                    Learn More
                  </a>
                </div>
                <div className="text-center">
                  <div className="relative z-10 inline-block">
                    <img src="assets/images/burger.png" alt="image" className="mx-auto lg:ml-auto"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}

export default AboutUs;