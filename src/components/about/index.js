import React from 'react'

export default function About() {
    return (
        <div className='section'>
            <p className="heading text-center">About Me</p>
            <hr style={{ width: "10%" }} className="underline"></hr>
            <div>
                <div style={{textAlign:'left'}}>
                    <p/> Hi, my name is Usman Zain. I am a software engineer based in Pakistan.<p/>
                    <p>
                    I am passionate about developing excellent web 
                    apps that improves the lives of those around me. 
                    I specialize in developing software for clients 
                    ranging from individuals and small-businesses 
                    all the way to large enterprise corporations.
                    My expertise are in front-end development.
                    </p>
                    <p>
                    Here are some technologies that I have worked with frequently:<br/>
                    ▹ React<br/>
                    ▹ React Native<br/>
                    ▹ NodeJS<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}