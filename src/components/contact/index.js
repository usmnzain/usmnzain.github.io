import React from 'react'

export default function About() {
    return (
        <div className='section'>
            <div>
                <p className="heading text-center">Get In Touch</p>
                <hr style={{ width: "10%" }} className="underline"></hr>
                <div>
                    <p>I am always looking for new opportunities, new projects
                    new people to work with. Let me know if you have something
                    for me.
                    </p>
                </div>
                <div>
                    <p className="contact-email">uszain@gmail.com</p>
                    <p className="connect">
                    <a href="https://twitter.com/usmnzen"><i className="fab fa-twitter-square"></i></a>
                        <a href="https://github.com/usmnzain/"><i className="fab fa-github-square"></i></a>
                        <a href="https://www.linkedin.com/in/usman-zain-ul-abedin-17779894/"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:uszain@gmail.com"><i class="fas fa-envelope-square"></i></a>
                    </p>
                </div>
            </div>
            <div className='footer'>
                <p className="copyright-text">Copyright ©2020 All rights reserved</p>
            </div>
        </div>
    )
}