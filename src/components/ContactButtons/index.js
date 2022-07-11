import React from "react";

export default function ContactButtons() {
  return (
    <div>
      <p className="connect">
        <a href="https://twitter.com/usmnzen">
          <i className="fab fa-twitter-square contact-icon"></i>
        </a>
        <a href="https://github.com/usmnzain/">
          <i className="fab fa-github-square contact-icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/usman-zain-ul-abedin-17779894/">
          <i className="fab fa-linkedin contact-icon"></i>
        </a>
        <a href="mailto:uszain@gmail.com">
          <i class="fas fa-envelope-square contact-icon"></i>
        </a>
      </p>
    </div>
  );
}
