// Initialize EmailJS with your public key
emailjs.init("DJwPxJWYMUc2heiFe");

// Data Models
const skillsData = {
  technical: [
    "Java (Basic)", "HTML", "CSS", "SQL", "NoSQL", 
    "Systems Analysis and Design", "Data Analysis (Excel, Basic Statistics)", 
    "Business Process Analysis", "Microsoft Office (Word, Excel, PowerPoint)",
    "Azure DevOps", "Copilot Studio", "Microsoft Fabric", 
    "Microsoft Foundry", "Terraform",
    "React.js", "Node.js", "MongoDB"
  ],
  analytical: [
    "Problem-solving", "Logical and Critical Thinking", 
    "Requirements Gathering and Documentation", "Data Interpretation", 
    "Attention to Detail"
  ],
  professional: [
    "Strong Verbal and Written Communication", "Team Collaboration", 
    "Time Management", "Adaptability and Willingness to Learn", 
    "Professional Work Ethic"
  ]
};

const educations = [
  { 
    degree: "Bachelor of Information Technology in Business Systems", 
    institution: "IIE Rosebank College", 
    date: "2024 – 2026 (Final Year)", 
    desc: "Final-year student with Work Integrated Learning (WIL) - Distinction. Combining technical expertise with business insight." 
  },
  { 
    degree: "National Senior Certificate (NSC – Bachelor's Pass)", 
    institution: "Tshikevha Christian School", 
    date: "2019 – 2023", 
    desc: "Completed matric with Bachelor's pass, qualifying for higher education studies." 
  }
];

// Render Skills
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  if (!container) return;
  
  container.innerHTML = `
    <div class="skills-category">
      <h3><i class="fas fa-code"></i> Technical Skills</h3>
      <div class="skills-grid">
        ${skillsData.technical.map(skill => `<div class="skill-badge"><i class="fas fa-microchip"></i> ${skill}</div>`).join('')}
      </div>
    </div>
    <div class="skills-category">
      <h3><i class="fas fa-brain"></i> Analytical Skills</h3>
      <div class="skills-grid">
        ${skillsData.analytical.map(skill => `<div class="skill-badge"><i class="fas fa-chart-line"></i> ${skill}</div>`).join('')}
      </div>
    </div>
    <div class="skills-category">
      <h3><i class="fas fa-users"></i> Professional & Soft Skills</h3>
      <div class="skills-grid">
        ${skillsData.professional.map(skill => `<div class="skill-badge"><i class="fas fa-handshake"></i> ${skill}</div>`).join('')}
      </div>
    </div>
  `;
}

// Render Education
function renderEducation() {
  const container = document.getElementById('educationList');
  if (!container) return;
  
  container.innerHTML = educations.map(edu => `
    <div class="edu-card">
      <h3>${edu.degree}</h3>
      <div class="edu-date">${edu.institution} | ${edu.date}</div>
      <p>${edu.desc}</p>
    </div>
  `).join('');
}

// Open Resume in New Tab
function openResume() {
  const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vhuthuhawe Netshilaphala - Resume</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea,#764ba2);padding:40px 20px;}
    .resume-container{max-width:900px;margin:0 auto;background:white;border-radius:20px;overflow:hidden;}
    .header{background:linear-gradient(135deg,#2563eb,#7c3aed);color:white;padding:40px;text-align:center;}
    .header h1{font-size:2.5rem;margin-bottom:10px;}
    .contact-info{display:flex;justify-content:center;gap:30px;margin-top:20px;flex-wrap:wrap;}
    .content{padding:40px;}
    .section{margin-bottom:30px;}
    .section h2{color:#2563eb;border-bottom:2px solid #2563eb;padding-bottom:10px;margin-bottom:20px;}
    .skills-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;}
    .skill-tag{background:#e0e7ff;padding:6px 15px;border-radius:20px;color:#1e40af;}
    @media(max-width:768px){.header h1{font-size:1.8rem;}}
  </style>
</head>
<body>
  <div class="resume-container">
    <div class="header">
      <h1>Vhuthuhawe Netshilaphala</h1>
      <p>IT in Business Systems Student | Aspiring Full Stack Developer</p>
      <div class="contact-info">
        <span>📧 thuvhu45@gmail.com</span>
        <span>📱 081 091 1353</span>
        <span>📍 South Africa</span>
      </div>
    </div>
    <div class="content">
      <div class="section">
        <h2>About Me</h2>
        <p>I build systems that don't just work — they solve the right problems. As a final-year IT in Business Systems student at Rosebank College, I combine technical expertise with business insight to build smart, user-focused applications.</p>
      </div>
      <div class="section">
        <h2>Current Position</h2>
        <p><strong>Full Stack Development Intern</strong><br>FutureInterns | March 2026 – Present</p>
      </div>
      <div class="section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          ${skillsData.technical.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `;
  
  const newWindow = window.open();
  newWindow.document.write(resumeHTML);
  newWindow.document.close();
}

// Contact Form Handler with EmailJS
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      statusDiv.innerHTML = '<span style="color:#e11d48;">❌ All fields are required.</span>';
      return;
    }

    const emailPattern = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailPattern.test(email)) {
      statusDiv.innerHTML = '<span style="color:#e11d48;">❌ Please enter a valid email address.</span>';
      return;
    }

    submitBtn.classList.add('btn-loading');
    submitBtn.disabled = true;
    statusDiv.innerHTML = '<span style="color:#2563eb;">📡 Sending message...</span>';

    const templateParams = {
      name: name,
      message: message,
      title: "Portfolio Website Contact"
    };

    try {
      const serviceId = 'service_f7qwx7y';
      const templateId = 'template_b1sfav7';
      
      const response = await emailjs.send(serviceId, templateId, templateParams);
      
      console.log('Email sent successfully!', response);
      statusDiv.innerHTML = '<span style="color:#10b981;">✅ Message sent! I\'ll reply to your email soon.</span>';
      form.reset();
      
    } catch (error) {
      console.error('Email failed to send:', error);
      statusDiv.innerHTML = '<span style="color:#e11d48;">❌ Failed to send. Please email me directly: thuvhu45@gmail.com</span>';
    } finally {
      submitBtn.classList.remove('btn-loading');
      submitBtn.disabled = false;
      
      setTimeout(() => {
        if (statusDiv.innerHTML.includes("✅") || statusDiv.innerHTML.includes("❌")) {
          statusDiv.innerHTML = '';
        }
      }, 5000);
    }
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

// Smooth Scroll for Anchor Links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#" || targetId === "") return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
        const navLinks = document.getElementById('navLinks');
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });
}

// Update SEO Meta Tags
function updateSEO() {
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', "Vhuthuhawe Netshilaphala's portfolio - IT in Business Systems student at Rosebank College, interning at FutureInterns.");
  }
  document.title = "Vhuthuhawe Netshilaphala | IT & Business Systems Student";
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderEducation();
  setupContactForm();
  setupMobileMenu();
  setupSmoothScroll();
  updateSEO();
  
  const downloadBtn = document.getElementById('downloadResumeBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openResume();
    });
  }
  
  console.log("Portfolio ready! EmailJS is active.");
});