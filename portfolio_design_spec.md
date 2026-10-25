# Living System Architecture Portfolio
## Complete Website Specification / Implementation Blueprint

> **Project type:** Personal Portfolio Website  
> **Primary role:** Backend Developer / Software Developer  
> **Design concept:** Living System Architecture  
> **Visual direction:** Dark futuristic system map, recruiter-friendly, interactive architecture diagram  
> **Primary goal:** Make the portfolio itself demonstrate system-thinking, backend architecture awareness, and technical maturity.

---

# 1. Project Vision

The portfolio should not feel like a generic personal website.

Instead, the website behaves like a **living software architecture map** where the owner is represented as the center of a system and each section of the portfolio is represented as a connected service/module.

The website should visually communicate:

- backend development mindset;
- API and service architecture;
- database/system thinking;
- project relationships;
- modular design;
- clean software engineering;
- technical curiosity;
- professional readiness.

The website must remain easy to understand for recruiters and non-technical visitors.

The architecture visualization is the signature element, but content readability must always take priority over visual effects.

---

# 2. Core Design Idea

The page uses a central architecture graph.

Example conceptual structure:

```text
                         ABOUT ME
                            ●
                            │
                            │
             API GATEWAY ●─┼─● PROJECTS
                         \  │  /
                          \ │ /
                        ● DEVELOPER ●
                          / │ \
                         /  │  \
                   SKILLS   │   EXPERIENCE
                            │
                         CONTACT

PROJECTS
   │
   ├── Toko Nusantara
   ├── Auction Platform
   └── Inventory API

TECH STACK
   │
   ├── Node.js
   ├── Express.js
   ├── PostgreSQL
   ├── Sequelize
   ├── REST API
   └── WebSocket
```

The graph should feel alive through subtle animations:

- animated connection lines;
- moving data particles;
- node hover effects;
- active node glow;
- smooth focus transitions;
- responsive re-layout.

Do not make the animation distracting.

---

# 3. Main User Experience

The visitor lands on the homepage and immediately sees:

1. developer identity;
2. role;
3. available/open-to-work status;
4. portfolio architecture map;
5. direct access to projects;
6. downloadable CV;
7. selected project preview.

The visitor can then:

- hover architecture nodes;
- click Projects;
- select a project;
- inspect its architecture and case study;
- view skills;
- see experience;
- download CV;
- open GitHub;
- open LinkedIn;
- contact the developer.

The experience should feel like exploring a system.

---

# 4. Visual Design System

## 4.1 Theme

Primary style:

**Living System Architecture / Network Control Interface**

Avoid making it look like:

- a Windows clone;
- macOS clone;
- fake terminal-only portfolio;
- generic admin dashboard;
- overly aggressive cyberpunk interface;
- video game HUD.

It should look futuristic but professional.

---

# 4.2 Colors

Suggested palette:

```css
--bg-primary: #061018;
--bg-secondary: #091821;
--bg-card: rgba(8, 27, 38, 0.78);

--text-primary: #F4FBFF;
--text-secondary: #96B6C7;
--text-muted: #5F8092;

--accent-cyan: #35E7F5;
--accent-green: #37F5AE;
--accent-blue: #338CFF;
--accent-yellow: #FFE26A;

--border-default: rgba(75, 205, 235, 0.18);
--border-active: rgba(53, 231, 245, 0.75);

--success: #3CF6AD;
--warning: #FFD95C;
--error: #FF647C;
```

Use cyan and green for highlights.

Do not overuse neon glow.

---

# 4.3 Typography

Recommended:

### Headings
- Inter
- Geist
- Manrope
- Space Grotesk

### Body
- Inter
- Geist Sans

### Technical labels
- JetBrains Mono
- IBM Plex Mono
- Geist Mono

Suggested hierarchy:

```text
Hero Name       56–72px
Hero Role       24–32px
Section Title   26–32px
Card Title      18–22px
Body            15–18px
Metadata        12–14px
Technical Label 11–13px
```

---

# 4.4 Shape Language

Use:

- 12–18px rounded corners;
- thin borders;
- glass panels;
- soft inner shadows;
- restrained glow;
- circular architecture nodes;
- small status indicators;
- clean icons.

Avoid excessive blur.

---

# 5. Website Structure

Recommended page structure:

```text
/
├── Hero
├── Living Architecture Map
├── Selected Project
├── Tech Stack
├── About
├── System Metrics
├── Experience
├── Projects
├── Contact
└── Footer
```

This can be implemented as a single-page portfolio.

Optional project case studies can later use:

```text
/projects/:slug
```

---

# 6. Navbar

## Content

Left:

```text
[logo] Portfolio Network
       Living System Architecture
```

Right:

```text
About
Projects
Skills
Experience
Contact
```

Far-right status:

```text
● System Online
```

## Behavior

- sticky/fixed;
- subtle blur;
- active section indicator;
- smooth scrolling;
- mobile hamburger menu;
- navbar becomes slightly more opaque after scrolling.

---

# 7. Hero Section

## Required content

```text
● Available for Opportunities

Hi, I'm
[YOUR NAME]

Backend Developer building APIs,
databases, and scalable systems.

I design and build reliable backend systems
that power real products. Passionate about
clean architecture, performance, and solving
real-world problems through technology.
```

Buttons:

```text
Explore Projects
Download CV
```

## Optional alternative role

```text
Backend Developer & Software Engineer
```

## CTA behavior

### Explore Projects
Scroll to the Projects section.

### Download CV
Download:

```text
/public/cv/your-name-cv.pdf
```

---

# 8. Living Architecture Map

This is the signature component.

Component name suggestion:

```text
LivingArchitectureGraph
```

## Main nodes

```text
Developer
About Me
API Gateway
Projects
Skills
Experience
Contact
```

## Project child nodes

```text
Toko Nusantara
Auction Platform
Inventory API
```

## Tech nodes

```text
Node.js
Express.js
PostgreSQL
Sequelize
REST API
WebSocket
```

---

# 9. Central Developer Node

The central node contains:

- profile photo/avatar;
- name;
- role;
- availability indicator.

Example:

```text
[PROFILE]

Rizky Maulana
Backend Developer

● Available
```

Interaction:

- subtle pulse;
- rotating outer ring;
- hover glow;
- clicking opens About section.

---

# 10. API Gateway Node

Example card:

```text
API Gateway

Handle requests
& route services
```

Nearby visual:

```text
Incoming Requests

GET  /api/users
POST /api/products
GET  /api/auctions
```

Animation:

Small particles enter the API gateway and move toward other nodes.

---

# 11. Data Flow Animation

Connection paths should simulate requests.

Example:

```text
Request
   ↓
API Gateway
   ↓
Service
   ↓
Database
   ↓
Response
```

Legend:

```text
● Request
● Processing
● Database
● Response
```

Use different accent states, but not overly saturated.

---

# 12. Architecture Interaction

## Hover

When hovering a node:

- increase node glow;
- increase line opacity;
- highlight connected nodes;
- show tooltip;
- reduce unrelated nodes slightly.

## Click

When clicking a node:

### About
Scroll to About.

### Projects
Focus project subtree.

### Skills
Highlight technology nodes.

### Experience
Scroll to timeline.

### Contact
Open contact section.

### Project
Open project detail panel.

---

# 13. Project Selection System

Projects should be driven by data.

Example:

```js
const projects = [
  {
    id: "toko-nusantara",
    title: "Toko Nusantara",
    category: "E-Commerce",
    description: "...",
    role: "Backend Developer",
    stack: [],
    architecture: [],
    github: "",
    demo: ""
  }
]
```

Selecting a project updates:

- architecture graph;
- detail panel;
- tech highlights;
- project screenshot;
- active project node.

---

# 14. Selected Project Panel

Example:

```text
SELECTED PROJECT

CASE FILE #001

TOKO NUSANTARA

Full-featured e-commerce platform
built using scalable backend architecture.
```

Sections:

```text
Problem
Role
What I Built
Tech Stack
Architecture
Challenges
Result
```

Buttons:

```text
Live Demo
Source Code
```

---

# 15. Project Case Study Structure

Every project should tell a story.

Use:

```text
Problem
↓
Decision
↓
Architecture
↓
Implementation
↓
Challenge
↓
Result
```

Avoid only showing screenshots.

---

# 16. Example Project — Toko Nusantara

## Name

```text
Toko Nusantara
```

## Category

```text
E-Commerce Platform
```

## Problem

Example:

```text
Local products needed a centralized platform
with reliable backend services, secure transactions,
and scalable infrastructure.
```

## Role

```text
Backend Developer
```

## What I Built

```text
RESTful APIs
Authentication
Role-based authorization
Product management
Order management
Database design
Payment integration
```

## Tech Stack

```text
Node.js
Express.js
PostgreSQL
Sequelize
JWT
Midtrans
```

## Possible architecture

```text
Frontend
   │
   ▼
REST API
   │
   ▼
Express
   │
   ├── Authentication
   ├── Product Service
   ├── Order Service
   └── Payment Service
          │
          ▼
      PostgreSQL
```

---

# 17. Example Project — Auction Platform

## Category

```text
Real-Time Application
```

## Features

```text
Real-time bidding
Auction countdown
Server time synchronization
Winner determination
Bid validation
Live state updates
```

## Tech

```text
JavaScript
Node.js
Express
PostgreSQL
WebSocket
REST API
```

## Architecture

```text
Browser
   │
   ├── REST API
   │
   └── WebSocket
          │
          ▼
     Auction Server
          │
      ┌───┴────┐
      ▼        ▼
 Auction    Server
 Logic      Clock
      │
      ▼
 PostgreSQL
```

---

# 18. Example Project — Inventory API

## Category

```text
Backend API
```

## Features

```text
Product inventory
Stock mutation
Transaction records
Authentication
Reporting
```

---

# 19. Tech Stack Section

Title:

```text
Tech Stack / Services
```

Cards:

```text
Node.js
Express.js
PostgreSQL
Sequelize
REST API
WebSocket
Git
GitHub
Docker
```

Optional future stack:

```text
Redis
MongoDB
TypeScript
NestJS
Linux
Nginx
```

Do not show technologies the owner cannot explain during an interview.

---

# 20. Skill Visualization

Avoid skill percentages such as:

```text
JavaScript 95%
PostgreSQL 90%
```

Instead show:

```text
Node.js
Used in 5 projects

PostgreSQL
Used in 4 projects

REST API
Used in 6 projects
```

This is more credible.

---

# 21. About Section

Example:

```text
ABOUT ME

I'm a backend developer who enjoys turning ideas
into reliable systems.

I enjoy working with APIs, databases, and scalable
infrastructure. My focus is building maintainable
applications, improving system architecture, and
solving real-world problems through software.
```

Tags:

```text
Clean Code
Scalable Systems
Problem Solver
Continuous Learner
Team Player
```

---

# 22. System Metrics

Use meaningful metrics.

Example:

```text
12+ APIs Built
3 Projects Deployed
4 Database Systems
99.9% Demo Uptime
```

Important:

Do not fake statistics.

If real numbers are unavailable, use:

```text
Projects Completed
APIs Developed
Technologies Used
GitHub Repositories
```

Data should be truthful.

---

# 23. Experience Timeline

Example:

```text
2026 — Present
Backend Developer
Personal / Academic Projects

2025 — 2026
Software Development Projects

2024 — 2025
Informatics Graduate
```

Each item:

```text
Role
Organization
Date
Description
Achievements
Technologies
```

---

# 24. Education

Example:

```text
Bachelor of Computer Science

University Name
2023 — Present
```

Optional:

```text
Relevant coursework:
Database Systems
Software Engineering
Web Programming
Data Structures
Algorithms
Computer Networks
```

---

# 25. Organization Experience

Possible format:

```text
ORGANIZATION NODE

Treasurer
Organization Name

Achievements:
- Managed organizational budget
- Prepared financial reporting
- Coordinated funding activities
```

Or:

```text
Steering Committee
Event Name
```

Use measurable achievements when possible.

---

# 26. Contact Section

Headline:

```text
Let's Build Something.
```

Content:

```text
Currently open to backend developer,
software engineer, internship, and
collaboration opportunities.
```

Buttons:

```text
Email Me
LinkedIn
GitHub
```

Optional form:

```text
Name
Email
Message

Send Message
```

---

# 27. Footer

Example:

```text
Portfolio Network

Built with curiosity,
clean architecture,
and lots of coffee.

GitHub
LinkedIn
Email
```

---

# 28. Motion Design

Motion should support the system concept.

## Recommended animations

### Node pulse
Duration:

```text
3–5 seconds
```

### Packet animation

Small glowing dot moves through paths.

### Hover

```text
scale: 1 → 1.04
```

### Section reveal

```text
opacity: 0 → 1
translateY: 20px → 0
```

### Project selection

Smooth transition between architecture states.

---

# 29. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable:

- packet animation;
- parallax;
- continuous pulse;
- strong transitions.

---

# 30. Background Effects

Suggested:

- subtle grid;
- faint dots;
- low-opacity architecture lines;
- soft radial gradient;
- optional mountain/abstract silhouette.

Do not use a busy background behind text.

---

# 31. Desktop Layout

Target:

```text
1440px+
```

Suggested structure:

```text
┌───────────────────────────────────────────┐
│ Navbar                                    │
├───────────┬─────────────────┬─────────────┤
│ Hero      │ Architecture    │ Project     │
│           │ Graph           │ Detail      │
├───────────┴─────────────────┴─────────────┤
│ Tech Stack                                │
├──────────────┬───────────────┬────────────┤
│ About        │ Metrics       │ Experience │
└──────────────┴───────────────┴────────────┘
```

---

# 32. Tablet Layout

At approximately:

```text
768–1024px
```

Use:

```text
Hero
Architecture
Project Detail
Tech Stack
About
Metrics
Experience
```

Graph should resize.

---

# 33. Mobile Layout

Do not attempt to preserve the desktop graph exactly.

Mobile:

```text
Hero
↓
Architecture Overview
↓
Projects
↓
Tech Stack
↓
About
↓
Experience
↓
Contact
```

Architecture can become:

```text
        YOU
         │
 ┌───────┼────────┐
 About Projects Skills
         │
     Experience
```

or horizontally scrollable.

---

# 34. Mobile Navigation

Use hamburger menu.

Example:

```text
☰

About
Projects
Skills
Experience
Contact
```

---

# 35. Recommended Technology

Recommended stack:

```text
React
Vite
Tailwind CSS
Framer Motion
React Flow
Lucide Icons
```

Alternative:

```text
Next.js
Tailwind CSS
Framer Motion
React Flow
```

---

# 36. Why React Flow

React Flow is useful for:

- architecture nodes;
- edges;
- custom nodes;
- dynamic layout;
- interaction;
- zoom/pan;
- project-specific diagrams.

Possible use:

```text
LivingArchitectureGraph
ProjectArchitectureGraph
```

---

# 37. Suggested Dependencies

```bash
npm install react-router-dom
npm install framer-motion
npm install lucide-react
npm install @xyflow/react
```

Optional:

```bash
npm install clsx
npm install tailwind-merge
```

---

# 38. Suggested Project Structure

```text
portfolio/
│
├── public/
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   │
│   ├── cv/
│   │   └── cv.pdf
│   │
│   └── icons/
│
├── src/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Section.jsx
│   │   │
│   │   ├── architecture/
│   │   │   ├── LivingArchitectureGraph.jsx
│   │   │   ├── DeveloperNode.jsx
│   │   │   ├── ServiceNode.jsx
│   │   │   ├── ProjectNode.jsx
│   │   │   ├── TechNode.jsx
│   │   │   ├── AnimatedEdge.jsx
│   │   │   └── DataFlowLegend.jsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectPanel.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectArchitecture.jsx
│   │   │   └── ProjectStack.jsx
│   │   │
│   │   └── ui/
│   │       ├── Badge.jsx
│   │       ├── Button.jsx
│   │       ├── GlassCard.jsx
│   │       ├── StatusDot.jsx
│   │       └── SectionTitle.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Architecture.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── About.jsx
│   │   ├── Metrics.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   │
│   ├── data/
│   │   ├── portfolio.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── experience.js
│   │
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   └── useReducedMotion.js
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

# 39. Portfolio Data Model

`src/data/portfolio.js`

```js
export const portfolio = {
  name: "Your Name",
  role: "Backend Developer",
  location: "Jakarta, Indonesia",
  availability: true,

  summary:
    "Backend Developer building APIs, databases, and scalable systems.",

  email: "your@email.com",

  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",

  cv: "/cv/cv.pdf"
}
```

---

# 40. Project Data Model

`src/data/projects.js`

```js
export const projects = [
  {
    id: "toko-nusantara",

    title: "Toko Nusantara",

    category: "E-Commerce",

    subtitle:
      "E-commerce platform for Indonesian local products.",

    role: "Backend Developer",

    problem:
      "Local products needed a centralized digital platform.",

    solution:
      "Built a modular backend architecture with secure APIs.",

    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "JWT"
    ],

    features: [
      "Authentication",
      "Product Management",
      "Order Management",
      "Payment Integration"
    ],

    github: "",

    demo: "",

    image:
      "/images/projects/toko-nusantara.png"
  }
]
```

---

# 41. Architecture Node Model

```js
const nodes = [
  {
    id: "developer",
    type: "developer",
    position: { x: 400, y: 250 }
  },

  {
    id: "projects",
    type: "service",
    position: { x: 700, y: 200 }
  },

  {
    id: "skills",
    type: "service",
    position: { x: 150, y: 350 }
  }
]
```

---

# 42. Architecture Edge Model

```js
const edges = [
  {
    id: "developer-projects",
    source: "developer",
    target: "projects",
    animated: true
  },

  {
    id: "developer-skills",
    source: "developer",
    target: "skills",
    animated: true
  }
]
```

---

# 43. Node States

Node states:

```text
default
hover
active
connected
disabled
```

Example CSS logic:

```text
default
border cyan 20%

hover
border cyan 60%
glow low

active
border green
glow medium

connected
opacity 100%

unrelated
opacity 35%
```

---

# 44. Project Transition

When selected:

```text
User clicks project node
↓
Active project changes
↓
Project detail panel updates
↓
Relevant tech nodes glow
↓
Architecture graph highlights dependencies
↓
Screenshot changes
```

---

# 45. Loading Experience

Optional.

Keep maximum approximately:

```text
0.8–1.2 seconds
```

Example:

```text
INITIALIZING PORTFOLIO

Loading identity...
Connecting projects...
Mapping services...

SYSTEM ONLINE
```

Allow skipping.

Do not force long loading animation.

---

# 46. Accessibility

Requirements:

- WCAG-friendly contrast;
- keyboard navigation;
- focus indicators;
- semantic headings;
- alt text;
- buttons must use real `<button>`;
- links must use real `<a>`;
- architecture graph must have text alternative;
- reduced motion support.

---

# 47. Keyboard Navigation

Recommended:

```text
Tab
Navigate controls

Enter
Open selected project

Escape
Close project detail/modal
```

Optional:

```text
Arrow keys
Move between architecture nodes
```

---

# 48. SEO

Required:

```html
<title>Your Name — Backend Developer</title>
```

Description:

```text
Backend Developer portfolio specializing in
Node.js, REST APIs, PostgreSQL, and scalable systems.
```

Include:

- Open Graph metadata;
- Twitter card;
- favicon;
- canonical URL;
- sitemap;
- robots.txt.

---

# 49. Open Graph Preview

Recommended preview text:

```text
Your Name
Backend Developer

APIs • Databases • Scalable Systems
```

Image:

```text
1200 × 630
```

---

# 50. Performance

Targets:

```text
Lighthouse Performance > 90
Accessibility > 95
Best Practices > 95
SEO > 95
```

Optimize:

- screenshots;
- profile photos;
- SVG icons;
- fonts;
- React Flow rendering.

Use:

```text
WebP / AVIF
```

where possible.

---

# 51. Lazy Loading

Lazy-load:

- project screenshots;
- detailed architecture;
- non-visible sections.

Avoid lazy-loading the hero.

---

# 52. Responsive Architecture Strategy

Desktop:

```text
Full graph
```

Tablet:

```text
Compressed graph
```

Mobile:

```text
Simplified graph
```

Do not simply scale the desktop graph down.

---

# 53. Error Handling

If project image fails:

```text
show placeholder
```

If external GitHub/demo URL is unavailable:

```text
hide button
```

Do not show broken links.

---

# 54. Contact Form

If using a backend:

```text
POST /api/contact
```

Payload:

```json
{
  "name": "Visitor",
  "email": "visitor@email.com",
  "message": "Hello"
}
```

Validation:

```text
name required
valid email
message minimum length
rate limiting
spam prevention
```

Alternative:

Use email link only.

---

# 55. GitHub Integration — Optional

Optional future enhancement:

Fetch:

```text
repositories
stars
languages
last update
```

Possible card:

```text
GitHub Activity

14 repositories
8 public projects
Last commit: 2 days ago
```

Use GitHub API carefully.

---

# 56. System Status Concept

The website can include:

```text
SYSTEM STATUS

Portfolio    ● Online
API Demo     ● Online
GitHub       ● Connected
Contact      ● Ready
```

Do not pretend production services are online if they are not actually checked.

---

# 57. Project Architecture View

Project architecture should be unique per project.

Example Toko Nusantara:

```text
Client
  │
  ▼
REST API
  │
Express
  │
  ├── Auth
  ├── Products
  ├── Orders
  └── Payments
        │
        ▼
    PostgreSQL
```

Auction:

```text
Client
 │
 ├──────── REST
 │
 └──────── WebSocket
             │
             ▼
        Auction Engine
             │
     ┌───────┴────────┐
     ▼                ▼
 Server Clock      Bid Logic
     │                │
     └───────┬────────┘
             ▼
         PostgreSQL
```

---

# 58. Project Status Badges

Use:

```text
● Production
● Completed
● In Development
● Prototype
● Archived
```

---

# 59. Optional Case Study Page

Route:

```text
/projects/toko-nusantara
```

Sections:

```text
Hero
Problem
Architecture
Database
API Design
Challenges
Solutions
Screenshots
Result
What I Learned
```

---

# 60. Database Visualization

For backend projects, optionally show:

```text
users
  │
  ├── orders
  │     │
  │     └── order_items
  │
  └── addresses

products
  │
  └── order_items
```

Use this only when useful.

---

# 61. API Preview

Example:

```text
GET /api/products
```

Response preview:

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Product"
    }
  ]
}
```

This can make backend projects more tangible.

---

# 62. Design Principle

The page should communicate:

```text
I understand systems.
I can build systems.
I can explain systems.
```

That is the primary differentiator.

---

# 63. Recruiter Mode

Optional feature:

```text
Recruiter View
```

This disables most animations and shows:

```text
About
Experience
Projects
Skills
Education
Contact
```

This can be implemented later.

---

# 64. Architecture Mode

Optional toggle:

```text
Architecture View
```

This enables:

- graph interaction;
- packet animation;
- project dependency map;
- tech relationship visualization.

---

# 65. Theme Toggle

Optional:

```text
Dark
Light
```

Dark should remain default because the concept is optimized for it.

---

# 66. Microcopy

Recommended labels:

Instead of:

```text
My Projects
```

Use:

```text
Deployed Systems
```

Instead of:

```text
Skills
```

Use:

```text
Tech Stack / Services
```

Instead of:

```text
About Me
```

Use:

```text
Developer Profile
```

Instead of:

```text
Experience
```

Use:

```text
System Timeline
```

But keep normal labels visible enough so recruiters understand them.

---

# 67. Recommended Final Navigation Labels

Best balance:

```text
About
Projects
Skills
Experience
Contact
```

Do not make navigation cryptic.

---

# 68. Icons

Recommended library:

```text
Lucide React
```

Suggested icons:

```text
User
Boxes
Database
Server
Code2
Network
Briefcase
Mail
Github
Linkedin
ExternalLink
Download
Activity
Cpu
GitBranch
```

---

# 69. Glass Card Design

Suggested CSS concept:

```css
background: rgba(8, 25, 35, 0.72);
border: 1px solid rgba(53, 231, 245, 0.18);
backdrop-filter: blur(14px);
border-radius: 16px;
```

Hover:

```css
border-color: rgba(53, 231, 245, 0.55);
```

---

# 70. Glow Rule

Use glow only on:

```text
active nodes
selected project
status indicator
primary CTA
animated packet
```

Do not glow every border.

---

# 71. Architecture Background

Use:

```text
radial gradient
+
grid
+
subtle noise
```

Example concept:

```css
background:
  radial-gradient(
    circle at center,
    rgba(20, 170, 190, 0.08),
    transparent 50%
  ),
  #061018;
```

---

# 72. Project Screenshot Style

Screenshots should use:

```text
rounded corners
thin border
slight shadow
```

No excessive perspective distortion.

---

# 73. Content Priority

Order:

```text
Identity
Projects
Experience
Skills
Education
Contact
```

Visual novelty must not hide the information.

---

# 74. Minimum Portfolio Content Before Launch

Required:

```text
1 professional photo/avatar
1 CV PDF
3 projects
GitHub link
LinkedIn link
Email
About text
Skills
Experience
Education
```

---

# 75. Project Quality Rule

Better:

```text
3 strong projects
```

than:

```text
12 weak projects
```

Each project should explain technical decisions.

---

# 76. Suggested Three Featured Projects

```text
1. Toko Nusantara
   E-Commerce System

2. Real-Time Auction Platform
   WebSocket / Real-time Backend

3. Inventory Management API
   REST API / Database
```

These provide variety.

---

# 77. Project Card Metadata

Show:

```text
Project Name
Type
Role
Stack
Status
Year
```

Example:

```text
Toko Nusantara

E-Commerce
Backend Developer
Node.js / PostgreSQL
Completed
2026
```

---

# 78. Portfolio Personality

Overall impression:

```text
Technical
Modern
Calm
Systematic
Curious
Professional
```

Avoid:

```text
Too hacker-like
Too gaming-like
Too corporate
Too flashy
Too generic
```

---

# 79. Development Phases

## Phase 1

```text
Project setup
Theme
Navbar
Hero
Basic sections
```

## Phase 2

```text
Architecture graph
Custom nodes
Animated edges
```

## Phase 3

```text
Project selection
Project details
Project data
```

## Phase 4

```text
Responsive design
Animations
Accessibility
```

## Phase 5

```text
SEO
Performance
Deployment
Testing
```

---

# 80. MVP

MVP must include:

```text
Navbar
Hero
Architecture map
3 project nodes
Project details
Skills
About
Experience
Contact
Responsive layout
```

---

# 81. Version 2 Ideas

Optional later features:

```text
Project architecture animation
GitHub integration
Recruiter mode
Light theme
API request simulator
Interactive database schema
Live project status
Blog
Command palette
```

---

# 82. Command Palette — Optional

Keyboard:

```text
Ctrl / Cmd + K
```

Commands:

```text
Open Projects
View CV
Open GitHub
Open LinkedIn
Contact Me
```

---

# 83. Easter Egg — Optional

Example:

```text
/api/developer
```

Returns:

```json
{
  "name": "Your Name",
  "role": "Backend Developer",
  "status": "available"
}
```

Use as a small developer-focused detail.

---

# 84. Deployment

Recommended:

```text
Vercel
Netlify
Cloudflare Pages
```

If using React/Vite:

```bash
npm run build
```

Output:

```text
dist/
```

---

# 85. Custom Domain

Recommended:

```text
yourname.dev
yourname.id
yourname.com
```

Examples:

```text
rizkymaulana.dev
rizky.dev
rizkybackend.com
```

---

# 86. Environment Variables

Example:

```env
VITE_CONTACT_API=
VITE_GITHUB_USERNAME=
```

Never expose secret keys in frontend environment variables.

---

# 87. Security

Do not include:

```text
database passwords
JWT secrets
private API keys
server credentials
```

Frontend variables are public.

---

# 88. Testing

Test:

```text
Desktop Chrome
Desktop Firefox
Desktop Edge
Android Chrome
iPhone Safari
```

Check:

```text
navigation
project selection
responsive graph
links
CV download
contact
keyboard navigation
```

---

# 89. Acceptance Criteria

The project is ready when:

- hero immediately explains who the developer is;
- architecture graph is visible without confusion;
- graph works on desktop;
- simplified graph works on mobile;
- project selection updates the project panel;
- at least three projects exist;
- technologies are truthful;
- CV can be downloaded;
- GitHub and LinkedIn links work;
- no horizontal mobile overflow;
- navigation works;
- reduced motion is supported;
- Lighthouse scores are good;
- website loads quickly;
- recruiter can understand the portfolio within 10 seconds.

---

# 90. Final Homepage Concept

```text
┌──────────────────────────────────────────────────────────────┐
│ PORTFOLIO NETWORK        About Projects Skills Experience   │
│                                            ● System Online   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ Hi, I'm                         ABOUT                         │
│ YOUR NAME                         ●                           │
│                                    \                         │
│ Backend Developer             API ●─● YOU ─● PROJECTS        │
│ building APIs,                     / | \       ├─ Project A   │
│ databases and                SKILL ● | ● EXP   ├─ Project B   │
│ scalable systems.                   ● CONTACT  └─ Project C   │
│                                                              │
│ [Explore Projects] [CV]                                      │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ TECH STACK / SERVICES                                        │
│ Node.js | Express | PostgreSQL | Sequelize | REST | WS       │
├──────────────────────┬───────────────────┬───────────────────┤
│ ABOUT                │ SYSTEM METRICS    │ EXPERIENCE        │
│                      │                   │                   │
│ Developer profile    │ APIs Built        │ 2026 — Present    │
│                      │ Projects          │ Backend Developer │
│                      │ Databases         │                   │
├──────────────────────┴───────────────────┴───────────────────┤
│ CONTACT                                                       │
│ GitHub · LinkedIn · Email                     Let's Connect   │
└──────────────────────────────────────────────────────────────┘
```

---

# 91. Recommended Initial Copy

## Hero

```text
Hi, I'm [YOUR NAME].

Backend Developer building APIs,
databases, and scalable systems.

I enjoy turning ideas into reliable backend systems.
My focus is clean architecture, maintainable code,
database design, and solving real-world problems
through software.
```

---

# 92. Recommended Portfolio Message

The portfolio should make visitors feel:

```text
"This developer understands more than syntax.

They understand how software components
connect to form a system."
```

---

# 93. Final Design Rule

The architecture visualization is the identity.

The projects are the evidence.

The case studies are the explanation.

The CV is the summary.

The contact button is the conversion.

---

# 94. Final Product Name

Recommended internal/project title:

```text
Portfolio Network
```

Subtitle:

```text
Living System Architecture
```

Alternative titles:

```text
Developer Network
System Portfolio
Backend Architecture
Living Portfolio
DevGraph
```

Recommended:

# **PORTFOLIO NETWORK**
### Living System Architecture

---

# 95. Final Goal

Create a portfolio that is:

**memorable enough for a recruiter to remember,**

but

**clear enough for a recruiter to understand immediately.**

The user should never need to learn how to use the website.

The website should communicate backend knowledge through the interface itself.

---

## End of Core Specification


---

# 96. Pixel-Level UI Specification

This section upgrades the previous blueprint into a developer-ready visual specification.

The goal is to reduce interpretation during implementation so the finished website remains visually close to the intended mockup.

---

# 97. Global Canvas

## Desktop Reference Canvas

Primary design reference:

```text
Width: 1440 px
Minimum viewport height: 900 px
Content max-width: 1360 px
Outer horizontal margin: 40 px
```

For larger monitors:

```text
max-width: 1600 px
```

The interface should remain centered.

Recommended wrapper:

```css
.app-shell {
  width: min(100% - 48px, 1600px);
  margin-inline: auto;
}
```

At 1440 px:

```text
Horizontal padding: 32 px
```

At 1600 px and above:

```text
Horizontal padding: 48 px
```

---

# 98. Breakpoints

Use these responsive breakpoints consistently:

```css
--bp-mobile-sm: 360px;
--bp-mobile: 480px;
--bp-tablet: 768px;
--bp-laptop: 1024px;
--bp-desktop: 1280px;
--bp-wide: 1536px;
```

Recommended behavior:

```text
< 480 px       compact mobile
480–767 px     mobile
768–1023 px    tablet
1024–1279 px   compact desktop
1280–1535 px   main desktop
1536+ px       wide desktop
```

---

# 99. Spacing Scale

Use a consistent 4 px base spacing system.

```css
--space-0: 0px;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-7: 28px;
--space-8: 32px;
--space-9: 36px;
--space-10: 40px;
--space-12: 48px;
--space-14: 56px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-28: 112px;
--space-32: 128px;
```

Rules:

- card internal padding: 20–24 px;
- large panel padding: 24–28 px;
- section gap: 64–96 px;
- element gap inside cards: 12–20 px;
- small metadata gap: 6–8 px.

---

# 100. Border Radius Tokens

```css
--radius-xs: 6px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 28px;
--radius-pill: 999px;
```

Usage:

```text
Buttons              10–12 px
Cards                16 px
Large project panel  20 px
Node circles         999 px
Tag pills            999 px
Images               12–16 px
```

---

# 101. Border Tokens

```css
--border-soft: 1px solid rgba(84, 220, 245, 0.12);
--border-default: 1px solid rgba(84, 220, 245, 0.20);
--border-hover: 1px solid rgba(84, 220, 245, 0.42);
--border-active: 1px solid rgba(55, 245, 174, 0.72);
```

Never use borders brighter than the active state unless it is a temporary animated highlight.

---

# 102. Shadow Tokens

```css
--shadow-card:
  0 10px 30px rgba(0, 0, 0, 0.28);

--shadow-card-hover:
  0 16px 48px rgba(0, 0, 0, 0.38);

--shadow-cyan:
  0 0 24px rgba(53, 231, 245, 0.18);

--shadow-green:
  0 0 24px rgba(55, 245, 174, 0.18);
```

For active nodes:

```css
box-shadow:
  0 0 0 1px rgba(53, 231, 245, 0.42),
  0 0 22px rgba(53, 231, 245, 0.22),
  0 0 48px rgba(55, 245, 174, 0.08);
```

---

# 103. Glass Panel Formula

Base panel:

```css
background:
  linear-gradient(
    180deg,
    rgba(10, 30, 42, 0.84),
    rgba(7, 21, 31, 0.78)
  );

border: 1px solid rgba(75, 205, 235, 0.18);

backdrop-filter: blur(14px);
-webkit-backdrop-filter: blur(14px);

box-shadow:
  0 16px 40px rgba(0, 0, 0, 0.28);
```

Do not exceed:

```text
blur: 18 px
```

---

# 104. Full Color Tokens

```css
:root {
  --bg-0: #040B11;
  --bg-1: #061018;
  --bg-2: #091821;
  --bg-3: #0C202A;

  --panel-1: rgba(8, 26, 36, 0.84);
  --panel-2: rgba(9, 32, 43, 0.72);

  --text-strong: #F4FBFF;
  --text-primary: #D7EEF7;
  --text-secondary: #93B3C2;
  --text-muted: #607E8D;

  --cyan-100: #BFFBFF;
  --cyan-300: #63F3FA;
  --cyan-500: #35E7F5;
  --cyan-700: #149BA7;

  --green-300: #7EF8C6;
  --green-500: #37F5AE;
  --green-700: #129C6A;

  --blue-500: #338CFF;
  --yellow-500: #FFE26A;
  --red-500: #FF647C;

  --line-soft: rgba(72, 207, 232, 0.18);
  --line-active: rgba(53, 231, 245, 0.78);
}
```

---

# 105. Typography Tokens

Recommended font setup:

```css
--font-sans: "Inter", "Geist", system-ui, sans-serif;
--font-display: "Space Grotesk", "Inter", sans-serif;
--font-mono: "JetBrains Mono", "IBM Plex Mono", monospace;
```

Sizes:

```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-md: 18px;
--text-lg: 20px;
--text-xl: 24px;
--text-2xl: 30px;
--text-3xl: 38px;
--text-4xl: 48px;
--text-5xl: 60px;
--text-6xl: 72px;
```

Line heights:

```css
--lh-tight: 1.05;
--lh-heading: 1.15;
--lh-body: 1.6;
--lh-meta: 1.4;
```

Letter spacing:

```css
--tracking-tight: -0.03em;
--tracking-normal: 0;
--tracking-wide: 0.08em;
```

---

# 106. Desktop Typography Mapping

At 1440 px:

```text
Hero eyebrow             13 px / 600 / uppercase
Hero name                64 px / 700
Hero role                28 px / 600
Hero body                17 px / 400
Navbar                    14 px / 500
Section title             26 px / 650
Panel title               18 px / 600
Project title             30 px / 700
Card body                 14–15 px
Metadata                  12 px / mono
Button                    14 px / 600
Tag                       12 px / 500
```

---

# 107. Responsive Typography

## Tablet

```text
Hero name        52 px
Hero role        24 px
Body             16 px
Section title    24 px
```

## Mobile

```text
Hero name        clamp(38px, 11vw, 52px)
Hero role        20–22 px
Body             15–16 px
Section title    22 px
Project title    24 px
```

---

# 108. Main Desktop Grid

At 1440 px:

```text
Grid columns: 12
Column gap: 20 px
Outer padding: 32 px
```

Recommended top layout:

```text
Hero:
  columns 1–4

Architecture:
  columns 5–9

Selected Project:
  columns 10–12
```

More practical CSS version:

```css
.hero-grid {
  display: grid;
  grid-template-columns:
    minmax(300px, 0.88fr)
    minmax(520px, 1.5fr)
    minmax(340px, 0.95fr);
  gap: 20px;
}
```

---

# 109. Navbar Exact Specification

Desktop:

```text
Height: 72 px
Top position: 0
Horizontal padding: 28 px
Logo icon: 30 × 30 px
Logo/title gap: 12 px
Nav item gap: 28 px
Status pill height: 34 px
```

Navbar background:

```css
background: rgba(4, 13, 20, 0.70);
backdrop-filter: blur(18px);
border-bottom: 1px solid rgba(68, 189, 216, 0.12);
```

Scrolled state:

```css
background: rgba(4, 13, 20, 0.90);
```

Transition:

```text
220 ms ease-out
```

---

# 110. Navbar Item States

Default:

```text
text opacity: 78%
```

Hover:

```text
text opacity: 100%
translateY: -1 px
```

Active:

```text
color: cyan
small glow
bottom indicator 2 px
```

Focus:

```text
2 px cyan outline
offset: 4 px
```

---

# 111. Hero Layout Exact Specification

Hero block:

```text
Top spacing from navbar: 48 px
Max text width: 480 px
```

Eyebrow badge:

```text
Height: 30 px
Padding: 0 12 px
Gap: 8 px
Radius: 999 px
```

Hero name:

```text
Margin-top: 18 px
Max width: 520 px
```

Role:

```text
Margin-top: 12 px
```

Description:

```text
Margin-top: 18 px
Max width: 460 px
```

CTA group:

```text
Margin-top: 26 px
Gap: 12 px
```

Primary button:

```text
Height: 48 px
Padding: 0 20 px
```

Secondary button:

```text
Height: 48 px
Padding: 0 18 px
```

---

# 112. Primary Button States

Default:

```css
background:
  linear-gradient(
    135deg,
    #35E7F5,
    #37F5AE
  );

color: #041014;
```

Hover:

```text
translateY: -2 px
shadow stronger
brightness +6%
```

Active:

```text
translateY: 0
scale: 0.985
```

Focus:

```text
2 px solid rgba(53, 231, 245, 0.9)
4 px offset
```

Transition:

```text
160 ms ease-out
```

---

# 113. Secondary Button States

Default:

```text
transparent dark fill
cyan 20% border
```

Hover:

```text
cyan 8% background
cyan 45% border
```

Active:

```text
scale 0.985
```

---

# 114. Architecture Stage Exact Dimensions

Desktop reference:

```text
Width: 560–660 px
Height: 540–600 px
Minimum height: 540 px
```

Recommended:

```css
.architecture-stage {
  min-height: 560px;
  position: relative;
}
```

The graph should occupy approximately:

```text
75–80% of available stage width
```

---

# 115. Architecture Node Sizes

## Central Developer Node

```text
Avatar outer diameter: 134 px
Avatar image diameter: 110 px
Outer animated ring: 150 px
Label card below: 160 × 52 px
```

## Primary Nodes

```text
Diameter: 84 px
Icon: 24 px
Label: 12–13 px
```

Primary nodes:

```text
About
Projects
Skills
Experience
Contact
API Gateway
```

## Project Nodes

```text
Width: 148 px
Height: 48 px
Radius: 10 px
Icon: 22 px
```

## Tech Nodes

```text
Width: 78 px
Height: 70 px
Radius: 12 px
Icon: 24 px
```

---

# 116. Architecture Desktop Coordinates

Reference stage:

```text
width: 620 px
height: 560 px
```

Coordinates refer to node center points.

```text
Developer:
x 310
y 250

About:
x 310
y 80

API Gateway:
x 120
y 165

Projects:
x 505
y 165

Skills:
x 115
y 355

Experience:
x 505
y 355

Contact:
x 310
y 455
```

Project subtree:

```text
Toko Nusantara:
x 570
y 110

Auction Platform:
x 570
y 170

Inventory API:
x 570
y 230
```

The project child nodes may visually overflow slightly toward the right project panel area.

---

# 117. Architecture Tablet Coordinates

Reference stage:

```text
width: 720 px
height: 500 px
```

Use:

```text
Developer       x 360 y 240
About           x 360 y 80
Projects        x 570 y 180
Skills          x 150 y 180
Experience      x 570 y 340
API Gateway     x 150 y 340
Contact         x 360 y 430
```

Do not show all project child nodes simultaneously.

Instead:

```text
display selected project node only
```

---

# 118. Architecture Mobile Coordinates

Mobile graph should not use free-form desktop placement.

Use vertically stacked architecture:

```text
         About
           │
Skills ── Developer ── Projects
           │
       Experience
           │
         Contact
```

Suggested dimensions:

```text
Graph height: 380 px
Developer node: 96 px
Other nodes: 68 px
```

Project child nodes become a horizontal carousel below the graph.

---

# 119. Architecture Lines

Default:

```text
Width: 1.5 px
Opacity: 0.45
```

Connected/highlighted:

```text
Width: 2 px
Opacity: 0.9
```

Edge glow:

```css
filter:
  drop-shadow(
    0 0 5px rgba(53, 231, 245, 0.35)
  );
```

---

# 120. Edge Curves

Prefer:

```text
Bezier curves
```

Avoid:

```text
sharp right-angle routing
```

unless used in project-specific technical architecture diagrams.

---

# 121. Data Packet Animation

Packet:

```text
Diameter: 5 px
Glow radius: 10 px
```

Animation duration:

```text
2.4–3.6 seconds
```

Randomize only within a deterministic small range.

Do not show more than:

```text
6 visible packets
```

at one time in the main graph.

---

# 122. Node Pulse Animation

Idle active node:

```text
Scale:
1.00 → 1.025 → 1.00

Duration:
3.4 seconds

Easing:
ease-in-out
```

Opacity ring:

```text
0.25 → 0.5 → 0.25
```

Do not animate every node simultaneously.

Recommended pulse targets:

```text
Developer
System Online
Selected Project
```

---

# 123. Node Hover State

On hover:

```text
scale: 1.05
border opacity: 0.75
glow opacity: 0.32
label brightness: 100%
```

Connected edges:

```text
opacity: 1
```

Unrelated nodes:

```text
opacity: 0.52
```

Transition:

```text
180 ms ease-out
```

---

# 124. Node Active State

Selected node:

```text
border: green
glow: cyan + green
background slightly brighter
```

Use:

```text
scale: 1.06
```

Do not exceed:

```text
1.08
```

---

# 125. Node Focus State

Keyboard focus:

```text
2 px cyan ring
4 px outer offset
```

Must be visible even when node is also active.

---

# 126. Architecture Tooltip

Tooltip:

```text
Min-width: 180 px
Max-width: 240 px
Padding: 12 px 14 px
Radius: 10 px
```

Show:

```text
Node title
Short description
Optional project count
```

Delay:

```text
120 ms
```

Hide delay:

```text
80 ms
```

---

# 127. Incoming Requests Card

Exact desktop size:

```text
Width: 170 px
Height: auto
Padding: 12 px
```

Title:

```text
11 px mono uppercase
```

Rows:

```text
Height: 24 px
Font: 11–12 px mono
```

Method colors:

```text
GET    cyan
POST   green
PUT    yellow
DELETE red
```

Keep the text secondary, not visually dominant.

---

# 128. Tech Stack Rail

Desktop:

```text
Width: 590–640 px
Height: 104 px
Padding: 14 px
Gap: 12 px
```

Placement:

```text
directly below architecture graph
```

Each tech tile:

```text
70–82 px wide
64–72 px high
```

Use 6 visible items maximum in first row.

Overflow:

```text
scroll or wrap
```

only below 1100 px.

---

# 129. Selected Project Panel Exact Specification

Desktop:

```text
Width: 360–400 px
Min-height: 560 px
Padding: 22 px
Radius: 18 px
```

Internal structure:

```text
Metadata eyebrow
Case file number
Project title
Description
Screenshot
Problem
Role
What I Built
Tech Stack
CTA row
```

Vertical gaps:

```text
10 px
12 px
16 px
18 px
```

---

# 130. Selected Project Header

Eyebrow:

```text
11 px mono
uppercase
letter-spacing: 0.08em
```

Case ID:

```text
13 px mono
```

Project title:

```text
30 px / 700
line-height 1.1
```

Category badge:

```text
height 24 px
padding 0 9 px
font 10–11 px
```

---

# 131. Project Screenshot

Desktop:

```text
Aspect ratio: 16:6.5
Width: 100%
Min-height: 120 px
Max-height: 160 px
```

Border:

```text
1 px cyan 14%
```

Radius:

```text
12 px
```

Object fit:

```text
cover
```

---

# 132. Project Detail Row

Each information row:

```text
display: grid
grid-template-columns: 26px 74px 1fr
gap: 10px
```

Icon:

```text
20 px
```

Label:

```text
12 px
font-weight 600
```

Content:

```text
13–14 px
line-height 1.45
```

---

# 133. Tech Tags

Tag:

```text
Height: 26 px
Padding: 0 10 px
Gap: 6 px
Radius: 999 px
Font: 11–12 px
```

Wrap gap:

```text
6 px
```

---

# 134. Project CTA Row

Desktop:

```text
display flex
gap 10 px
```

Button height:

```text
44 px
```

Buttons should be equal width if space allows.

---

# 135. Lower Information Grid

Desktop:

```text
Grid:
1fr 0.9fr 0.95fr

Gap:
18 px
```

Cards:

```text
About
System Metrics
Experience Timeline
```

Minimum heights:

```text
About: 230 px
Metrics: 230 px
Experience: 230 px
```

---

# 136. About Card

Padding:

```text
20 px
```

Image:

```text
Width: 132 px
Height: 160 px
Radius: 12 px
```

Content layout:

```text
image 132 px
gap 16 px
text flexible
```

Mobile:

```text
image width: 100%
height: 180–220 px
```

---

# 137. About Tags

Tag height:

```text
24 px
```

Font:

```text
11 px
```

Gap:

```text
6 px
```

---

# 138. System Metrics Grid

Desktop:

```text
2 columns
2 rows
gap 10 px
```

Each metric card:

```text
Min-height: 82 px
Padding: 14 px
```

Value:

```text
28 px / 700
```

Label:

```text
12 px
```

Progress line:

```text
Height: 5 px
Radius: 999 px
```

Only use progress bars when they represent meaningful values.

---

# 139. Experience Timeline Exact Layout

Vertical line:

```text
Width: 1 px
```

Timeline node:

```text
Diameter: 9 px
```

Active node:

```text
Diameter: 11 px
Glow radius: 8 px
```

Row layout:

```text
Date column: 82 px
Timeline rail: 18 px
Content: 1fr
```

Entry spacing:

```text
18 px
```

---

# 140. Section Vertical Rhythm

Desktop:

```text
Hero top: 48 px after navbar
Hero bottom: 72 px
Main content section gap: 72 px
Large section gap: 96 px
Footer top spacing: 72 px
```

Tablet:

```text
section gap: 64 px
```

Mobile:

```text
section gap: 48–56 px
```

---

# 141. Page Background Layers

Layer 1:

```text
solid dark navy
```

Layer 2:

```text
subtle radial cyan glow
```

Layer 3:

```text
grid texture
```

Layer 4:

```text
low-opacity ambient particles
```

Layer 5:

```text
optional landscape/abstract lower silhouette
```

Opacity rules:

```text
grid: 4–7%
particles: 8–14%
landscape: 12–18%
```

---

# 142. Grid Background

Recommended:

```css
background-image:
  linear-gradient(
    rgba(53, 231, 245, 0.045) 1px,
    transparent 1px
  ),
  linear-gradient(
    90deg,
    rgba(53, 231, 245, 0.045) 1px,
    transparent 1px
  );

background-size: 32px 32px;
```

---

# 143. Background Radial Lighting

Use:

```css
background:
  radial-gradient(
    circle at 52% 20%,
    rgba(53, 231, 245, 0.08),
    transparent 34%
  ),
  radial-gradient(
    circle at 72% 40%,
    rgba(55, 245, 174, 0.04),
    transparent 28%
  );
```

---

# 144. Panel Hover Behavior

Only interactive panels should lift.

Hover:

```text
translateY: -2 px
border becomes 10–15% brighter
shadow increases slightly
```

Duration:

```text
180 ms
```

Non-interactive cards should not move.

---

# 145. Section Reveal Animation

Trigger:

```text
when 12–18% enters viewport
```

Initial:

```text
opacity: 0
translateY: 18 px
```

Final:

```text
opacity: 1
translateY: 0
```

Duration:

```text
420 ms
```

Easing:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Stagger:

```text
50–70 ms
```

---

# 146. Project Panel Transition

On project selection:

Old content:

```text
opacity 1 → 0
translateY 0 → 6 px
120 ms
```

New content:

```text
opacity 0 → 1
translateY 8 px → 0
220 ms
```

Total perceived transition should remain under:

```text
350 ms
```

---

# 147. Screenshot Transition

Crossfade:

```text
180–220 ms
```

No large zoom transition.

---

# 148. Selected Project Graph Transition

On selection:

```text
relevant edges brighten
selected project node becomes green
related tech nodes gain cyan ring
unrelated nodes reduce to 45–55% opacity
```

Transition:

```text
220 ms
```

---

# 149. Cursor Behavior

Desktop only:

```text
pointer on:
buttons
nodes
project cards
tags with action
links
```

Do not use a custom cursor by default.

If later added:

```text
keep it subtle
```

---

# 150. Mobile Header

Height:

```text
62 px
```

Padding:

```text
0 18 px
```

Logo:

```text
26 px
```

Hamburger:

```text
40 × 40 px hit target
```

---

# 151. Mobile Menu

Overlay:

```text
position fixed
top 62 px
left 0
right 0
```

Background:

```text
rgba(4, 13, 20, 0.96)
```

Item height:

```text
52 px
```

Padding:

```text
18 px
```

Animation:

```text
opacity + translateY
180 ms
```

---

# 152. Mobile Hero

Padding:

```text
24 px 18 px 0
```

Hero text max width:

```text
100%
```

CTA:

```text
stack vertically under 420 px
```

Button width:

```text
100%
```

Above 420 px:

```text
two buttons inline when possible
```

---

# 153. Mobile Architecture Stage

Margin-top:

```text
32 px
```

Width:

```text
100%
```

Min-height:

```text
360 px
```

Padding:

```text
14 px
```

Graph scale should remain at least:

```text
0.82
```

Do not shrink labels below:

```text
11 px
```

---

# 154. Mobile Project Cards

Project list becomes cards:

```text
width: 88vw
max-width: 340 px
```

Horizontal scroll:

```text
scroll-snap-type: x mandatory
```

Gap:

```text
12 px
```

---

# 155. Tablet Main Layout

At 768–1023 px:

```text
Hero:
full width

Architecture:
full width

Selected Project:
full width

Lower grid:
2 columns
```

Recommended order:

```text
Hero
Architecture
Project Detail
Tech Stack
About + Metrics
Experience
Projects
Contact
```

---

# 156. Compact Desktop Layout

At 1024–1279 px:

```text
Hero + Architecture:
2 columns

Project Detail:
full width below
```

Do not squeeze the three-column hero layout at this breakpoint.

---

# 157. Wide Desktop Layout

At 1536+ px:

```text
Architecture stage max-width: 700 px
Project panel max-width: 420 px
Hero max-width: 500 px
```

Do not scale everything proportionally.

Keep card typography readable and use additional whitespace instead.

---

# 158. Icon Sizing System

```text
Navbar icon        16 px
Button icon        16–18 px
Panel icon         18–20 px
Node icon          22–26 px
Hero decorative    28–32 px
```

Stroke width:

```text
1.7–2.0
```

---

# 159. Status Dot

Default:

```text
Diameter: 7 px
```

Glow:

```text
0 0 8 px green 35%
```

Pulse ring:

```text
Diameter 14 px
Opacity 0.18
```

---

# 160. Badge System

Types:

```text
status
category
technology
metadata
```

Status:

```text
green
```

Category:

```text
cyan/blue
```

Technology:

```text
neutral dark
```

Metadata:

```text
muted
```

---

# 161. Content Width Rules

Hero paragraph:

```text
max-width 460 px
```

Project description:

```text
max-width 100%
```

About paragraph:

```text
max-width 560 px
```

Long prose section:

```text
max-width 720 px
```

Avoid full-width paragraphs on desktop.

---

# 162. Maximum Text Length Guidelines

Hero description:

```text
260 characters max
```

Project short description:

```text
180 characters max
```

Metric label:

```text
30 characters max
```

Timeline description:

```text
150 characters max
```

Project problem:

```text
220 characters max
```

---

# 163. Project Card Exact Layout

Desktop card:

```text
Width: 320–360 px
Min-height: 300 px
Padding: 18 px
```

Image:

```text
height: 150 px
```

Title:

```text
20 px
```

Metadata:

```text
12 px
```

Tech tags:

```text
max 4 visible
```

Show:

```text
+2 more
```

when needed.

---

# 164. Project Card Hover

On hover:

```text
image scale 1 → 1.025
card translateY 0 → -3 px
border 20% → 45%
```

Duration:

```text
220 ms
```

Do not rotate cards.

---

# 165. Contact Section Exact Layout

Desktop:

```text
2 columns
```

Left:

```text
headline + copy
```

Right:

```text
contact buttons or form
```

Padding:

```text
28–32 px
```

Min-height:

```text
240 px
```

Headline:

```text
34–40 px
```

---

# 166. Footer Exact Layout

Desktop:

```text
Height: 84–96 px
```

Layout:

```text
left brand
center optional note
right social links + CTA
```

Border-top:

```text
1 px cyan 10%
```

Mobile:

```text
stack vertically
gap 16 px
padding 24 px 18 px
```

---

# 167. Form Field Styling

Input height:

```text
46 px
```

Textarea:

```text
min-height 120 px
```

Padding:

```text
12 px 14 px
```

Radius:

```text
10 px
```

Border:

```text
cyan 16%
```

Focus:

```text
cyan 65%
soft glow
```

Placeholder:

```text
muted 65%
```

---

# 168. Toast Notification

Use for:

```text
message sent
copy email
error
```

Desktop:

```text
width 320 px
bottom right 24 px
```

Mobile:

```text
left 16 px
right 16 px
bottom 16 px
```

Duration:

```text
3.5 seconds
```

---

# 169. Loading Skeletons

If project data is asynchronous:

```text
use skeleton
```

Do not show spinners for project content.

Skeleton shimmer:

```text
1.4 seconds
```

Low contrast.

---

# 170. Image Treatment

Profile image:

```text
contrast +4%
saturation -8%
dark overlay 8–12%
```

Project screenshots:

```text
no heavy filter
```

Use consistent image radius.

---

# 171. Profile Avatar Treatment

Central avatar:

```text
image clipped in circle
```

Overlay:

```css
background:
  linear-gradient(
    180deg,
    transparent,
    rgba(1, 12, 18, 0.18)
  );
```

Outer halo:

```text
cyan 18%
green 8%
```

---

# 172. Architecture Panel Z-Index

Recommended:

```text
background       0
grid             1
edges            2
packets          3
nodes            4
tooltips         8
navbar           20
mobile menu      30
modal            40
toast            50
```

---

# 173. Motion Tokens

```css
--motion-fast: 120ms;
--motion-ui: 180ms;
--motion-panel: 220ms;
--motion-reveal: 420ms;
--motion-slow: 700ms;

--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

---

# 174. Animation Budget

Continuous animations allowed:

```text
1 central pulse
1 status pulse
3–6 packet dots
1 subtle background drift
```

Do not continuously animate:

```text
every card
every node
all text
all borders
```

---

# 175. Reduced Motion Exact Behavior

When:

```css
prefers-reduced-motion: reduce
```

Disable:

```text
packet movement
node pulse
parallax
background drift
auto-scrolling transitions
```

Keep:

```text
instant state changes
150 ms opacity transitions max
```

---

# 176. Accessibility Contrast Targets

Minimum:

```text
Body text: 4.5:1
Large text: 3:1
Interactive border/focus: clearly visible
```

Avoid using cyan text on bright green backgrounds.

---

# 177. Hit Target Sizes

Minimum clickable area:

```text
44 × 44 px
```

Architecture nodes may visually be smaller only if their clickable hit box remains at least:

```text
44 × 44 px
```

---

# 178. Scroll Behavior

Use:

```css
scroll-behavior: smooth;
```

But disable smooth scrolling for reduced motion.

Navbar anchor offset:

```css
scroll-margin-top: 88px;
```

---

# 179. Scroll Progress — Optional

If implemented:

```text
2 px line at top
```

Use cyan/green gradient.

Do not make it thicker than:

```text
3 px
```

---

# 180. Architecture Focus Mode

When user clicks Projects:

```text
center shifts slightly toward Projects subtree
Projects node scale 1.08
Project child nodes fade in
other primary nodes opacity 0.45
```

Animation:

```text
280–340 ms
```

---

# 181. Architecture Reset

Clicking:

```text
Developer node
background empty area
Escape
```

returns graph to overview state.

---

# 182. Graph Zoom Rules

Desktop:

```text
default 1.0
min 0.85
max 1.25
```

Tablet:

```text
default 0.95
```

Mobile:

```text
disable manual zoom by default
```

Avoid requiring users to manipulate the graph to understand the page.

---

# 183. Graph Pan Rules

Desktop:

```text
allow small pan only if React Flow is used
```

Mobile:

```text
disable pan if it causes page-scroll conflicts
```

Main graph should appear correctly without user adjustment.

---

# 184. Tooltip Position Rules

Default:

```text
top-right of node
```

If near viewport edge:

```text
flip automatically
```

Tooltip should never cover the central developer node unless necessary.

---

# 185. Architecture Legend

Desktop position:

```text
bottom-right inside graph panel
```

Size:

```text
124 × 106 px
```

Padding:

```text
12 px
```

Items:

```text
Request
Processing
Database
Response
```

Mobile:

```text
hide by default
```

---

# 186. System Metrics Truthfulness Rule

Never create fake operational metrics.

Allowed:

```text
3 Projects
12 API Endpoints
4 Databases Used
5 Technologies
```

Only use uptime when actually measured.

---

# 187. System Status Logic

If not connected to live monitoring:

Use:

```text
Portfolio Online
Available for Opportunities
```

Avoid:

```text
99.9% uptime
API healthy
database online
```

unless backed by real checks.

---

# 188. Project Data Required Fields

Every featured project must have:

```text
id
title
category
one-line summary
problem
role
whatIBuilt
stack
year
status
image
```

Recommended:

```text
architecture
result
challenges
github
demo
```

---

# 189. Case Study Content Limits

Problem:

```text
2–4 sentences
```

Role:

```text
1 concise line
```

What I Built:

```text
3–6 bullet items
```

Tech Stack:

```text
4–8 technologies
```

Result:

```text
1–3 measurable outcomes if available
```

---

# 190. Desktop Visual Hierarchy

Priority should be:

```text
1. Name + role
2. Central living architecture
3. Selected project
4. Project CTA
5. Tech stack
6. About / metrics / experience
7. Footer
```

Do not let background graphics compete with the project panel.

---

# 191. First Viewport Composition

At 1440 × 900, first viewport should show:

```text
Navbar
Most or all Hero
Architecture graph
Selected project panel
Beginning of Tech Stack
```

The user should understand the concept without scrolling.

---

# 192. Above-the-Fold Height Budget

Navbar:

```text
72 px
```

Top spacing:

```text
32–40 px
```

Main hero/grid:

```text
560–610 px
```

Bottom glimpse:

```text
80–120 px
```

Total target:

```text
~820–860 px
```

---

# 193. Visual Density Rule

Desktop:

```text
medium-high density
```

Mobile:

```text
medium density
```

Never preserve desktop density on mobile.

---

# 194. Light Balance

Approximate visual brightness distribution:

```text
Background             65%
Dark cards             25%
Cyan accents            6%
Green accents           3%
Yellow/red status       1%
```

This prevents neon overload.

---

# 195. Border Brightness Hierarchy

```text
Ambient panel      12–18%
Interactive card   18–24%
Hover              35–45%
Selected            60–75%
Focus               85–100%
```

---

# 196. Typography Weight Hierarchy

```text
Hero name            700
Project title        700
Section title        650
Card title           600
Button               600
Body                 400
Metadata             500 mono
```

Avoid using 700 everywhere.

---

# 197. Responsive Card Radius

Desktop:

```text
16–20 px
```

Mobile:

```text
14–16 px
```

Buttons remain:

```text
10–12 px
```

---

# 198. Mobile Vertical Spacing

Use:

```text
Hero to architecture: 36 px
Architecture to project: 40 px
Project to skills: 48 px
Sections: 48–56 px
```

Avoid:

```text
> 72 px gaps
```

on mobile.

---

# 199. Desktop Architecture-to-Project Relationship

The project panel should align visually with the Projects node.

Recommended:

```text
Projects node x-position near right third of architecture stage
Selected Project panel starts immediately beside it
```

This makes the graph feel connected to the detail panel.

---

# 200. Selected Project Connector — Optional

Optional short visual connector:

```text
Projects node → thin glowing line → Selected Project panel
```

Opacity:

```text
0.28
```

Only desktop.

---

# 201. Tech Stack Highlight Rule

When selected project uses:

```text
Node.js
PostgreSQL
WebSocket
```

those tech nodes become:

```text
active
```

Other stack nodes remain visible at:

```text
55–65% opacity
```

---

# 202. Project Node Status Indicators

Project child nodes may show:

```text
Completed       green dot
In Development  yellow dot
Prototype       cyan dot
Archived        muted dot
```

Dot diameter:

```text
6 px
```

---

# 203. System Timeline Styling

Current role:

```text
green node
bright text
```

Past role:

```text
cyan node
secondary text
```

Oldest role:

```text
muted node
```

---

# 204. Mobile Project Detail

Project panel becomes:

```text
full-width card
```

Padding:

```text
18 px
```

Project image:

```text
aspect ratio 16:9
```

CTA buttons:

```text
stack under 420 px
```

---

# 205. Mobile About Layout

Stack:

```text
Image
Text
Tags
```

Image:

```text
width 100%
height 190 px
```

Use:

```text
object-position center 25%
```

if portrait.

---

# 206. Mobile Metrics

Grid:

```text
2 columns
```

At under 360 px:

```text
1 column
```

Each card:

```text
min-height 92 px
```

---

# 207. Mobile Timeline

Use:

```text
date above content
```

Do not use a fixed 82 px date column.

Simplified:

```text
2026 — Present
● Backend Developer
  Description
```

---

# 208. Desktop Content Max Widths

```text
Hero text             480 px
Architecture stage    660 px
Project detail        400 px
About text            560 px
Experience panel      460 px
Contact copy          520 px
```

---

# 209. Focus Ring Token

```css
--focus-ring:
  0 0 0 2px #061018,
  0 0 0 4px rgba(53, 231, 245, 0.95);
```

Use on all interactive elements.

---

# 210. Empty State Rules

If no demo:

```text
hide Live Demo button
```

If no GitHub:

```text
show View Details only
```

If no screenshot:

```text
show architecture illustration
```

Never show broken placeholders.

---

# 211. Error State

Example:

```text
Could not load project data.
Try again.
```

Card styling:

```text
red accent only on icon/border
```

Do not turn entire card bright red.

---

# 212. Offline/Static Mode

Website must still work if:

```text
GitHub API unavailable
analytics blocked
external API fails
```

Core portfolio content should be local/static.

---

# 213. Recommended React Component Dimensions

```text
Navbar            full width × 72
HeroIntro         460 × auto
ArchitectureGraph 620 × 560
ProjectPanel      380 × 560
TechStackRail     620 × 104
AboutCard         auto × 230
MetricsCard       auto × 230
TimelineCard      auto × 230
```

---

# 214. Component State Matrix

## Button

```text
default
hover
active
focus
disabled
loading
```

## Node

```text
default
hover
active
focus
related
dimmed
disabled
```

## Project Card

```text
default
hover
selected
focus
```

## Form Field

```text
default
hover
focus
filled
error
disabled
```

---

# 215. Disabled State

Buttons:

```text
opacity 0.42
cursor not-allowed
no glow
```

Nodes:

```text
opacity 0.35
no packet animation
```

---

# 216. Loading Button

When submitting:

```text
button width remains stable
```

Replace icon with:

```text
small 16 px spinner
```

Text:

```text
Sending...
```

---

# 217. Project Detail Scroll Behavior

Desktop:

```text
panel content should fit without internal scroll
```

Preferred.

If content becomes too long:

```text
show summary only
open case-study page for full details
```

Avoid nested scrolling.

---

# 218. Sticky Project Panel — Optional

On desktop project section:

```text
position sticky
top 96 px
```

Only use if project list is much taller.

Do not use sticky in hero three-column area.

---

# 219. Smooth Section Navigation

Navbar navigation duration:

```text
browser native smooth scroll
```

No custom 1-second cinematic scroll.

---

# 220. Link Styling

Inline links:

```text
cyan
```

Hover:

```text
underline
```

External links:

```text
ExternalLink icon 13 px
```

---

# 221. Social Icons

Icon button:

```text
40 × 40 px
```

Border:

```text
transparent default
```

Hover:

```text
cyan 20% background
cyan 24% border
```

---

# 222. Favicon / Brand Mark

Recommended:

```text
simple cube/network symbol
```

Size variants:

```text
16
32
180
512
```

Keep it recognizable at 16 px.

---

# 223. Logo Lockup

Desktop:

```text
Icon 30 px
Title 16 px / 650
Subtitle 9–10 px / mono uppercase
```

Mobile:

```text
hide subtitle
```

---

# 224. Section Header Pattern

Example:

```text
[small icon] Projects
             Deployed Systems
```

Main title:

```text
24–28 px
```

Small kicker:

```text
11 px mono
```

Spacing below:

```text
18–24 px
```

---

# 225. Optional Noise Texture

Use:

```text
opacity 1.5–2.5%
```

Never above:

```text
4%
```

Should not affect text legibility.

---

# 226. Optional Parallax

Only background:

```text
4–8 px movement
```

Do not parallax:

```text
text
buttons
project cards
```

---

# 227. Architecture Particle Density

Ambient background particles:

```text
20–35 total
```

Visible simultaneously:

```text
10–18
```

Opacity:

```text
0.10–0.24
```

---

# 228. Data Packet Colors

Use semantic mapping:

```text
Request      green
Processing   cyan
Database     blue
Response     cyan-green
```

Do not add many colors.

---

# 229. Tooltip Typography

Title:

```text
12 px / 600
```

Description:

```text
11 px / 400
```

Metadata:

```text
10 px mono
```

---

# 230. Desktop Mockup Alignment Target

At 1440 px:

```text
Hero left edge:       32 px
Architecture center:  around 700 px
Project panel right:  around 1408 px
```

All major panel tops should align within:

```text
± 8 px
```

---

# 231. Design QA Checklist

Before considering design complete, verify:

- navbar height is consistent;
- hero baseline alignment is correct;
- architecture central node is visually centered;
- project panel aligns with graph;
- glow is not excessive;
- no text below 11 px;
- no body text below 14 px;
- no mobile overflow;
- cards share common radius;
- border brightness follows hierarchy;
- selected project is immediately obvious;
- tech node highlighting matches active project;
- motion remains subtle;
- reduced-motion mode works;
- focus states are visible;
- project CTA buttons are clear;
- mobile architecture remains understandable.

---

# 232. Pixel-Level Acceptance Criteria

The implementation is visually accepted when:

```text
1. Desktop composition matches the reference structure within roughly 5–8% spacing variance.
2. Major panel positions match the intended three-column hierarchy.
3. The central architecture graph remains the primary visual signature.
4. The selected project panel is visually secondary only to the hero/graph.
5. Glow intensity is restrained and does not reduce readability.
6. Text hierarchy clearly separates headline, title, body, and metadata.
7. All interactive states exist and are visibly distinct.
8. Responsive behavior follows the defined breakpoint strategy.
9. Mobile uses a simplified architecture instead of a scaled-down desktop graph.
10. Animation timing uses the defined motion tokens.
11. Component padding and radii use the token system.
12. No component uses arbitrary spacing outside the spacing scale unless documented.
13. Buttons have consistent heights and hit areas.
14. Node sizes and graph spacing remain consistent across projects.
15. The final result looks like a living architecture map, not a generic dashboard.
```

---

# 233. Final UI Token Block

Use this as the initial implementation token set:

```css
:root {
  --bg-0: #040B11;
  --bg-1: #061018;
  --bg-2: #091821;
  --bg-3: #0C202A;

  --panel-1: rgba(8, 26, 36, 0.84);
  --panel-2: rgba(9, 32, 43, 0.72);

  --text-strong: #F4FBFF;
  --text-primary: #D7EEF7;
  --text-secondary: #93B3C2;
  --text-muted: #607E8D;

  --cyan-300: #63F3FA;
  --cyan-500: #35E7F5;
  --green-300: #7EF8C6;
  --green-500: #37F5AE;
  --blue-500: #338CFF;
  --yellow-500: #FFE26A;
  --red-500: #FF647C;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-pill: 999px;

  --motion-fast: 120ms;
  --motion-ui: 180ms;
  --motion-panel: 220ms;
  --motion-reveal: 420ms;

  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);

  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.28);
  --shadow-card-hover: 0 16px 48px rgba(0, 0, 0, 0.38);
}
```

---

# 234. Recommended Implementation Order for Pixel Accuracy

Implement in this sequence:

```text
1. Global tokens
2. Page background
3. Navbar
4. Hero typography
5. Three-column desktop grid
6. Architecture stage dimensions
7. Central developer node
8. Primary nodes
9. Edges
10. Project child nodes
11. Project panel
12. Tech stack rail
13. Lower cards
14. Responsive breakpoints
15. Motion
16. Accessibility states
17. Visual QA
```

Do not start with animations.

Get spacing and composition correct first.

---

# 235. Final Visual Rule

When there is a conflict between:

```text
visual spectacle
```

and:

```text
clarity
```

choose:

```text
clarity
```

When there is a conflict between:

```text
generic dashboard conventions
```

and:

```text
the living architecture identity
```

choose:

```text
the living architecture identity
```

As long as usability remains clear.

---

## End of Pixel-Level Specification
