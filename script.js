/* Reset & base */
:root{
  --bg: #f7fbf8;              /* soft off-white */
  --light-green: #bff0b8;     /* primary light green */
  --teal: #3fb6a8;            /* secondary */
  --navy: #0f2b3d;            /* accent / text */
  --muted: #6b7a82;
  --card: #ffffff;
  --shadow: rgba(16,43,61,0.08);
  --radius: 14px;
}

body {
  font-family: "Roboto", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  margin: 0;
  background: var(--bg);
  color: var(--navy);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height: 1.5;
}

/* Top bar for mobile */
.topbar {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(90deg, var(--light-green), var(--teal));
  align-items: center;
  padding: 0 16px;
  z-index: 1200;
  gap: 12px;
}
.topbar button { background: transparent; border: none; font-size: 24px; cursor: pointer; color: var(--navy); }
.topbar .brand { font-weight:700; font-size:18px; color: var(--navy); }

/* Sidebar navigation */
.sidebar {
  position: fixed;
  left: 24px;
  top: 40px;
  width: 220px;
  background: linear-gradient(180deg, rgba(191,240,184,0.9), rgba(63,182,168,0.9));
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0 8px 30px var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 18px;
  z-index: 1000;
}
.sidebar .logo { font-weight:700; font-size:20px; color: var(--navy); }
.sidebar .nav-links { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; }
.sidebar a { color: var(--navy); text-decoration:none; font-weight:500; padding:8px 10px; border-radius:8px; display:block; }
.sidebar a:hover { background: rgba(15,43,61,0.06); }

/* Overlay for mobile nav */
.overlay { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.35); z-index:900; }

/* Main content layout */
.main { margin-left: 290px; transition: margin 0.3s ease; padding: 40px; }

/* Hero */
.hero {
  background: linear-gradient(135deg, #e9f8ea 0%, #d9fbef 40%, #f7fbff 100%);
  border-radius: 18px;
  padding: 32px;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--shadow);
}
.hero-inner { display:flex; align-items:center; gap:32px; flex-wrap:wrap; }
.hero-text { flex:1 1 420px; }
.hero-text h1 { font-size: 48px; margin:0 0 12px; color: var(--navy); }
.hero-text h1 span { background: linear-gradient(90deg,var(--teal),var(--navy)); -webkit-background-clip:text; background-clip:text; color:transparent; }
.tagline { margin:0 0 18px; color:var(--muted); font-weight:500; }
.hero-cta .btn { margin-right:12px; }

/* Hero artwork */
.hero-art { flex:1 1 520px; display:flex; justify-content:center; align-items:center; }
.hero-art img { width:100%; max-width:760px; height:auto; border-radius:12px; box-shadow:0 10px 40px rgba(15,43,61,0.08); object-fit:cover; }

/* Sections */
.section { margin-top:36px; padding: 26px; background: transparent; }
.container { max-width:1200px; margin:0 auto; padding:0 18px; }
.container.narrow { max-width:760px; }

/* Headings */
h2 { font-size:28px; margin:6px 0 18px; color: var(--navy); }

/* Projects grid */
.projects-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:18px; }
.card { background: var(--card); border-radius: var(--radius); overflow:hidden; box-shadow: 0 8px 30px var(--shadow); display:flex; flex-direction:column; }
.card img { width:100%; height:180px; object-fit:cover; display:block; }
.card-body { padding:14px 16px; display:flex; flex-direction:column; gap:10px; }
.card h3 { margin:0; font-size:18px; }
.card p { margin:0; color:var(--muted); font-size:14px; }
.card-link { margin-top:auto; color:var(--teal); font-weight:600; text-decoration:none; }

/* Gallery */
.gallery-grid { display:grid; grid-template-columns: repeat(4, 1fr); gap:12px; margin-top:14px; }
.gallery-item img { width:100%; height:220px; object-fit:cover; border-radius:10px; box-shadow:0 6px 20px var(--shadow); }

/* Contact form */
.contact-form { margin-top:14px; display:flex; flex-direction:column; gap:12px; }
.form-grid { display:grid; grid-template-columns: 1fr 1fr; gap:12px; }
input, textarea { padding:12px 14px; border-radius:10px; border:1px solid rgba(15,43,61,0.08); font-family:inherit; font-size:14px; }
.form-actions { display:flex; gap:10px; margin-top:6px; }
.btn { background: linear-gradient(90deg,var(--light-green),var(--teal)); color:var(--navy); border:none; padding:10px 16px; border-radius:999px; cursor:pointer; font-weight:700; text-decoration:none; display:inline-block; }
.btn.ghost { background: transparent; border:1px solid rgba(15,43,61,0.06); color:var(--navy); }

/* Footer */
.site-footer { margin-top:28px; padding:18px 0; text-align:center; color:var(--muted); }

/* Responsive rules */
@media (max-width: 1100px) {
  .projects-grid { grid-template-columns: repeat(2,1fr); }
  .gallery-grid { grid-template-columns: repeat(3,1fr); }
  .main { margin-left: 260px; padding:24px; }
}

@media (max-width: 820px) {
  .sidebar { display:none; }
  .main { margin-left:0; padding:20px; }
  .hero-inner { flex-direction:column-reverse; }
  .hero-art img { max-width:100%; height:360px; }
  .projects-grid { grid-template-columns: 1fr; }
  .gallery-grid { grid-template-columns: repeat(2,1fr); }
  .topbar { display:flex; }
  .overlay.show { display:block; }
}

@media (max-width:480px) {
  h1 { font-size:28px; }
  .hero-art img { height:220px; }
  .gallery-item img { height:140px; }
  .form-grid { grid-template-columns: 1fr; }
  .topbar .brand { font-size:16px; }
}

