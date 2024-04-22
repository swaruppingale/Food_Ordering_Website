import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30167.394697179927!2d72.87013591949972!3d19.06706400665741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6f12c3372e1%3A0x97fe344eb34ea78!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1713538866747!5m2!1sen!2sin">
            
            loading="lazy"
          </iframe>
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15084.316706849677!2d72.82105872887881!3d19.06025614569727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93f819e7201%3A0xac310b45a21414e2!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1713758156298!5m2!1sen!2sin">
            
            loading="lazy"
          </iframe>
          

          {/* <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form> */}
        </div>
      </section>
    </>
  );
};

export default Contact;
