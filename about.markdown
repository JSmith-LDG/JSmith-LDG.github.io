---
layout: default
title: About
---
<!-- Navigation Back to Home -->
<section id="navigation">
  <div class="container">
    <div class="hero-actions">
      <a href="/" class="btn btn-primary">← Back to Home</a>
    </div>
  </div>
</section>

<section id="about">
  <div class="container">
    <h2>About Me</h2>
    <p>
      I am a passionate software engineer with over 6 years of hands-on experience building interactive systems, scalable gameplay mechanics, and modular backend frameworks across diverse platforms. My technical expertise spans multiple programming languages including C#, Java, Kotlin, Python, TypeScript, Lua, and Rust, with extensive experience in Unity, Unreal Engine 5, Roblox, and various web technologies.
    </p>
    <p>
      Throughout my career, I have successfully led development teams and managed complex projects from concept to deployment. My experience includes developing core systems for Roblox, creating web-integrated 3D experiences, and building robust backend frameworks that support real-time data systems and seamless user experiences.
    </p>
    <p>
      I thrive in collaborative environments where innovation and technical excellence are valued. My approach combines strong technical skills with effective communication and leadership, allowing me to bridge the gap between creative vision and technical implementation. I am particularly passionate about solving complex engineering problems and translating them into robust, maintainable solutions.
    </p>
    <p>
      Beyond my professional work, I remain an avid gamer and technology enthusiast. This passion drives my continuous learning and adaptation in the ever-evolving tech landscape. Whether it's developing new systems or experimenting with innovative tools, I am always excited about the next challenge and opportunity to grow.
    </p>
    <p>
      Experienced across the full SDLC—from technical planning and prototyping to automated deployment using CI/CD pipelines. Strong focus on reusable design patterns, real-time data systems, and seamless UX/UI integration. Passionate about solving complex engineering problems and translating them into robust, maintainable solutions.
    </p>
  </div>
</section>

<!-- Professional Experience Section -->
<section id="experience">
  <div class="container">
    <h2>Professional Experience</h2>
    <div class="timeline">
      {% for exp in site.experience %}
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>{{ exp.role }} <span class="company">{{ exp.company }}</span></h3>
          <span class="period">{{ exp.period }}</span>
          <p>{{ exp.description }}</p>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Education Section -->
<!-- <section id="education">
  <div class="container">
    <h2>Education</h2>
    <div class="education-item">
      <h3>Computer Science Degree</h3>
      <p>University Name</p>
      <p>Graduated: Year</p>
    </div>
  </div>
</section> -->

<!-- Additional Information -->
<section id="additional-info">
  <div class="container">
    <h2>Additional Information</h2>
    <p><strong>Agile Methodologies:</strong> Experienced in agile development practices including standups, sprint planning, and iterative delivery.</p>
    <p><strong>Version Control:</strong> Proficient with Git, GitLab, PlasticSCM, and Perforce for collaborative development workflows.</p>
    <p><strong>Performance Optimization:</strong> Skilled in performance profiling and optimization across multiple platforms and engines.</p>
    <p><strong>Cross-Team Collaboration:</strong> Strong experience working with artists, designers, and other developers in distributed team environments.</p>
  </div>
</section>

<!-- Contact Section -->
<section id="contact">
  <div class="container">
    <h2>Get In Touch</h2>
    <div class="contact-info">
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <a href="mailto:jamessmith94135@gmail.com">jamessmith94135@gmail.com</a>
      </div>
      <div class="contact-item">
        <i class="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/james-s-66067b176/" target="_blank">LinkedIn Profile</a>
      </div>
      <div class="contact-item">
        <i class="fab fa-github"></i>
        <a href="https://github.com/JSmith-LDG" target="_blank">GitHub Profile</a>
      </div>
    </div>
  </div>
</section>