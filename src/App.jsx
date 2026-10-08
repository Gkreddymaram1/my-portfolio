import React, { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, ExternalLink, Github, GraduationCap, Menu, Terminal, X } from 'lucide-react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const githubProfileUrl = 'https://github.com/Gkreddymaram1';
const linkedInUrl = 'https://www.linkedin.com';

const projects = [
  {
    number: '01',
    name: 'Campus Connect',
    type: 'Full-stack web application',
    description: 'A campus platform connecting students with clubs, events, and communities.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=85',
    alt: 'A university library filled with books and natural light',
    className: 'project-image-lake',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: 'lake',
    href: githubProfileUrl,
  },
  {
    number: '02',
    name: 'StudySpace',
    type: 'Productivity web app',
    description: 'A responsive planner for organizing study sessions and tracking progress.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85',
    alt: 'A laptop and notebook on a desk in a student workspace',
    className: 'project-image-home',
    tags: ['React', 'Firebase', 'CSS'],
    color: 'home',
    href: githubProfileUrl,
  },
  // {
  //   number: '03',
  //   name: 'Budget Buddy',
  //   type: 'Data visualization · Personal project',
  //   description: 'A useful dashboard that turns spending data into a clearer monthly plan.',
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
  //   alt: 'A laptop displaying a colorful analytics dashboard',
  //   className: 'project-image-food',
  //   tags: ['Python', 'Flask', 'Chart.js'],
  //   color: 'food',
  //   href: 'https://github.com/yourusername/budget-buddy',
  // },
];

const capabilities = ['JavaScript', 'React', 'Node.js', 'Python Basics', 'HTML & CSS', 'Git & GitHub'];

const contactEmail = 'gopalkrishnareddymaram09@gmail.com';

function HomePage() {
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  return (
    <>
      <section className="hero page-gutter" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="hero-avatar-frame">
            <span className="hero-avatar-fallback" aria-hidden="true">GK</span>
            <img
              className={`hero-avatar${avatarLoaded ? ' is-loaded' : ''}`}
              src="src/images/profile-image.jpeg"
              alt="Gopal Krishna, a Full Stack developer"
              onLoad={() => setAvatarLoaded(true)}
              onError={() => setAvatarLoaded(false)}
            />
          </div>
          <h1 id="hero-title">Hi, I&apos;m Gopal Krishna<span>.</span></h1>
          <div className="eyebrow hero-eyebrow"><span className="status-dot" /> COMPUTER SCIENCE ENGINEER (AI) <span className="eyebrow-location">1 YEAR EXPERIENCE IN FULL STACK DEVELOPMENT</span></div>

          <div className="hero-bottom">
            <p>I&apos;m Gopal Krishna Reddy, a full stack developer with one year of hands-on experience building responsive web apps, APIs, and user-focused digital experiences.</p>
            {/* <Link className="round-link" to="/projects" aria-label="View projects"><ArrowDownRight size={20} /></Link> */}
          </div>
          <div className="hero-actions"><Link className="contact-button" to="/projects">Explore my work <ExternalLink size={16} /></Link><Link className="hero-secondary-link" to="/contact">Let&apos;s connect <ArrowUpRight size={15} /></Link></div>
        </div>
        <div className="developer-visual" aria-label="Animated code editor illustration">
          <div className="code-window">
            <div className="code-window-bar"><div className="window-controls"><i /><i /><i /></div><span><Code2 size={13} /> portfolio.jsx</span><span className="code-window-status">●&nbsp; running</span></div>
            <div className="code-lines" aria-hidden="true">
              <span><i>01</i><b>const</b> developer = {'{'}</span>
              <span><i>02</i>&nbsp; Name: <em>&apos;Gopal Krishna&apos;</em>,</span>
              <span><i>03</i>&nbsp; Role: <em>&apos;Junior developer&apos;</em>,</span>
              <span><i>04</i>&nbsp; Experience: <strong>&apos;1 year&apos;</strong>,</span>
              <span><i>05</i>&nbsp; Stack: [<em>&apos;React&apos;</em>, <em>&apos;Node&apos;</em>],</span>
              <span><i>06</i>&nbsp; Available: <strong>true</strong></span>
              <span><i>07</i>{'}'};</span>
              <span><i>08</i><b>export default</b> developer;</span>
            </div>
            <div className="code-window-footer"><Terminal size={13} /><span>ready to build something</span><span className="terminal-cursor" /></div>
          </div>
          <div className="developer-orbit orbit-one" /><div className="developer-orbit orbit-two" />
          {/* <span className="developer-caption">DESIGN / BUILD / ITERATE</span> */}
        </div>
      </section>
      <section className="quick-facts page-gutter" data-reveal aria-label="Portfolio highlights">
        <div><BriefcaseBusiness /><strong>1 year</strong><span>hands-on experience</span></div>
        <div><Code2 /><strong>02+</strong><span>projects shipped</span></div>
        <div><GraduationCap /><strong>CSE(AI)</strong><span>building every day</span></div>
      </section>
      <section className="home-projects page-gutter" data-reveal>
        <div className="home-section-heading"><div><span className="section-kicker">A selection of my work</span><h2>Things I&apos;ve built<span>.</span></h2></div><Link className="text-link" to="/projects">All projects <ArrowUpRight size={16} /></Link></div>
        <div className="home-project-grid">{projects.map((project) => <Link className={`home-project-tile tile-${project.color}`} to="/projects" key={project.number}><span>{project.number} / PROJECT</span><Code2 /><strong>{project.name}</strong><small>{project.tags.slice(0, 2).join(' · ')}</small></Link>)}</div>
      </section>
    </>
  );
}

function ProjectsPage() {
  const totalProjects = String(projects.length).padStart(2, '0');

  return (
    <section className="work-section page-gutter section-space" aria-labelledby="work-title">
      <div className="section-heading" data-reveal>
        <div><span className="section-kicker">01 / Selected work</span><h1 id="work-title">Projects<span className="heading-period">.</span></h1></div>
        <p>Applications and experiments built to solve problems, explore new tools, and keep improving the product experience.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className={`project project-${project.color}`} key={project.number} data-reveal>
            <a className={`project-visual ${project.className}`} href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} project link`}>
              <img src={project.image} alt={project.alt} loading="lazy" />
              <span className="project-view">View source <Github size={17} /></span>
              <span className="project-number">{project.number} / {totalProjects}</span>
            </a>
            <div className="project-info">
              <div className="project-title-row"><h2>{project.name}<span>.</span></h2><span className="project-type">{project.type}</span></div>
              <div className="project-detail-row"><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <a className="project-repo-link" href={project.href} target="_blank" rel="noreferrer">Source code <Github size={15} /><ExternalLink size={13} /></a>
            </div>
          </article>
        ))}
      </div>
      <a className="text-link archive-link" href={`mailto:${contactEmail}?subject=Let%E2%80%99s%20talk%20projects`}>Have a project idea? <ArrowUpRight size={17} /></a>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-inner page-gutter">
        <div className="about-topline" data-reveal><span className="section-kicker">02 / About me</span><span className="about-aside">Curious mind.<br />Practical builder.</span></div>
        <div className="about-content" data-reveal>
          <h1 id="about-title">Full stack <span>builder <br /> with momentum.</span></h1>
          <div className="about-story">
            <p className="about-lead">I&apos;m Gopal Krishna Reddy, a Computer Science engineer with a strong interest in building clean, practical web experiences and turning ideas into working products.</p>
            <p>I enjoy taking ownership of a feature from first sketch to final fix: understanding the problem, building a clear solution, and refining it with feedback. I&apos;m comfortable learning unfamiliar tools and working with others to ship reliable, thoughtful work.</p>
            <div className="education-note"><GraduationCap /><span>Education</span><strong>CSE(AI)</strong><small>MVR College of Engineering · 2025</small></div>
          </div>
        </div>
        <div className="experience-section" data-reveal><div className="experience-heading"><span className="section-kicker">Experience</span><span className="experience-total">01 year · hands-on development</span></div><div className="experience-item"><span className="experience-marker" /><div><span className="experience-dates">2025 — Present</span><h2>Full Stack Developer</h2><p>One year of practical experience building responsive interfaces, dynamic user flows, and production-ready web applications with a focus on usability and performance.</p></div><span className="experience-company">Independent projects</span></div></div>
        <div className="capabilities" data-reveal>
          <span className="capabilities-label">Tools & technologies</span>
          <div className="capabilities-list">{capabilities.map((capability, index) => <span key={capability}><i>0{index + 1}</i>{capability}</span>)}</div>
        </div>
        <Link className="text-link about-project-link" to="/projects">See what I&apos;ve been building <ArrowUpRight size={17} /></Link>
      </div>
    </section>
  );
}

function ContactPage() {
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  async function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus({ state: 'sending', message: 'Sending your message…' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const result = await response.json();

      if (!response.ok || String(result.success) !== 'true') {
        throw new Error(result.message || 'Your message could not be sent. Please try again.');
      }

      form.reset();
      setFormStatus({ state: 'success', message: 'Thanks! Your message has been sent.' });
    } catch {
      setFormStatus({ state: 'error', message: 'We couldn’t send your message. Please try again or email me directly.' });
    }
  }

  return (
    <section className="contact-section page-gutter" aria-labelledby="contact-title">
      <div className="contact-topline" data-reveal><span className="section-kicker">03 / Get in touch</span><span className="contact-mark" aria-hidden="true">Y.</span></div>
      <div className="contact-content" data-reveal>
        <div><span className="status-line"><span className="status-dot" /> Open to internships & collaborations</span><h1 id="contact-title">Let&apos;s make<br />something<span>.</span></h1></div>
        <div className="contact-action"><p>Open to internship opportunities, junior developer roles, and interesting collaborations.</p><a className="contact-button" href={`mailto:${contactEmail}?subject=Hello`}>Email me <ArrowUpRight size={19} /></a></div>
      </div>
      <div className="contact-socials" data-reveal>
        <span>Find me elsewhere</span>
        <a href={githubProfileUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
        <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
      </div>
      <div className="contact-form-block" data-reveal>
        <div className="contact-form-heading"><span className="section-kicker">Have an opportunity or a question?</span><h2>Send me a message.</h2><p>Fill in the form and your message will go straight to my inbox.</p></div>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="text" name="_honey" className="form-honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <div className="form-field-row">
            <label className="form-field">Your name<input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required maxLength={100} /></label>
            <label className="form-field">Email address<input name="email" type="email" autoComplete="email" placeholder="jane@example.com" required maxLength={254} /></label>
          </div>
          <label className="form-field">Subject<input name="subject" type="text" placeholder="Internship opportunity" required maxLength={150} /></label>
       <label className="form-field">Message<textarea name="message" placeholder="Tell me a little about what you have in mind…" rows={6} required maxLength={5000} /></label>
          <div className="form-submit-row"><button className="contact-button" type="submit" disabled={formStatus.state === 'sending'}>{formStatus.state === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight size={18} /></button><p className={`form-status is-${formStatus.state}`} role="status" aria-live="polite">{formStatus.message}</p></div>
        </form>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return <section className="not-found page-gutter"><span className="section-kicker">404 / Lost in the tabs</span><h1>This page doesn&apos;t exist<span>.</span></h1><Link className="text-link" to="/">Back home <ArrowUpRight size={17} /></Link></section>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Gopal, home" onClick={closeMenu}>
          <span className="wordmark-mark"><span>.</span></span>
          <span className="wordmark-name">Gopalkrishna Reddy<br /> Full stack developer</span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects <span>02</span></NavLink>
          <NavLink to="/contact" className="nav-contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></NavLink>
        </nav>
      </header>
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="site-footer page-gutter">
        <span>© {new Date().getFullYear()} GopalKrishna Reddy</span>
        <div className="footer-links"><a href={githubProfileUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a><Link to="/">Back home ↑</Link></div>
        <span className="footer-location">Hyderabad <span>·</span> Open to opportunities</span>
      </footer>
    </>
  );
}

export default App;
