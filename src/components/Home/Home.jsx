import React from "react";
import "./Home.css"
import image from "../../constants/image";
import "./reset.css"





function Home(){
    return(
        <div>
    
    <ul id="navi">
          <li>
           
            <ul>
              <li>About</li>
              <li>Education</li>
              <li>Traveling</li>
              <li>Tik Tok</li>
            </ul>
          </li>
        </ul>
            <img src= {image.myImage} id="myImage" alt="myImage"/>


        <h2 id="welcomeMyBlogTxt">Welcome My Blog</h2>
        <p id="aboutPrgh">Welcome to my personal blog! I'm Dinil Damzith, 
            the creator behind this space where I share my 
            adventures in traveling, insights into the world of education, 
            lighthearted and funny stories, and a glimpse into the TikTok trends that bring joy to my life.
        </p>
        </div>
    );
}

export default Home;