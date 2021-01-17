import React from 'react'

export default function About() {
    return (
        <div className='section'>
            <p className="heading text-center">About Me</p>
            <hr style={{ width: "10%" }} className="underline"></hr>
            <div>
                <div>
                    <p className='about-text'>Hi, my name is Usman Zain. I am a software engineer based in Pakistan.</p>
                    <p className='about-text'>
                    I am passionate about developing excellent web 
                    apps that improves the lives of those around me. 
                    I specialize in developing software for clients 
                    ranging from individuals and small-businesses 
                    all the way to large enterprise corporations.
                    My expertise are in front-end development.<br/>
                    Some languages and frameworks that I have worked with frequently:
                    </p>
                    <div className='about-skills'>
                        <p className='about-text'>    
                            &#8594; React<br/>
                            &#8594; React Native<br/>
                            &#8594; NodeJS<br/>
                        </p>
                        <p className='about-text'>
                            &#8594; C<br/>
                            &#8594; Python<br/>
                            &#8594; C#<br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}