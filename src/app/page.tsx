import Image from "next/image"
import Link from "next/link"
import { Navigation } from "../components/Navigation"

const images = {
  coast: "/assets/hero.png",
  portrait: "/assets/maya_portrait.png",
  office1: "/assets/office1.jpeg",
  office2: "/assets/office2.jpeg",
}

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={down ? "arrow arrow-down" : "arrow"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 12h13M14 7l5 5-5 5" />
    </svg>
  )
}

function BotanicalMark() {
  return (
    <svg
      aria-hidden="true"
      className="botanical"
      viewBox="0 0 140 88"
      fill="none"
    >
      <path d="M17 75C47 58 58 38 73 8M44 56C35 44 28 38 18 35M55 42c11-5 23-15 30-26M64 60c18-6 37-5 58 4M78 50c9-12 21-20 38-24" />
      <path d="M17 35c2 10 9 15 20 15-3-9-9-14-20-15ZM85 16c-10 1-16 7-17 18 10-2 16-8 17-18ZM116 26c-11 0-18 6-21 16 11 0 18-5 21-16ZM122 64c-8-7-16-8-25-3 8 7 16 8 25 3Z" />
    </svg>
  )
}

function TextLink({
  href,
  children,
  light = false,
}: {
  href: string
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <Link className={`text-link${light ? " text-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <Arrow />
    </Link>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

export default function Page() {
  return (
    <div className="site-shell">
      <Navigation />

      <main id="top">
        <section className="hero">
          <div className="hero-image-wrap relative">
            <Image
              className="hero-image"
              src={images.coast}
              alt="Sunlit coastal grasses above the Pacific"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="hero-content">
            <Eyebrow>Psychotherapy in Santa Monica + across California</Eyebrow>
            <h1>
              A calmer way <em>forward.</em>
            </h1>
            <p className="hero-copy">
              Warm, grounded therapy for thoughtful, high-achieving adults ready
              to feel more at ease in their lives.
            </p>
            <TextLink href="#contact">Begin a conversation</TextLink>
          </div>
          <Link
            className="scroll-cue"
            href="#intro"
            aria-label="Scroll to introduction"
          >
            <span>Explore</span>
            <Arrow down />
          </Link>
        </section>

        <section className="intro" id="intro">
          <div className="intro-aside">
            <Eyebrow>A space to exhale</Eyebrow>
            <BotanicalMark />
          </div>
          <div className="intro-main">
            <h2>
              You can look capable on the outside and still feel{" "}
              <em>overwhelmed within.</em>
            </h2>
            <div className="intro-copy">
              <p>
                Maybe your mind rarely stops. You hold yourself to impossible
                standards, brace for what could go wrong, or keep pushing long
                after you are depleted.
              </p>
              <p>
                Therapy can be a place to slow down, understand what is
                happening, and find a steadier relationship with yourself.
                Together, we create room for meaningful and lasting change.
              </p>
            </div>
          </div>
        </section>

        <section className="specialties" id="specialties">
          <div className="section-heading">
            <Eyebrow>Areas of focus</Eyebrow>
            <h2>Support for what feels heavy.</h2>
          </div>
          <div className="specialty-list">
            <article className="specialty-card">
              <span className="specialty-number">01</span>
              <h3>Anxiety &amp; Panic</h3>
              <p>
                For racing thoughts, persistent worry, panic, and the feeling
                that you can never fully switch off.
              </p>
              <TextLink href="#contact">Find support</TextLink>
            </article>
            <article className="specialty-card featured">
              <span className="specialty-number">02</span>
              <h3>Trauma &amp; EMDR</h3>
              <p>
                A grounded space to process experiences that continue to shape
                how you feel, respond, and move through the world.
              </p>
              <TextLink href="#contact">Find support</TextLink>
            </article>
            <article className="specialty-card">
              <span className="specialty-number">03</span>
              <h3>Burnout &amp; Perfectionism</h3>
              <p>
                For high-achievers who are tired of measuring their worth by
                productivity, performance, or getting everything right.
              </p>
              <TextLink href="#contact">Find support</TextLink>
            </article>
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="approach-image relative">
            <Image
              src={images.office2}
              alt="A calm reading chair beside a plant"
              fill
              style={{ objectFit: "cover" }}
            />
            <span className="image-caption z-10 relative">
              Room to pause, notice, and reconnect.
            </span>
          </div>
          <div className="approach-content">
            <Eyebrow>How I work</Eyebrow>
            <h2>Practical tools, deeper understanding, real connection.</h2>
            <p>
              My approach is warm, collaborative, and grounded. We will make
              sense of the patterns keeping you stuck while building skills that
              help you navigate daily life with more flexibility.
            </p>
            <p>
              Depending on your needs, our work may draw from CBT, EMDR,
              mindfulness, and body-oriented techniques.
            </p>
            <div className="method-tags" aria-label="Therapeutic methods">
              <span>CBT</span>
              <span>EMDR</span>
              <span>Mindfulness</span>
              <span>Body-oriented</span>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content">
            <Eyebrow>Meet Maya</Eyebrow>
            <h2>Therapy that makes space for your whole experience.</h2>
            <p className="about-lead">
              I&apos;m Dr. Maya Reynolds, a Licensed Clinical Psychologist in
              Santa Monica.
            </p>
            <p>
              I work with thoughtful, high-achieving adults navigating anxiety,
              panic, trauma, burnout, perfectionism, and overthinking. Our work
              is collaborative and paced with care—grounded in curiosity rather
              than judgment.
            </p>
            <p>
              I offer in-person therapy in my quiet Santa Monica office and
              secure telehealth across California.
            </p>
            <TextLink href="#contact">Work with Maya</TextLink>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame relative h-[680px]">
              <Image
                src={images.portrait}
                alt="Dr. Maya Reynolds seated in a light-filled office"
                fill
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
            </div>
            <div className="portrait-note z-10">
              <BotanicalMark />
              <span>Warmth · Clarity · Care</span>
            </div>
          </div>
        </section>

        <section className="office" id="office">
          <div className="office-heading">
            <div>
              <Eyebrow>New · Our office</Eyebrow>
              <h2>A quiet place to land.</h2>
            </div>
            <p>
              A private, light-filled space in Santa Monica designed for
              comfort, calm, and unhurried conversation.
            </p>
          </div>
          <div className="office-gallery">
            <figure className="office-photo office-photo-wide relative">
              <Image src={images.office1} alt="Warm office with sage walls" fill style={{ objectFit: "cover" }} />
            </figure>
            <figure className="office-photo office-photo-tall relative">
              <Image
                src={images.office2}
                alt="Comfortable chair in natural light"
                fill
                style={{ objectFit: "cover" }}
              />
            </figure>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner relative z-10">
            <Eyebrow>Let&apos;s begin</Eyebrow>
            <h2>
              You don&apos;t have to carry it all <em>alone.</em>
            </h2>
            <p>
              If you&apos;re considering therapy, a consultation is a place to
              start. We can talk about what brings you here and whether working
              together feels like the right fit.
            </p>
            <Link className="contact-button" href="#contact">
              Book an Appointment
              <Arrow />
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Link className="footer-brand" href="#top">
          <span>Maya Reynolds</span>
          <small>PsyD · Licensed Clinical Psychologist</small>
        </Link>
        <div className="footer-meta">
          <p>Santa Monica, California</p>
          <p>In-person therapy · Secure telehealth across California</p>
        </div>
        <div className="footer-links">
          <Link href="#about">About</Link>
          <Link href="#specialties">Specialties</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD
        </p>
      </footer>
    </div>
  )
}
