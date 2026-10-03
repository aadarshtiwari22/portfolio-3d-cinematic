* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #050b14;
  --bg-2: #0d1727;
  --panel: rgba(12, 24, 39, 0.72);
  --panel-border: rgba(116, 196, 255, 0.25);
  --text: #edf8ff;
  --muted: #aabfd8;
  --cyan: #78e7ff;
  --blue: #67a3ff;
  --purple: #a77cff;
  --pink: #ff7fe5;
  --green: #73ffb6;
  --shadow: 0 0 30px rgba(120, 231, 255, 0.28);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(114, 146, 255, 0.18), transparent 25%),
    radial-gradient(circle at bottom right, rgba(66, 234, 190, 0.12), transparent 20%),
    var(--bg);
  color: var(--text);
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.section-space {
  padding: 110px 0;
}

.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.14;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: radial-gradient(circle at center, black, transparent 90%);
  z-index: 0;
}

.gradient-backdrop {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(105, 148, 255, 0.20), transparent 30%),
    radial-gradient(ellipse at 80% 30%, rgba(167, 124, 255, 0.16), transparent 28%),
    radial-gradient(ellipse at 50% 90%, rgba(114, 255, 182, 0.08), transparent 25%);
  z-index: -1;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 99;
  backdrop-filter: blur(16px);
  background: rgba(5, 11, 20, 0.38);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.82rem;
}

.brand-core {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  box-shadow: 0 0 20px rgba(120, 231, 255, 0.85);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  color: var(--muted);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.nav-links a {
  position: relative;
  transition: color 0.25s ease;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, var(--cyan), var(--purple));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--text);
}

.nav-links a:hover::after,
.nav-links a:focus-visible::after {
  transform: scaleX(1);
}

.nav-cta,
.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.nav-cta,
.primary-btn {
  padding: 0.9rem 1.5rem;
  background: linear-gradient(135deg, rgba(120, 231, 255, 0.18), rgba(167, 124, 255, 0.28));
  border: 1px solid rgba(120, 231, 255, 0.42);
  box-shadow: var(--shadow);
}

.secondary-btn {
  padding: 0.9rem 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: var(--text);
}

.nav-cta:hover,
.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-2px) scale(1.02);
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 36px;
  overflow: hidden;
}

#particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
  z-index: 0;
}

.hero-glow-one {
  width: 420px;
  height: 420px;
  background: rgba(82, 155, 255, 0.25);
  left: 4%;
  top: 12%;
}

.hero-glow-two {
  width: 500px;
  height: 500px;
  background: rgba(179, 93, 255, 0.16);
  right: 6%;
  bottom: 12%;
}

.scene {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 36px;
  min-height: 78vh;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.eyebrow,
.kicker,
.mini-label,
.project-tag {
  color: var(--cyan);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.hero h1 {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(3rem, 5vw, 6.5rem);
  line-height: 0.9;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.line {
  display: block;
  text-shadow: 0 0 30px rgba(120, 231, 255, 0.3);
}

.line-one {
  color: #dff6ff;
}

.line-two {
  background: linear-gradient(120deg, #f3fbff 10%, var(--cyan) 45%, #bb8dff 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  margin-top: 20px;
  color: var(--muted);
  font-size: clamp(0.8rem, 1vw, 1rem);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.lead {
  margin-top: 22px;
  max-width: 630px;
  color: rgba(237, 248, 255, 0.82);
  font-size: 1.08rem;
  line-height: 1.8;
}

.cta-row {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.lab-scene {
  position: relative;
  min-height: 560px;
  perspective: 1600px;
}

.holo-ring {
  position: absolute;
  border: 1px solid rgba(120, 231, 255, 0.35);
  border-radius: 50%;
  box-shadow: inset 0 0 30px rgba(120, 231, 255, 0.12), 0 0 30px rgba(120, 231, 255, 0.16);
}

.ring-one {
  width: 420px;
  height: 420px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotateX(72deg);
}

.ring-two {
  width: 500px;
  height: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotateY(70deg) rotateX(18deg);
}

.holo-grid {
  position: absolute;
  inset: 80px 30px 40px 30px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(rgba(135, 229, 255, 0.16), rgba(135, 229, 255, 0.06)),
    repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px,
      transparent 22px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px,
      transparent 22px
    );
  border-radius: 24px;
  transform: rotateX(14deg) rotateY(-16deg);
  box-shadow: inset 0 0 45px rgba(115, 184, 255, 0.12), 0 0 45px rgba(120, 231, 255, 0.12);
}

.console-panel {
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(72%, 520px);
  height: 340px;
  transform: translate(-50%, -50%) rotateX(12deg) rotateY(-12deg);
  border: 1px solid rgba(131, 205, 255, 0.36);
  background: rgba(8, 18, 30, 0.75);
  border-radius: 24px;
  box-shadow: 0 0 50px rgba(76, 157, 255, 0.18), inset 0 0 60px rgba(48, 104, 178, 0.14);
  overflow: hidden;
}

.panel-header {
  display: flex;
  gap: 8px;
  padding: 14px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.dot.red { background: #ff6b7d; }
.dot.yellow { background: #ffd166; }
.dot.green { background: #80f7c7; }

.panel-body {
  position: relative;
  width: 100%;
  height: calc(100% - 48px);
  background: linear-gradient(180deg, rgba(12, 35, 50, 0.72), rgba(4, 9, 17, 0.88));
}

.node {
  position: absolute;
  border: 1px solid rgba(120, 231, 255, 0.55);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(120, 231, 255, 0.25);
}

.node-a {
  width: 100px;
  height: 100px;
  left: 16%;
  top: 24%;
}

.node-b {
  width: 150px;
  height: 150px;
  right: 18%;
  top: 22%;
}

.node-c {
  width: 70px;
  height: 70px;
  left: 52%;
  top: 52%;
}

.scanline {
  position: absolute;
  inset: 0 auto 0 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent, rgba(120, 231, 255, 0.16), transparent);
  animation: scan 5s linear infinite;
}

.data-stream {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
  box-shadow: 0 0 18px rgba(120, 231, 255, 0.7);
}

.stream-one {
  width: 70%;
  left: 15%;
  top: 42%;
  transform: rotate(8deg);
}

.stream-two {
  width: 55%;
  left: 24%;
  top: 60%;
  transform: rotate(-9deg);
}

.floating-cube {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 1px solid rgba(123, 175, 255, 0.6);
  background: rgba(197, 230, 255, 0.05);
  box-shadow: inset 0 0 18px rgba(124, 175, 255, 0.2), 0 0 20px rgba(124, 175, 255, 0.16);
  transform: rotate(12deg) rotateY(20deg);
}

.cube-a {
  left: 10%;
  top: 20%;
  animation: floatY 6.5s ease-in-out infinite;
}

.cube-b {
  right: 6%;
  top: 28%;
  width: 54px;
  height: 54px;
  animation: floatY 4.8s ease-in-out infinite 1s;
}

.cube-c {
  right: 18%;
  bottom: 15%;
  width: 100px;
  height: 100px;
  animation: floatY 6s ease-in-out infinite 0.7s;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(12px);
}

.orb-one {
  width: 150px;
  height: 150px;
  background: rgba(147, 136, 255, 0.26);
  right: 12%;
  bottom: 0;
}

.orb-two {
  width: 120px;
  height: 120px;
  background: rgba(100, 221, 255, 0.22);
  left: 14%;
  bottom: 10%;
}

.glass-panel {
  background: linear-gradient(180deg, rgba(16, 24, 36, 0.72), rgba(9, 15, 26, 0.9));
  border: 1px solid rgba(141, 220, 255, 0.17);
  box-shadow: 0 20px 50px rgba(8, 12, 20, 0.44);
  backdrop-filter: blur(12px);
}

.section-header {
  margin-bottom: 34px;
}

.section-header h2 {
  max-width: 720px;
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.identity-grid,
.world-grid,
.skills-grid,
.project-grid {
  display: grid;
  gap: 24px;
}

.identity-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.identity-card {
  padding: 26px 24px;
  border-radius: 26px;
}

.identity-card h3 {
  margin-top: 10px;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  margin-bottom: 18px;
}

.identity-card ul {
  list-style: none;
  display: grid;
  gap: 12px;
  color: var(--muted);
}

.identity-card li {
  position: relative;
  padding-left: 18px;
}

.identity-card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 11px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  box-shadow: 0 0 18px rgba(120, 231, 255, 0.7);
}

.accent-panel {
  background: linear-gradient(150deg, rgba(32, 57, 70, 0.84), rgba(18, 24, 40, 0.9));
}

.accent-panel p {
  color: rgba(237, 248, 255, 0.82);
  line-height: 1.8;
}

.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip-group span {
  display: inline-flex;
  align-items: center;
  padding: 0.62rem 0.8rem;
  border: 1px solid rgba(120, 231, 255, 0.25);
  border-radius: 999px;
  background: rgba(120, 231, 255, 0.05);
  color: rgba(237, 248, 255, 0.85);
  font-size: 0.82rem;
}

.world-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.world-card {
  padding: 28px 22px;
  border-radius: 28px;
  min-height: 220px;
}

.card-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  border: 1px solid rgba(120, 231, 255, 0.24);
  background: rgba(120, 231, 255, 0.07);
  color: var(--cyan);
  font-weight: 800;
}

.world-card h3 {
  margin-top: 16px;
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.world-card p {
  color: var(--muted);
  line-height: 1.8;
}

.project-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-card {
  border-radius: 30px;
  overflow: hidden;
}

.project-visual {
  position: relative;
  height: 220px;
  background-size: cover;
  background-position: center;
}

.visual-one {
  background:
    radial-gradient(circle at 50% 30%, rgba(122, 220, 255, 0.45), transparent 20%),
    linear-gradient(135deg, rgba(10, 30, 54, 0.9), rgba(8, 12, 20, 1));
}

.visual-two {
  background:
    radial-gradient(circle at 50% 30%, rgba(167, 124, 255, 0.45), transparent 20%),
    linear-gradient(135deg, rgba(18, 35, 45, 0.9), rgba(11, 12, 25, 1));
}

.visual-three {
  background:
    radial-gradient(circle at 50% 30%, rgba(115, 255, 182, 0.38), transparent 22%),
    linear-gradient(135deg, rgba(18, 29, 45, 0.9), rgba(11, 14, 24, 1));
}

.project-copy {
  padding: 22px 20px 24px;
}

.project-tag {
  display: inline-block;
  margin-bottom: 16px;
}

.project-copy h3 {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.project-copy p {
  color: rgba(237, 248, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 18px;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-meta span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.48rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.skills-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.skill-block {
  border-radius: 26px;
  padding: 24px 22px;
}

.skill-block h3 {
  margin-bottom: 18px;
  font-size: 1.5rem;
}

.skill-line {
  margin-bottom: 18px;
}

.skill-line span {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--muted);
}

.bar {
  width: 100%;
  height: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.bar i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--cyan), var(--purple));
  box-shadow: 0 0 20px rgba(120, 231, 255, 0.45);
}

.timeline {
  position: relative;
  display: grid;
  gap: 22px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, rgba(120, 231, 255, 0.4), rgba(167, 124, 255, 0.4));
}

.timeline-item {
  position: relative;
  margin-left: 52px;
  border-radius: 24px;
  padding: 22px 22px 20px 22px;
}

.timeline-dot {
  position: absolute;
  left: -38px;
  top: 28px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  box-shadow: 0 0 0 8px rgba(120, 231, 255, 0.1), 0 0 24px rgba(120, 231, 255, 0.45);
}

.timeline-content span {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--cyan);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.timeline-content h3 {
  margin-bottom: 8px;
  font-size: 1.7rem;
}

.timeline-content p {
  color: rgba(237, 248, 255, 0.8);
  line-height: 1.8;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 34px 40px;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba(14, 28, 41, 0.82), rgba(18, 22, 34, 0.9));
}

.cta-inner h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  max-width: 680px;
}

.site-footer {
  padding: 28px 0 44px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 24px;
  color: rgba(237, 248, 255, 0.68);
}

.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes floatY {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(12deg) rotateY(20deg);
  }
  50% {
    transform: translate3d(0, -18px, 0) rotate(16deg) rotateY(18deg);
  }
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@media (max-width: 980px) {
  .scene,
  .identity-grid,
  .world-grid,
  .project-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
    padding-top: 40px;
    padding-bottom: 60px;
  }

  .scene {
    min-height: auto;
  }

  .lab-scene {
    min-height: 430px;
  }

  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 760px) {
  .nav {
    flex-wrap: wrap;
    gap: 12px;
    padding: 14px 0;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: space-between;
    gap: 14px;
    font-size: 0.66rem;
    letter-spacing: 0.08em;
  }

  .brand-name {
    font-size: 0.7rem;
  }

  .hero-copy {
    text-align: center;
  }

  .cta-row {
    justify-content: center;
  }

  .lead {
    margin-inline: auto;
  }

  .hero h1 {
    font-size: clamp(2.6rem, 12vw, 4.5rem);
  }

  .subtitle {
    letter-spacing: 0.12em;
    line-height: 1.7;
  }

  .lab-scene {
    min-height: 360px;
  }

  .console-panel {
    width: 82%;
    height: 250px;
  }

  .footer-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 440px) {
  .nav-cta {
    display: none;
  }

  .nav-links {
    font-size: 0.56rem;
  }

  .section-space {
    padding: 90px 0;
  }

  .cta-row {
    flex-direction: column;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
  }
}
