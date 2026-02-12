import Image from "next/image";
import Hero from "@/components/Hero";

const REGISTER_URL = "https://tally.so/r/WO5oMk";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section how-it-works" id="how-it-works">
        <div className="section-inner">
          <div className="how-it-works-layout">
            <div className="how-it-works-image">
              <Image
                src="/images/chest-mount-phone.png"
                alt="Smartphone mounted on chest harness for hands-free use"
                width={480}
                height={640}
                className="how-it-works-img"
              />
            </div>
            <div className="how-it-works-content">
              <h2 className="section-title">How it works</h2>
              <div className="steps">
                <article className="step-card">
                  <span className="step-num">1</span>
                  <h3 className="step-title">Wear and connect</h3>
                  <p className="step-desc">
                    The engineer wears a body-mounted camera and uses a mobile
                    device. No manual checklists.
                  </p>
                </article>
                <article className="step-card">
                  <span className="step-num">2</span>
                  <h3 className="step-title">Follow the procedure</h3>
                  <p className="step-desc">
                    Coefficient follows the approved procedure step-by-step, so
                    work stays on track without second visits.
                  </p>
                </article>
                <article className="step-card">
                  <span className="step-num">3</span>
                  <h3 className="step-title">Verify in real time</h3>
                  <p className="step-desc">
                    The system verifies correct execution and flags mistakes
                    instantly — no write-ups after the fact.
                  </p>
                </article>
                <article className="step-card">
                  <span className="step-num">4</span>
                  <h3 className="step-title">Evidence and reports</h3>
                  <p className="step-desc">
                    Evidence and reports are generated automatically after the
                    job. Time saved, every time.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section why-this-matters section-alt"
        id="why-this-matters"
      >
        <div className="section-inner">
          <h2 className="section-title">Why this matters</h2>
          <p className="section-tagline">
            Turning physical work into instant, auditable evidence — without
            slowing engineers down.
          </p>
          <ul className="numbered-list">
            <li>
              <span className="num">01</span>
              <p>
                Time is lost today to admin, supervision, rework, and training.
                Coefficient reduces that overhead at the source.
              </p>
            </li>
            <li>
              <span className="num">02</span>
              <p>
                Onboarding and retaining skilled engineers is difficult.
                Guided procedures and instant verification help scale junior
                engineers faster.
              </p>
            </li>
            <li>
              <span className="num">03</span>
              <p>
                Procedural errors and missed steps are costly. Real-time
                verification catches issues before they become rework or
                incidents.
              </p>
            </li>
            <li>
              <span className="num">04</span>
              <p>
                Proving work was done correctly is a burden. Coefficient
                captures audit-ready evidence automatically.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section positioning" id="positioning">
        <div className="section-inner">
          <h2 className="section-title">Built for real work</h2>
          <ul className="positioning-list">
            <li>Built for real environments, not simulations.</li>
            <li>Designed for enterprise procedures (MOPs / SOPs).</li>
            <li>Works during the job, not just before or after.</li>
          </ul>
        </div>
      </section>

      <section
        className="section coming-soon section-alt"
        id="coming-soon"
      >
        <div className="section-inner">
          <h2 className="section-title">
            <span className="badge">Coming soon</span> What&apos;s next
          </h2>
          <ul className="coming-soon-list">
            <li>Support for additional trades and procedures</li>
            <li>Deeper analytics across sites and teams</li>
            <li>
              Integration with existing maintenance and compliance systems
            </li>
          </ul>
        </div>
      </section>

      <section className="section trust-signals" id="trust">
        <div className="section-inner">
          <h2 className="section-title">Trust and traction</h2>
          <div className="trust-content">
            <p>
              The founders have built training and assessment software for
              safety-critical industries. An early prototype already verifies
              HVAC procedures from video. We are currently working with
              industry contacts to shape pilots.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-us" id="about">
        <div className="section-inner">
          <h2 className="section-title">Who we are</h2>
          <div className="about-content">
            <p>
              Coefficient is built by a team with deep experience in training,
              assessment, and software for high-stakes physical work.
            </p>
            <div className="founders-photo">
              <div className="founders-photo-circle">
                <Image
                  src="/images/founders.png"
                  alt="Louis and Jonty, co-founders of Coefficient"
                  width={240}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="founders-grid">
              <article className="founder-card">
                <h3>Louis</h3>
                <p className="founder-role">Product & co-founder</p>
                <p>
                  Louis has spent his career at the intersection of education,
                  product, and industrial systems — starting as a secondary
                  school teacher, then moving into product leadership and
                  founding teams. Most recently, he led product at a simulation
                  and training company building software used in safety-critical
                  environments across heavy industry and infrastructure.
                </p>
              </article>
              <article className="founder-card">
                <h3>Jonty</h3>
                <p className="founder-role">Engineering & co-founder</p>
                <p>
                  Jonty is a hands-on technical builder with experience
                  delivering complex systems for training, assessment, and
                  operational workflows. He has worked across engineering and
                  product roles, shipping real software used by professionals in
                  regulated, real-world contexts.
                </p>
              </article>
            </div>
            <p>
              <strong>Together, we&apos;ve:</strong>
            </p>
            <ul className="about-list">
              <li>
                Built training and assessment platforms used in classrooms and
                industrial settings
              </li>
              <li>Led and coordinated multi-disciplinary technical teams</li>
              <li>
                Shipped software where procedure adherence, evidence, and
                correctness matter
              </li>
            </ul>
            <p>
              We&apos;re now applying those lessons to a harder problem: helping
              engineers complete physical work faster, with fewer mistakes, and
              without the overhead of manual supervision or paperwork.
            </p>
            <p>
              Coefficient exists because we&apos;ve seen first-hand how much
              time is lost between &quot;doing the work&quot; and &quot;proving
              the work was done correctly&quot; — and we believe AI can close
              that gap.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-section section-alt" id="cta">
        <div className="section-inner cta-inner">
          <a
            href={REGISTER_URL}
            className="btn btn-primary btn-large"
            aria-label="Register your interest"
          >
            Register your interest
          </a>
          <p className="cta-supporting">
            Join early pilots and help shape the future of AI-assisted physical
            work.
          </p>
        </div>
      </section>
    </main>
  );
}
