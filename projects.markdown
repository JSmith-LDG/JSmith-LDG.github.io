---
layout: default
title: Projects
--- 

<div class="breadcrumbs">
    <a href="/">Home</a>>Projects
</div>

<section id="projects">
  <div class="container">
    <h2>All Projects</h2>
    
    <!-- Professional Projects -->
    <h3>Professional Projects</h3>
    <div class="projects-grid">
      {% assign sorted_professional_projects = site.professional_projects | where: 'shown', true | sort: 'date' | reverse %}
      {% for project in sorted_professional_projects %}
      <div class="project-card">
        <div class="project-image">
          <img src="{{ project.image }}" alt="{{ project.title }}">
        </div>
        <div class="project-content">
          <h4>{{ project.title }}</h4>
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
    
    <!-- Solo Projects -->
    <h3 style="margin-top: 3rem;">Solo Projects</h3>
    <div class="projects-grid">
      {% assign sorted_solo_projects = site.solo_projects | where: 'shown', true | sort: 'date' | reverse %}
      {% for project in sorted_solo_projects %}
      <div class="project-card">
        <div class="project-image">
          <img src="{{ project.image }}" alt="{{ project.title }}">
        </div>
        <div class="project-content">
          <h4>{{ project.title }}</h4>
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