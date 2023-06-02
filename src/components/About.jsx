import React from "react";
import "../components/about.css"
import '/node_modules/bootstrap/dist/css/bootstrap.css'

const About=()=>{

    return(
        <>
         <nav className="navbar background">
       
        <div className="rightNav">
            <input type="text" name="search" id="search"/>
            <button className="btn">Search</button>
        </div>
    </nav>
    <section className="background firstsection">
        <div className="box-main">
            <div className="firstHalf">
                <p className="text-big">About US</p>
                  
                <p className="text-small">
                    Here you will get to know the team
                    members of our company
                </p>
                <br></br>
                <p className="center"><a href="#Order" 
                   style={{textDecoration: 'none' , fontSize:'20px'}}>
                        Below are the people who
                        works in our company</a>
                </p>
            </div>
        </div>
    </section>
    <section className="service">
        <h1 className="h-primary center" style={{marginTop: '30px' , textAlign: 'center'}}>
            Our Team
        </h1>
    <div id="services">
            <div className="box">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG"
                    alt="picture goes here"/>
              
                <p className="center">
                    <a href="#xyz" style={{textDecoration: 'none' , color: 'black',
        fontWeight: 'bold' , fontFamily: 'Langar, cursive'}}>
                        xyz
                    </a>
                </p>
                <p style={{fontFamily: 'sans-serif'}}>CEO and the Founder</p>
            </div>
            <div className="box">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG"
                    alt="picture goes here"/>
                  
                <p className="center">
                    <a href="#abc" style={{textDecoration: 'none', color: 'black',
        fontWeight:'bold',fontFamily: 'Langar, cursive'}}>
                        abc
                    </a>
                </p>
                  
                <p style={{fontFamily: 'sans-serif '}}>co-founder</p>
                <p style={{fontFamily: 'sans-serif '}}>Foodscalablility@gmail.com</p>
            </div>
            <div className="box">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG"
                    alt="picture goes here"/>
                <br></br>
                <p className="center">
                    <a href="#xyz" style={{textDecoration: 'none',color: 'black',
          fontWeight: 'bold',fontFamily: 'Langar, cursive'}}>
                        asw
                    </a>
                </p>
                <p style={{fontFamily: 'sans-serif'}}>Food Manager of the company </p>
  
            </div>
        </div>
      
    </section>
  
    <footer className="background">
        <p className="text-footer">
            Copyright ©-All rights are reserved
        </p>
  
    </footer>
        </>
    )
}
export default About;