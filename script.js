// 🌸 Dynamic Project Showcase for Phoebe Mago's Portfolio

const projects = [
  {
    name: "Sarap Norte App",
    description:
      "A digital cookbook celebrating the unique flavors and dishes of Camarines Norte, featuring traditional recipes and local ingredients."
  },
  {
    name: "Feedback Analyzer",
    description:
      "A web-based tool designed to analyze employee feedback, identify themes, and visualize insights to improve workplace satisfaction."
  },
  {
    name: "UI/UX Redesign Concept",
    description:
      "A front-end prototype focusing on clean, modern design principles and user-centered interface layouts."
  },
  {
    name: "Responsive Travel Blog",
    description:
      "A responsive front-end project showcasing beautiful destinations with smooth animations and mobile-friendly design."
  }
];

// Get container for project list (make sure <ul id="projects-list"></ul> exists in projects.html)
const projectList = document.getElementById("projects-list");

// Create project cards dynamically
projects.forEach((project, index) => {
  const li = document.createElement("li");
  li.classList.add("project-card");
  li.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
  `;

  // Add fade-up animation with delay
  li.style.opacity = "0";
  li.style.transform = "translateY(30px)";
  setTimeout(() => {
    li.style.transition = "all 0.8s ease";
    li.style.opacity = "1";
    li.style.transform = "translateY(0)";
  }, index * 200);

  // Add hover animation effect
  li.addEventListener("mouseover", () => {
    li.style.transform = "scale(1.03)";
    li.style.boxShadow = "0 6px 20px rgba(180, 140, 200, 0.4)";
  });

  li.addEventListener("mouseout", () => {
    li.style.transform = "scale(1)";
    li.style.boxShadow = "0 4px 12px rgba(180, 140, 200, 0.2)";
  });

  projectList.appendChild(li);
});
// Highlight active page in nav
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll('nav a').forEach(link => {
  if(link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
