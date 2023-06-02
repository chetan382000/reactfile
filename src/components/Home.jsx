import React from "react";
import  "../components/home.css"

const Home=()=>{

    return(
        <>
          <main>
  <div className="intro">
    <h1>A Web Developer</h1>
    <p>I am a web developer and I love to create websites.</p>
    <button >Learn More</button>
  </div>
  <div className="achievements">
    <div className="work">
      <i className="fas fa-atom"></i>
      <p className="work-heading">Projects</p>
      <p className="work-text">I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.</p>
    </div>
    <div className="work">
      <i className="fas fa-skiing"></i>
      <p className="work-heading">Skills</p>
      <p className="work-text">I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.</p>
    </div>
    <div className="work">
      <i className="fas fa-ethernet"></i>
      <p className="work-heading">Network</p>
      <p className="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
    </div>
  </div>
  <div className="about-me">
    <div className="about-me-text">
      <h2>About Me</h2>
      <p>I am a web developer and I love to create websites. I am a very good developer and I am always looking for new projects. I am a very good developer and I am always looking for new projects.</p>
    </div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsfn65KCPAM6GNJZ4ZTsJOlFyoT_5BhlmwQ&usqp=CAU" alt="me"/>
  </div>
</main>
{/* Fotter */}
<footer className="footer">
  <div className="copy">&copy; 2023 Developer</div>
  <div className="bottom-links">
    <div className="links">
      <span>More Info</span>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
    <div className="links">
      <span>Social Links</span>
      <a href="https://www.linkedin.com/in/raval-chetan-v-b45614242"><i className="fab fa-facebook"></i> Facebook</a>
      <a href="https://twitter.com/chetanraval94?t=DQLu71Az2HcfBGqI_uPCZQ&s=09"><i className="fab fa-twitter"></i> Twitter</a>
      <a href="https://instagram.com/ravalchetan83?igshid=ZDc4ODBmNjlmNQ=="><i className="fab fa-instagram"></i> Instagram</a>
      <a href="https://www.linkedin.com/in/raval-chetan-v-b45614242"><i className="fab fa-linkedin"></i> Linkedin</a>
      <a href="https://t.me/chetan94"><i className="fab fa-telegram"></i>  Telegram</a>


    </div>
  </div>
</footer>

        </>
    )
}
export default Home;