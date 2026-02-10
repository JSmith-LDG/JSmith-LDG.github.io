---
layout: default
title: Home
--- 

<!-- Hero Section -->
<section id="hero">
  <div class="container">
    <div class="hero-content">
      <h1>James Smith</h1>
      <h2>Software Developer</h2>
      <p class="hero-subtitle">{{ site.professional_summary }}</p>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number">6+</span>
          <span class="stat-label">Years Experience</span>
        </div>
        <div class="stat">
          <span class="stat-number">10+</span>
          <span class="stat-label">Projects Completed</span>
        </div>
        <div class="stat">
          <span class="stat-number">5</span>
          <span class="stat-label">Game Engines</span>
        </div>
      </div>
      <div class="hero-actions">
        <a href="/about" class="btn btn-primary">View Resume</a>
        <a href="#projects" class="btn btn-secondary">View Projects</a>
      </div>
    </div>
  </div>
</section>

<!-- Key Strengths Section -->
<section id="strengths">
  <div class="container">
    <h2>Key Strengths</h2>
    <div class="strengths-grid">
      {% for strength in site.key_strengths %}
      <div class="strength-card">
        <div class="strength-icon">⚡</div>
        <p>{{ strength }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Professional Projects Section -->
<section id="professional-projects">
  <div class="container">
    <h2>Professional Projects</h2>
    <div class="projects-grid">
      {% assign sorted_professional_projects = site.professional_projects | where: 'shown', true | sort: 'date' | reverse %}
      {% for project in sorted_professional_projects limit:3 %}
      <div class="project-card">
        <div class="project-image">
          <img src="{{ project.image }}" alt="{{ project.title }}">
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-meta">
            <span class="project-tech">{{ project.technologies | join: ', ' }}</span>
            <span class="project-role">{{ project.role }}</span>
          </div>
          {% if project.project_url %}
          <a href="{{ project.project_url }}" class="btn btn-primary">View Project</a>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Solo Projects Section -->
<section id="solo-projects">
  <div class="container">
    <h2>Solo Projects</h2>
    <div class="projects-grid">
      {% assign sorted_solo_projects = site.solo_projects | where: 'shown', true | sort: 'date' | reverse %}
      {% for project in sorted_solo_projects limit:3 %}
      <div class="project-card">
        <div class="project-image">
          <img src="{{ project.image }}" alt="{{ project.title }}">
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-meta">
            <span class="project-tech">{{ project.technologies | join: ', ' }}</span>
            <span class="project-role">{{ project.role }}</span>
          </div>
          {% if project.project_url %}
          <a href="{{ project.project_url }}" class="btn btn-primary">View Project</a>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Skills and Technologies -->
<section id="skills">
  <div class="container">
    <h2>Technical Skills</h2>
    <div class="skills-categories">
       <div class="skill-category">
         <h3>Languages</h3>
         <ul class="skills-list">
           <li>C#</li>
           <li>Java</li>
           <li>Kotlin</li>
           <li>Python</li>
           <li>Typescript</li>
           <li>Luau</li>
           <li>Rust</li>
           <li>Odin</li>
         </ul>
       </div>
      <div class="skill-category">
        <h3>Game Engines</h3>
        <ul class="skills-list">
          <li>Unity</li>
          <li>Unreal Engine 5</li>
          <li>Roblox</li>
          <li>Godot</li>
          <li>LibGDX</li>
        </ul>
      </div>
       <div class="skill-category">
         <h3>Tools & Systems</h3>
         <ul class="skills-list">
           <li>Git/GitLab CI/CD</li>
           <li>Perforce</li>
           <li>Visual Studio</li>
           <li>IntelliJ IDEA</li>
           <li>PlasticSCM</li>
           <li>Raylib</li>
           <li>LDtk</li>
         </ul>
       </div>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects">
  <div class="container">
    <h2>All Projects</h2>
    <div class="projects-grid">
      {% assign sorted_professional_projects_all = site.professional_projects | where: 'shown', true | sort: 'date' | reverse %}
      {% for project in sorted_professional_projects_all %}
        <div class="project-card">
          <div class="project-image">
            <img src="{{ project.image }}" alt="{{ project.title }}">
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-meta">
              <span class="project-tech">{{ project.technologies | join: ', ' }}</span>
              <span class="project-role">{{ project.role }}</span>
            </div>
            {% if project.project_url %}
            <a href="{{ project.project_url }}" class="btn btn-primary">View Project</a>
            {% endif %}
          </div>
        </div>
      {% endfor %}
      {% assign sorted_solo_projects_all = site.solo_projects | where: 'shown', true | sort: 'date' | reverse %}
      {% for project in sorted_solo_projects_all %}
        <div class="project-card">
          <div class="project-image">
            <img src="{{ project.image }}" alt="{{ project.title }}">
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-meta">
              <span class="project-tech">{{ project.technologies | join: ', ' }}</span>
              <span class="project-role">{{ project.role }}</span>
            </div>
            {% if project.project_url %}
            <a href="{{ project.project_url }}" class="btn btn-primary">View Project</a>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Professional Experience Preview -->
<section id="experience-preview">
  <div class="container">
    <h2>Professional Experience</h2>
    <div class="experience-timeline">
      {% for exp in site.experience %}
      <div class="experience-item">
        <div class="experience-header">
          <h3>{{ exp.role }}</h3>
          <span class="experience-company">{{ exp.company }}</span>
          <span class="experience-period">{{ exp.period }}</span>
        </div>
        <p class="experience-description">{{ exp.description }}</p>
      </div>
      {% endfor %}
    </div>
    <div class="experience-actions">
      <a href="/about" class="btn btn-primary">View Full Resume</a>
    </div>
  </div>
</section>

<script src="{{ base.url | prepend: site.url }}/assets/js/carousel.js"></script>