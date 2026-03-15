import React, { useEffect, useState } from 'https://esm.sh/react@18.3.1'
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client'
import htm from 'https://esm.sh/htm@3.1.1'

const html = htm.bind(React.createElement)

const navItems = [
  ['Signal', '#signal'],
  ['Builds', '#builds'],
  ['Field', '#field'],
  ['Proof', '#proof'],
  ['Contact', '#contact']
]

const tags = [
  'Product Security',
  'Cryptography',
  'CTF',
  'Recon Tooling',
  'Offensive Research',
  'Secure Engineering'
]

const metrics = [
  { value: '09+', label: 'shipped builds' },
  { value: '01', label: 'research paper' },
  { value: '9.3', label: 'CSE CGPA' },
  { value: 'Top 3', label: 'major hackathon finish' }
]

const signalCards = [
  {
    eyebrow: 'Operator',
    title: 'Offensive work that starts with signal, not noise.',
    body:
      'Recon, trust-boundary mapping, code pattern hunting, and challenge-driven exploitation. I care about turning weird edge cases into repeatable security workflow.'
  },
  {
    eyebrow: 'Builder',
    title: 'Tooling that compresses the boring parts.',
    body:
      'From Code Spyder-style reconnaissance to learning platforms and secure file flows, the goal is simple: make good security work faster and sharper.'
  },
  {
    eyebrow: 'Researcher',
    title: 'Cryptography with enough theory to be dangerous in practice.',
    body:
      'Competitive crypto work, ECC attack research, challenge design, and mentoring all feed the same loop: understand the primitive, then break the assumption.'
  }
]

const projects = [
  {
    title: 'Code Spyder',
    meta: 'Product security tooling',
    body:
      'Recon engine for technology fingerprinting, framework detection, and sensitive code-pattern discovery built to make pentesting less blind and more targeted.',
    tags: ['Recon', 'AppSec', 'Automation']
  },
  {
    title: 'CryptoLearn',
    meta: 'Learning platform',
    body:
      'A friendlier path into cryptography with conceptual walkthroughs, implementation examples, and practice-oriented explanations for beginners.',
    tags: ['Education', 'Python', 'Sage']
  },
  {
    title: 'ECC Attack Research',
    meta: 'Paper + implementation analysis',
    body:
      'Practical study of attacks against elliptic-curve implementations in SageMath, focused on implementation weakness rather than theory alone.',
    tags: ['Research', 'ECC', 'Crypto']
  },
  {
    title: 'Secure Upload Flow',
    meta: 'Applied cryptography',
    body:
      'Secure file upload and authentication flow using AES, RSA, and backend validation to reduce obvious key-handling and storage failures.',
    tags: ['Flask', 'AES', 'RSA']
  }
]

const fieldWork = [
  {
    label: 'Atlassian',
    timeframe: 'Product Security',
    title: 'Interned in product security and built tooling that improved how reconnaissance and stack intelligence got used.',
    points: [
      'Built Code Spyder to surface frameworks, tech stacks, and sensitive patterns faster.',
      'Focused on practical offensive workflows rather than slide-deck security.',
      'Worked close to real engineering surfaces instead of toy targets.'
    ]
  },
  {
    label: 'Team bi0s',
    timeframe: 'Cryptography Lead',
    title: 'Competitive CTF environment with mentoring, weekly challenge pressure, and deep cryptography problem solving.',
    points: [
      'Solved crypto-heavy challenges under time pressure.',
      'Mentored juniors moving into higher-order math and attack thinking.',
      'Used competition as a lab for fast pattern recognition.'
    ]
  },
  {
    label: 'Workshops + Talks',
    timeframe: 'Community Work',
    title: 'Ran cybersecurity workshops, awareness campaigns, and guest sessions that translated technical depth into something usable.',
    points: [
      'Spoke on cybersecurity and cryptography for students and public audiences.',
      'Helped make security feel less abstract and more operational.',
      'Used teaching as a forcing function for cleaner technical thinking.'
    ]
  }
]

const proofTiles = [
  {
    image: '/images/sections/achievements/pwc_hua1cbd6de8e0997a0bba522830c6d3a5b_168935_0x1500_resize_q75_box.jpeg',
    title: 'PwC Fiercest Competitor 2.0',
    body: 'Finished as 2nd runner-up in a cybersecurity-heavy hackathon field that scaled into the thousands.'
  },
  {
    image: '/images/sections/achievements/atlassian_huf6fb852d441197ba4179c95bd2716c55_101323_0x1500_resize_q75_box.jpeg',
    title: 'Atlassian Recognition',
    body: 'Strong internship outcome backed by visible product security contribution rather than checklist work.'
  },
  {
    image: '/images/sections/achievements/blackhat_2_hub810b4dbf311fbf530b8624c3ff52d8e_249063_0x1500_resize_q75_box.jpeg',
    title: 'Black Hat Asia',
    body: 'Exposure to real-world security products, ecosystems, and conversations beyond the classroom.'
  },
  {
    image: '/images/sections/achievements/isidtu_hufa08c5bcbb134fafd457381e2df68f24_230284_0x1500_resize_q75_box.jpeg',
    title: 'CTF Finals Circuit',
    body: 'Finalist-level play that reflects actual competitive depth rather than passive interest.'
  }
]

const credentials = [
  {
    label: 'Research',
    title: 'Attacks on Elliptic Curve Cryptography Implementations in SageMath',
    body: 'Published work focused on implementation-level attacks and practical cryptographic weakness.'
  },
  {
    label: 'Certification',
    title: 'Fortinet NSE 1 Network Security Associate',
    body: 'Foundational network-security credential with direct relevance to broader security operations.'
  },
  {
    label: 'Certification',
    title: 'Google Cloud Fundamentals: Core Infrastructure',
    body: 'Cloud baseline covering modern deployment primitives and infrastructure thinking.'
  },
  {
    label: 'Coursework',
    title: 'Cryptography and Information Security',
    body: 'Math-heavy and implementation-aware grounding that reinforced the competition and research work.'
  }
]

const contactCards = [
  ['Email', 'mailto:poimnbmpoff@gmail.com'],
  ['GitHub', 'https://github.com/victim1307'],
  ['LinkedIn', 'https://www.linkedin.com/in/manohar-reddy-pagilla/'],
  ['Notes', '/notes/'],
  ['Posts', '/posts/']
]

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const moveSpotlight = (event) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100
      document.documentElement.style.setProperty('--cursor-x', `${x}%`)
      document.documentElement.style.setProperty('--cursor-y', `${y}%`)
    }

    window.addEventListener('pointermove', moveSpotlight)
    return () => window.removeEventListener('pointermove', moveSpotlight)
  }, [])

  useEffect(() => {
    const revealNodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    )

    revealNodes.forEach((node, index) => {
      node.style.setProperty('--reveal-delay', `${Math.min(index * 60, 320)}ms`)
      observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  return html`
    <div className="app-shell">
      <div className="ambient ambient-a"></div>
      <div className="ambient ambient-b"></div>
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">PMR</span>
          <span>
            <strong>Pagilla Manohar Reddy</strong>
            <small>security systems, but louder</small>
          </span>
        </a>
        <nav className="site-nav">
          ${navItems.map(
            ([label, href]) => html`<a href=${href}>${label}</a>`
          )}
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick=${() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          ${theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Product Security // Cryptography // CTF</p>
            <h1>
              Break the system.
              <br />
              Keep the signal.
            </h1>
            <p className="hero-text">
              I work where offensive security, cryptography, and product reality
              collide. The output is research, tooling, fast recon, and security work
              that feels operational instead of decorative.
            </p>
            <div className="hero-actions">
              <a className="button button-solid" href="/files/Pagilla_Manohar_Reddy_Resume.pdf">
                Resume
              </a>
              <a className="button button-ghost" href="mailto:poimnbmpoff@gmail.com">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-stage" data-reveal>
            <div className="hero-terminal">
              <div className="terminal-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="terminal-body">
                <p><span>profile</span> product security engineer + cryptography competitor</p>
                <p><span>team</span> Team bi0s cryptography lead</p>
                <p><span>focus</span> recon tooling, appsec, ECC attack surfaces</p>
                <p><span>proof</span> research, workshops, CTF finals, hackathon podiums</p>
              </div>
            </div>

            <div className="metric-grid">
              ${metrics.map(
                (metric) => html`
                  <article className="metric-card">
                    <strong>${metric.value}</strong>
                    <span>${metric.label}</span>
                  </article>
                `
              )}
            </div>
          </div>
        </section>

        <section className="ticker" aria-hidden="true">
          <div className="ticker-track">
            ${[...tags, ...tags].map((tag) => html`<span>${tag}</span>`)}
          </div>
        </section>

        <section className="section" id="signal">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Signal</p>
            <h2>The portfolio is built like a threat model, not a brochure.</h2>
          </div>
          <div className="three-up">
            ${signalCards.map(
              (card) => html`
                <article className="glass-card" data-reveal>
                  <p className="micro-label">${card.eyebrow}</p>
                  <h3>${card.title}</h3>
                  <p>${card.body}</p>
                </article>
              `
            )}
          </div>
        </section>

        <section className="section" id="builds">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Builds</p>
            <h2>Projects shaped by offensive curiosity and practical security value.</h2>
          </div>
          <div className="project-grid">
            ${projects.map(
              (project) => html`
                <article className="project-card" data-reveal>
                  <p className="micro-label">${project.meta}</p>
                  <h3>${project.title}</h3>
                  <p>${project.body}</p>
                  <div className="pill-row">
                    ${project.tags.map((tag) => html`<span>${tag}</span>`)}
                  </div>
                </article>
              `
            )}
          </div>
        </section>

        <section className="section" id="field">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Field Work</p>
            <h2>Competition pressure, product exposure, and public-facing security work.</h2>
          </div>
          <div className="timeline">
            ${fieldWork.map(
              (item) => html`
                <article className="timeline-item" data-reveal>
                  <div className="timeline-rail"></div>
                  <div className="glass-card">
                    <p className="micro-label">${item.label} // ${item.timeframe}</p>
                    <h3>${item.title}</h3>
                    <ul>
                      ${item.points.map((point) => html`<li>${point}</li>`)}
                    </ul>
                  </div>
                </article>
              `
            )}
          </div>
        </section>

        <section className="section" id="proof">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Proof</p>
            <h2>Images, outcomes, and public moments that make the work harder to fake.</h2>
          </div>
          <div className="proof-grid">
            ${proofTiles.map(
              (tile) => html`
                <article className="proof-card" data-reveal>
                  <img src=${tile.image} alt=${tile.title} />
                  <div className="proof-copy">
                    <h3>${tile.title}</h3>
                    <p>${tile.body}</p>
                  </div>
                </article>
              `
            )}
          </div>
        </section>

        <section className="section split-section">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Credentials</p>
            <h2>Research depth backed by certifications and security-heavy coursework.</h2>
          </div>
          <div className="split-grid">
            ${credentials.map(
              (item) => html`
                <article className="glass-card" data-reveal>
                  <p className="micro-label">${item.label}</p>
                  <h3>${item.title}</h3>
                  <p>${item.body}</p>
                </article>
              `
            )}
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div className="cta-panel" data-reveal>
            <div>
              <p className="eyebrow">Contact</p>
              <h2>If the brief is hard, weird, or security-heavy, that is the point.</h2>
              <p>
                Reach out for product security, cryptography work, research-adjacent
                collaboration, or projects that need someone comfortable living in the
                sharp edges.
              </p>
            </div>
            <div className="contact-list">
              ${contactCards.map(
                ([label, href]) => html`<a href=${href}>${label}</a>`
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  `
}

createRoot(document.getElementById('root')).render(html`<${App} />`)
