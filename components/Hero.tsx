"use client";

const REGISTER_URL = "https://tally.so/r/WO5oMk";

export default function Hero() {
  return (
    <section
      className="relative content-px pt-12 pb-28 lg:flex lg:min-h-[600px] lg:items-center lg:gap-12 lg:py-16"
      aria-label="Hero"
    >
      <div className="mx-auto w-full max-w-7xl lg:flex lg:items-center lg:gap-12">
        {/* Left column: text + CTAs — reference typography (hero-headline, hero-subhead, btn) */}
        <div className="lg:flex-1 lg:max-w-xl">
          <h1 className="hero-headline">
            Save hours training new HVAC engineers
          </h1>
          <p className="hero-subhead">
            Real-time AI copilot that guides procedures, verifies each step, and
            captures audit-ready evidence.
          </p>
          <div className="hero-ctas">
            <a
              href={REGISTER_URL}
              className="btn btn-primary"
              aria-label="Register your interest"
            >
              Register your interest
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              See how it works
            </a>
          </div>
        </div>

        {/* Right column: hero UI (assessor card + phone mockup + workflow) */}
        <div
          id="hero-ui-container"
          className="relative mt-12 lg:mt-0 lg:flex-1 lg:min-w-0"
        >
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-tr from-[var(--colors-surface-dark-5)] to-transparent" />
          <div className="relative z-10 overflow-hidden rounded-xl border border-text-primary/10 bg-surface-card shadow-2xl">
            {/* Assessor card header */}
            <div className="flex items-center justify-between border-b border-text-primary/5 bg-surface-base/50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-gray-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-text-secondary">
                    ASSESSOR VIEW
                  </div>
                  <div className="text-sm font-medium">Queue: 3 Pending</div>
                </div>
              </div>
              <button
                type="button"
                className="rounded bg-text-primary px-3 py-1.5 text-xs font-medium text-white"
              >
                Filter
              </button>
            </div>
            {/* Assessor card list */}
            <div className="divide-y divide-text-primary/5">
              <div className="flex gap-4 bg-surface-base/30 p-4">
                <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded bg-gray-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url(/images/hero-card-thumb.png)",
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      Excavator Pre-Check
                    </span>
                    <span className="rounded bg-status-critical/10 px-2 py-0.5 text-xs font-bold text-status-critical">
                      CRITICAL
                    </span>
                  </div>
                  <p className="mb-2 truncate text-xs text-text-secondary">
                    Site B · Technician J. Doe · 10:42 AM
                  </p>
                  <button
                    type="button"
                    className="rounded border border-text-primary/20 px-2 py-1 text-xs font-medium text-text-primary hover:bg-gray-50"
                  >
                    Generate trainer note
                  </button>
                </div>
              </div>
              <div className="flex gap-4 p-4">
                <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded bg-gray-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url(/images/hero-video-thumb.png)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-white drop-shadow-md"
                    >
                      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                      <rect x="2" y="6" width="14" height="12" rx="2" />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      LOTO Verification
                    </span>
                    <span className="rounded bg-status-ok/10 px-2 py-0.5 text-xs font-bold text-status-ok">
                      OK
                    </span>
                  </div>
                  <p className="truncate text-xs text-text-secondary">
                    Maintenance Shed 4 · Technician A. Smith
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Phone mockup */}
          <div className="absolute -bottom-12 -right-4 z-20 aspect-[9/18] w-48 overflow-hidden rounded-[2rem] border-[4px] border-surface-dark bg-surface-dark shadow-2xl">
            <div className="relative h-full w-full bg-gray-800">
              <div
                className="absolute inset-0 bg-gray-700 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/hero-phone-bg.png)",
                  backgroundPosition: "80% 50%",
                }}
              />
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <div className="h-12 w-12 rounded-full border-4 border-white" />
              </div>
            </div>
          </div>
          {/* Workflow caption */}
          <div className="absolute -bottom-16 left-0 flex items-center gap-2 font-mono text-xs text-text-muted">
            <span>Local alert</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            <span>AI confirmed</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            <span className="text-text-primary">Human sign-off</span>
          </div>
        </div>
      </div>
    </section>
  );
}
