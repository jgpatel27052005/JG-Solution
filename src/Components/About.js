import React from 'react'
import '../App.css';


function About() {
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About JG Solution
        <br class="hidden lg:inline-block" />
      </h1>
      <p class="mb-8 leading-relaxed">JG SOLUTION  is Ahmedabad-based one of the leading Website Designing, Website Development, and Android Developmrnt Company in India.

We’ve proven experience and proficiency in designing & developing websites that accomplish something by bringing in inquiries, which generate sales and are an asset to your business. As a website development company, JG Solution offers a full-circle loom in website design & web development where the actual web development effort covers. Our website development services cover strategic planning, creativity, applicability and proper functionality, product/service promotion & solution maintenance.

Our responsibility is to project that uniqueness and make the website stand out from its competition. We make it a spot to convey a distinguishing look to your website and app unique functionality. Our developers ensure that your project is search engine (SEO) friendly, aesthetically appealing, and user friendly.</p>
      <div class="flex justify-center">
  <a href="/Contact"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Us</button></a>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="./ab1.webp"/>
    </div>
  </div>
</section>




<h1>Our Expertise</h1>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="./a1.png" />
        </div>

        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="./a3.png" />
        </div>

      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="./a2.png" />
        </div>

        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="./a4.png" />
        </div>

       
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="./a5.png" />
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img src="./a6.png" />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Jenish Vaghani</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">Founder & MD JG Solution</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">
JG Solution, a pioneering IT company led by its visionary Managing Director, has achieved excellence in the industry. Founded on passion and expertise, the company delivers cutting-edge technology solutions tailored to meet clients' unique needs. With a diverse portfolio of services, JG Solution stays ahead of the competition by investing in innovation and technological advancement. Their customer-centric approach ensures seamless experiences and fosters long-lasting partnerships. </p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default About