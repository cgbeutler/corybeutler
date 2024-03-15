
<div id="banner-image">
</div>
<div id="profile-image-box">
  <img src="/img/DressedUp.jpg" class="profile-image" alt="me"/>
  <!-- <img src="/img/LaserMan.jpg" class="profile-image" alt="me"/> -->
</div>


<div class="page work-experience">
    <h1>Resume for Cory G. Beutler</h1>
    <p style="text-align:center;">Denver, CO 80222 &emsp; <a href="mailto:jobopportunities@corybeutler.com">jobopportunities@corybeutler.com</a></p>

    <h2>Skills</h2>

    <p style="text-align:center;">
        Languages: C#, Python, Java, HTML, CSS, JavaScript<br>
        Backend: ASP.NET MVC, REST APIs, Team City<br>
        Database: Elastic Search, MongoDB, SQL, NoSQL<br>
        Frontend: Svelte, Razor, Angular<br>
        Operating Systems: Linux, Windows<br>
    </p>

    <h2>Work Experience</h2>
    
    <p>
        <span class="infoline">Jul 2019 - Dec 2023</span><br>
        <span class="infoline">Monster Vial</span> <span class="infoline">Software Entrepreneur</span>
    </p>
    <ul>
        <li>Developed a video game using Godot and Unity in the C# language.</li>
        <li>Provided a suite of open source file management tools to the community.</li>
        <li>Developed a dynamic input and event processing system.</li>
        <li>Created visuals with optimized color palettes for colorblind users.</li>
        <li>Created a fully localized user interface.</li>
    </ul>
    <p>
        <span class="infoline">Jun 2016 - Jul 2019</span><br>
        <span class="infoline">Xactware (Verisk)</span> <span class="infoline">Software Developer</span>
    </p>
    <ul>
        <li>Developed backend services using ASP.NET MVC and C# and Team City.</li>
        <li>Implemented a search API using Elasticsearch optimized with product popularity, phonetic matching, and synonym associations for multiple languages and regions.</li>
        <li>Designed a migration service for MongoDB to facilitate data versioning.</li>
        <li>Added localization to backend services ahead of a push to new markets in Canada.</li>
        <li>Worked with developers and testers to provide a continuous delivery of features.</li>
        <li>Developed multiple frontend clients using Razor, Angular, and Telerik technologies.</li>
    </ul>
    <p>
        <span class="infoline">Apr 2014 - May 2016</span><br>
        <span class="infoline">ImSAR LLC</span> <span class="infoline">Software Dev. Intern</span>
    </p>
    <ul>
        <li>Developed software in the C++ and Python programming languages.</li>
        <li>Added dynamic GPU memory management to the processing chain.</li>
    </ul>
    <p>
        <span class="infoline">Jul 2013 - Dec 2013</span><br>
        <span class="infoline">Northrop Grumman</span> <span class="infoline">Software Dev. Intern</span>
    </p>
    <ul>
        <li>Developed software in the languages Java, C++, and Python.</li>
        <li>Developed software in a Linux environment.</li>
        <li>Worked with classified data under a Secret Clearance (expired July 2015.)</li>
    </ul>

    <h2>Education</h2>

    <p>
        2016 Bachelor of Science in Computer Science from BYU with 3.5 GPA
    </p>
</div>

<style>
    #banner-image {
      position: relative;
      background-image: url('/img/nebula_bg.jpg');
      width: 100%;
      height: 260px;
      z-index: -1;
    }
  
    #profile-image-box {
      display: flex;
      position: relative;
      column-gap: 1em;
      justify-content: center;
      width: 100%;
      height: 100px;
      z-index: 2;
    }
  
    .profile-image {
      position: relative;
      max-width: 200px;
      max-height: 200px;
      object-fit: cover;
      border-radius: 50%;
      transform-origin: 50% 50%;
      transform: translate(0,-50%) scale(2);
    }
    
    .work-experience {
        text-align: left;
        font-size: medium;
    }
    .work-experience h1,
    .work-experience h2 {
        text-align: center;
        margin: 1em 0 0 0;
    }
    .work-experience h2 {
        margin: 2em 0 0 0;
    }

    .infoline {
        display: inline-block;
        margin: 0 1em;
    }
</style>