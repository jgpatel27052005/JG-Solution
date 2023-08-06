import React from 'react'
import "../footer.css";

function Footer() {
  return (
    <>


    <div class="footer">
      <div class="heading">
        <a href="https://www.jgsolution.tech" ><img src="./logo512.png" /></a>
      </div>
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><a href="/App-development">App development</a></p>
          <p><a href="/Web-development">Web development</a></p>
          <p><a href="/Web-designing">Web designing</a></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="https://www.linkedin.com/company/jg-solution/" target="_blank"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p> 
            <a href="https://twitter.com/JgSolutiontech" target="_blank"
              ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com/jgsolution.tech/" target="_blank"
              ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>Important Links</h4>
          <p><a href="/Refund">Refund Policy</a></p>
          <p><a href="/Terms-&-Condition">Terms & Condition</a></p>
          <p><a href="/Privacy">Privacy Policy</a></p>
          <p><a href="/About">About Us</a></p>
          <p><a href="/Contact">Contact Us</a></p>
        </div>
        <div class="details">
          <h4 class="address"></h4>
          <p>
        
          </p>
          <h4 class="mobile">Mobile</h4>
          <p><a href="#">+91-9016374594</a></p>
          <h4 class="mail">Email</h4>
          <p><a href="mailto:contact@jgsolution.tech">contact@jgsolution.tech</a></p>
        </div>
      </div>
      <footer>
        

        
        <hr />
         © 2023 JG Solution.
      </footer>
    </div>

    </>
  )
}

export default Footer