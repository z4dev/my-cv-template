export default function ATSFriendlyCV() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 font-sans text-black leading-normal">
      {/* Header - Simple text-based */}
      <div className="text-center mb-6 pb-4 border-b-2 border-black">
        <h1 className="text-2xl font-bold mb-2 uppercase tracking-wide">IZZEDEEN ALFARRA</h1>
        <p className="text-base font-semibold mb-3">Backend Web Developer | Node.js Developer</p>
        <div className="text-sm space-y-1">
          <p>Email: izzedeenalfarra123@gmail.com | Phone: +201018055912</p>
          <p>Location: Cairo, Egypt</p>
          <p>LinkedIn: https://www.linkedin.com/in/z4dev/ | GitHub: https://github.com/z4dev</p>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-black pb-1">PROFESSIONAL SUMMARY</h2>
        <p className="text-justify">
          Results-driven Backend Web Developer with 2+ years of hands-on experience in JavaScript and TypeScript
          development. Specialized in Node.js, Express.js, and Nest.js with proven track record of building scalable,
          high-performance backend systems and RESTful APIs. Demonstrated expertise in database design, API integration,
          and full-stack development. Strong problem-solving abilities with experience in agile development environments
          and collaborative team settings. Committed to writing clean, maintainable code and implementing best practices
          in software architecture.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-black pb-1">PROFESSIONAL EXPERIENCE</h2>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold">Backend Developer</h3>
            <span className="text-sm">June 2024 - November 2024</span>
          </div>
          <p className="font-semibold">DigiFly, Cairo, Egypt (Full-time, Hybrid)</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>Developed and maintained robust backend services using Node.js and Express.js</li>
            <li>Built RESTful APIs serving web and mobile applications with 99.9% uptime</li>
            <li>Implemented database optimization strategies resulting in 40% improved query performance</li>
            <li>Collaborated with cross-functional teams in agile development environment</li>
            <li>Participated in code reviews and maintained high code quality standards</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold">Backend Development Intern</h3>
            <span className="text-sm">May 2024 - June 2024</span>
          </div>
          <p className="font-semibold">Eagle Owl Technology, Cairo, Egypt</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>Completed intensive internship focused on PHP Laravel and Node.js development</li>
            <li>Developed real-world projects and robust APIs under senior developer mentorship</li>
            <li>Participated in full software development lifecycle from planning to deployment</li>
            <li>Enhanced skills in software architecture, design patterns, and best practices</li>
            <li>Utilized Git and GitHub for version control and collaborative development workflows</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold">Frontend Development Intern</h3>
            <span className="text-sm">May 2023 - August 2023</span>
          </div>
          <p className="font-semibold">Gaza Sky Geeks, Gaza, Palestine</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>Specialized in ReactJS, Next.js, and advanced JavaScript development</li>
            <li>Developed dynamic and responsive user interfaces following modern design principles</li>
            <li>Created efficient and scalable web applications with focus on performance optimization</li>
            <li>Gained expertise in modern frontend frameworks, state management, and component architecture</li>
            <li>Learned industry-standard version control practices using Git and GitHub</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-black pb-1">EDUCATION</h2>

        <div className="mb-3">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold">Bachelor of Software Engineering</h3>
            <span className="text-sm">July 2022 - 2027</span>
          </div>
          <p className="font-semibold">Al-Azhar University Gaza, Gaza, Palestine</p>
          <p>
            Currently pursuing degree with focus on SOLID principles, Agile methodologies, Algorithms and Data
            Structures, Software Architecture, and Database Systems
          </p>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold">Diploma in STEM (Information Technology)</h3>
            <span className="text-sm">2019 - 2022</span>
          </div>
          <p className="font-semibold">Mohammed Alnajjar School, Gaza, Palestine</p>
          <p>GPA: 4.0 (96%) - Specialized in web development including HTML5, CSS3, JavaScript, PHP, and SQL</p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-black pb-1">TECHNICAL SKILLS</h2>

        <div className="space-y-2">
          <p>
            <strong>Programming Languages:</strong> JavaScript, TypeScript, PHP, HTML5, CSS3
          </p>
          <p>
            <strong>Backend Frameworks:</strong> Node.js, Express.js, Nest.js, Laravel
          </p>
          <p>
            <strong>Frontend Technologies:</strong> React.js, Next.js, HTML5, CSS3, Responsive Design
          </p>
          <p>
            <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB
          </p>
          <p>
            <strong>ORM/ODM:</strong> TypeORM, Prisma, Mongoose, Eloquent
          </p>
          <p>
            <strong>Development Tools:</strong> Docker, Git, GitHub, VS Code, Postman
          </p>
          <p>
            <strong>Project Management:</strong> ClickUp, GitHub Projects, Agile Methodologies
          </p>
          <p>
            <strong>Other Skills:</strong> RESTful API Design, Database Design, Version Control, Code Review, Testing
          </p>
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-black pb-1">KEY PROJECTS</h2>

        <div className="mb-4">
          <h3 className="font-bold">Mega Top API</h3>
          <p className="text-sm mb-1">Backend API Development | https://megatop.com.eg/en</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Developed comprehensive backend API for large-scale e-commerce platform</li>
            <li>Implemented secure product management, user authentication, and order processing systems</li>
            <li>Optimized API performance for high-traffic e-commerce operations handling 1000+ concurrent users</li>
            <li>Integrated payment gateways and third-party services for seamless transaction processing</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">RoadApp SaaS</h3>
          <p className="text-sm mb-1">SaaS Application | Available on Google Play Store and App Store</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Built comprehensive SaaS application for road management and navigation services</li>
            <li>Developed scalable Node.js backend with real-time data processing capabilities</li>
            <li>Created robust API services supporting mobile applications on both Android and iOS platforms</li>
            <li>Implemented real-time location tracking and route optimization algorithms</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Node.js E-commerce API</h3>
          <p className="text-sm mb-1">March 2024 - Present | GitHub: github.com/z4dev/e-commerce-api</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Developed comprehensive e-commerce API using Express.js with microservices architecture</li>
            <li>Integrated multiple payment gateways with secure transaction processing and fraud detection</li>
            <li>Implemented JWT-based authentication, role-based authorization, and database optimization</li>
            <li>Optimized API endpoints for speed and scalability, achieving sub-200ms response times</li>
            <li>Built comprehensive testing suite with 90%+ code coverage</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Laravel CRUD Task Management System</h3>
          <p className="text-sm mb-1">April 2024 | GitHub: github.com/z4dev/intern01-laravel</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Built comprehensive task management system with complete CRUD operations</li>
            <li>Implemented secure user authentication, authorization, and task categorization features</li>
            <li>Added advanced search and filter functionality following MVC architecture principles</li>
            <li>Developed responsive interface with real-time updates for enhanced user experience</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Full Stack PHP E-commerce Website</h3>
          <p className="text-sm mb-1">February 2022 - May 2022 | GitHub: github.com/z4dev/phone_e_web_site</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Developed complete e-commerce solution for phone sales with custom PHP backend</li>
            <li>Built using PHP, JavaScript, HTML5, and CSS3 with responsive design principles</li>
            <li>Implemented secure user authentication, session management, and product catalog system</li>
            <li>Created seamless order processing, inventory management, and checkout system</li>
          </ul>
        </div>
      </section>

      {/* Additional Information */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-black pb-1">ADDITIONAL INFORMATION</h2>

        <div className="space-y-2">
          <p>
            <strong>Languages:</strong> Arabic (Native), English (B2 Level, TOEFL iBT Certified)
          </p>
          <p>
            <strong>Team Collaboration:</strong> 3+ years of experience in collaborative team development environments
          </p>
          <p>
            <strong>Availability:</strong> Available for full-time positions and open to relocation
          </p>
        </div>
      </section>

      {/* References */}
      <section>
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-black pb-1">REFERENCES</h2>

        <div className="space-y-3">
          <div>
            <p>
              <strong>Dr. Loay Qanan</strong>
            </p>
            <p>Full Stack Web Developer and University Instructor</p>
            <p>AWQAF Ministry of Gaza</p>
            <p>Email: engloayqannan@hotmail.com</p>
          </div>

          <div>
            <p>
              <strong>Eng. Mohammed Nabheen</strong>
            </p>
            <p>Co Mentor</p>
            <p>GSG TT9 - ReactJS Training</p>
            <p>Email: maanabahin2001@gmail.com</p>
          </div>

          <div>
            <p>
              <strong>Eng. Martin Ashraf</strong>
            </p>
            <p>Mid Level Backend Web Developer</p>
            <p>DigiFly</p>
            <p>Email: martinashraf99@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}
