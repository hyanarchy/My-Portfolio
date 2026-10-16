const DATA = {
  name: "Adrian",
  initials: "AC",
  email: "cabalunaadrianm@gmail.com",
  photo: "asset/asset/mypicture.jpg",                       // e.g. "me.jpg" (black and white looks best)
  available: "Open for clients",   // or "Fully booked until Dec"
  tagline: "Tech Builder | Freelancer",
  nicknames: ["Ahyan"],
  intro: "I build apps and websites, and I like leading projects from first idea to working product. Currently, my focus is on solving real-world problems with technology by working with businesses and teams work smarter.",
  socials: [
    { label: "linkedin", url: "https://www.linkedin.com/in/adrian-marie-cabaluna-a42555386/?isSelfProfile=true" },
    { label: "github", url: "https://github.com/hyanarchy" },
    { label: "onlinejobs.ph", url: "https://v2.onlinejobs.ph/jobseekers/info/5465586" }
  ],
  stats: [
    { value: "3rd yr", label: "BSIT student" },
    { value: "24h", label: "Reply time" },
    { value: "3", label: "Areas of support" }
  ],
  services: [
    { title: "Development", text: "Website updates, tool setup, spreadsheets and automations, basic troubleshooting.", status: "use" },
    { title: "Admin Support", text: "Email and calendar handling, data entry, research, document formatting.", status: "use" },
    { title: "Social media support", text: "Post scheduling, simple graphics, caption drafts, basic reporting.", status: "use" }
  ],
  skills: [
    { group: "Tech", items: [["HTML / CSS / JS", "use"], ["C#", "use"], ["MySql", "use"], ["Python basics", "use"], ["Cisco Packet Tracer basics", "use"], ["Git & GitHub", "use"], ["Bootstrap", "learn"], ["WordPress", "learn"]] },
    { group: "Tools", items: [["Google Workspace", "use"], ["Microsoft Office", "use"], ["Visual Studio & VS Code", "use"], ["Supabase", "use"], ["JIRA", "use"], ["Figma", "use"], ["Canva", "use"], ["Vercel", "use"], ["Notion", "learn"], ["Zapier / automation", "learn"]] },
    { group: "Client Support", items: [["Email management", "use"], ["Scheduling tools", "use"], ["Content calendars", "learn"], ["Client communication", "learn"]] }
  ],
  projectsNote: "Academic and personal builds across web, IoT and game development.",
  projects: [
    { title: "TAPLY", category: "Capstone", year: "2026", status: "Ongoing", placeholder: false, role: "Backend programmer",
      stack: ["IoT", "Telemetry", "Game"], image: "asset/asset/taply.png",
      summary: "An IoT-enabled aquarium game that uses smart faucet telemetry to encourage household water conservation.",
      details: "Develop backend components and conduct quality assurance for an ongoing capstone project.",
      repo: "", demo: "" },
    { title: "Mindweaver", category: "Game", year: "2026", status: "Ongoing", placeholder: false, role: "Project manager",
      stack: ["Jira", "Scrum"], image: "asset/asset/mindweaver.jpg",
      summary: "A tabletop game that is moving toward a digital hybrid version.",
      details: "Manage team coordination, sprint planning, task assignments, and progress tracking using Jira and Scrum.",
      repo: "", wiki: "https://mindweaver.fandom.com/wiki/MindWeaver_Wiki", demo: "" },
    { title: "Dorm ni Kuya", category: "Web", year: "2026", status: "Not deployed", placeholder: false, role: "Frontend programmer",
      stack: ["PHP", "HTML", "CSS", "JavaScript", "VS Code", "GitHub"], image: "asset/asset/dorm.png",
      summary: "A web-based dorm information system for accommodation inquiries focuses on Event Driven Programming",
      details: "Develop frontend interfaces and interactive features.",
      repo: "https://github.com/hyanarchy/dorm-ni-kuya", demo: "" },
    { title: "2K2J", category: "Web", year: "2026", status: "Not deployed", placeholder: false, role: "Frontend programmer",
      stack: ["PHP", "HTML", "CSS", "JavaScript", "VS Code", "GitHub"], image: "asset/asset/2k2j.jpg",
      summary: " A web-based application developed as part of a Web Development course, applying fundamental web technologies to build a functional and interactive system.",
      details: "Developed frontend interfaces and interactive features",
      repo: "https://github.com/hyanarchy/2k2j-system", demo: "" },
    { title: "Link-In", category: "Film", year: "2026", status: "Completed", placeholder: false, role: "Director",
      stack: ["Directing", "Production"], image: "asset/asset/linkin.png",
      summary: "A film for the IT Film Fest.",
      details: "I directed the whole film and helped with every stage, from pre-production to post-production.",
      note: "The full film is not publicly released, since it was made for and shown only at our school.",
      trailer: "https://www.facebook.com/reel/1892957314745360",
      repo: "", demo: "" },
    { title: "Portfolio", category: "Personal", year: "2026", status: "Live", placeholder: false, role: "Designer and developer",
      stack: ["HTML", "CSS", "JavaScript", "Supabase", "Vercel", "GitHub"], image: "asset/asset/portfolio.png",
      summary: "A responsive website showcasing technical projects, skills, and creative work.",
      details: "Responsive layout, light and dark themes, project filters and a live viewer count.",
      repo: "https://github.com/hyanarchy/My-Portfolio", demo: "https://adrianmcabaluna.vercel.app" }
  ],
  background: [
    { group: "Experience", items: [
      { title: "Technical Committee", text: "Valenzuela Information Technology Society", meta: "2026" },
      { title: "Creatives Officer", text: "Valenzuela Tigers Haud Ka'Bu", meta: "2026" } ] },
    { group: "Competition", items: [
      { title: "C# Programming · Participant", text: "PLV ITlympics, Problem solving", meta: "2025" },
      { title: "Networking · Finalist", text: "PLV ITlympics, Hardware and Cisco Packet Tracer", meta: "2026" } ] },
    { group: "Certificates", items: [
      { title: "Introduction to Digital Marketing", text: "TESDA, Digital Marketing lll", meta: "2026", file: "asset/asset/digital_marketing_cert.pdf" },
      { title: "Web Development Fundamentals", text: "IBM", meta: "2026", file: "asset/asset/IBM_cert.pdf" },
      { title: "Fundamentals of Artificial Intelligence", text: "TESDA, Amazon Web Services", meta: "2026", file: "asset/asset/ai_cert.pdf" },
      { title: "Introduction to Data Analysis with Python", text: "CodeSignal", meta: "2026", file: "asset/asset/data_analysis.pdf" } ] },
    { group: "Seminars", items: [
      { title: "Unlocking Security: The Power of Identity & Access Management", text: "Seminars and Colloquia", meta: "2025", file: "asset/asset/seminars-and-colloquia.jpg" } ] }
  ],
  process: [
    { title: "You send a message", text: "Tell me the task, the deadline and the tools you use." },
    { title: "I confirm the plan", text: "I reply within 24 hours with scope, timeline and rate." },
    { title: "I start with a small task", text: "A short trial so we both know it is a good fit." },
    { title: "Regular updates", text: "You get progress notes and a clear handoff of finished work." }
  ]
};
/* ===================== end of editable block ===================== */

const $ = s => document.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const SECTIONS = [["home", "Home"], ["services", "Services"], ["skills", "Skills"], ["projects", "Projects"], ["background", "Background"], ["process", "Process"], ["contact", "Contact"]];
document.title = DATA.name;
$("#brand").textContent = DATA.name; $("#name").textContent = DATA.name;
const aka = $("#aka");
if (DATA.nicknames && DATA.nicknames.length) {
  aka.innerHTML = "You can call me " + DATA.nicknames.map(n => `<button class="nick">${esc(n)}</button>`).join(" or ");
  aka.onclick = e => {
    const b = e.target.closest(".nick"); if (!b) return;
    const h = $("#name"), current = h.textContent;
    h.textContent = b.textContent;   // heading takes the name on the button
    b.textContent = current;         // button takes the name that was in the heading
  };
} else aka.remove();
$("#tagline").textContent = DATA.tagline; $("#intro").textContent = DATA.intro;
$("#avail").textContent = DATA.available; $("#mail").textContent = DATA.email; $("#mail").href = "mailto:" + DATA.email;
$("#photo").innerHTML = DATA.photo ? `<img src="${esc(DATA.photo)}" alt="${esc(DATA.name)}">` : `<span>${esc(DATA.initials)}</span>`;
$("#socials").innerHTML = DATA.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join("");
$("#stats").innerHTML = DATA.stats.map(s => `<div><b>${esc(s.value)}</b><small>${esc(s.label)}</small></div>`).join("");
$("#serviceGrid").innerHTML = DATA.services.map(s => `<div class="card"><span class="tag ${s.status}">${s.status === "use" ? "Achieved" : "In Progress"}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("");
$("#skillList").innerHTML = DATA.skills.map(g => `<div class="skillrow"><h3>${esc(g.group)}</h3><div>${g.items.map(i => `<span class="tag ${i[1]}">${esc(i[0])}</span>`).join("")}</div></div>`).join("");
$("#bgList").innerHTML = DATA.background.map(g => `<div class="skillrow"><h3>${esc(g.group)}</h3><div>${g.items.map(i => `<div class="entry"><div>${i.file ? `<button class="entry-link" data-file="${esc(i.file)}" data-title="${esc(i.title)}" aria-haspopup="dialog">${esc(i.title)} <i>↗</i></button>` : `<b>${esc(i.title)}</b>`}${i.text ? `<span>${esc(i.text)}</span>` : ""}</div><small>${esc(i.meta)}</small></div>`).join("")}</div></div>`).join("");
$("#steps").innerHTML = DATA.process.map(p => `<div><b>${esc(p.title)}</b><span>${esc(p.text)}</span></div>`).join("");
$("#projSub").textContent = DATA.projectsNote;
$("#foot").textContent = "© " + new Date().getFullYear() + " " + DATA.name;
$("#nav").innerHTML = SECTIONS.map(s => `<a href="#${s[0]}" data-s="${s[0]}">${s[1]}</a>`).join("");
$("#mobnav").innerHTML = SECTIONS.map(s => `<a href="#${s[0]}" data-s="${s[0]}">${s[1]}</a>`).join("");
$("#fType").innerHTML = `<option>General question</option>` + DATA.services.map(s => `<option>${esc(s.title)}</option>`).join("");

/* project popup */
const pm = el("div", "pmodal");
pm.innerHTML = `<div class="pbox" role="dialog" aria-modal="true" aria-label="Project details"><button class="pclose" aria-label="Close">×</button><div class="pbody"></div></div>`;
document.body.appendChild(pm);
const pbox = pm.querySelector(".pbox"), pbody = pm.querySelector(".pbody");
let lastCard = null;

function openProject(p, card) {
  const links = [["demo", "Live demo"], ["repo", "GitHub"], ["wiki", "Wiki"], ["trailer", "Trailer"]]
    .filter(l => p[l[0]]).map(l => `<a href="${esc(p[l[0]])}" target="_blank" rel="noopener">${l[1]} ↗</a>`).join("");
  pbody.innerHTML = `
    <div class="thumb">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot">` : "no preview yet"}</div>
    <div class="top"><span>${esc(p.category)} · ${esc(p.year)}</span><span>${esc(p.status || "")}</span></div>
    <h3>${esc(p.title)}</h3>${p.role ? `<p class="role">${esc(p.role)}</p>` : ""}
    <p class="psum">${esc(p.summary)}</p>
    <p>${esc(p.details)}</p>
    ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
    <div class="ptags">${p.stack.map(s => `<span class="tag">${esc(s)}</span>`).join("")}</div>
    ${links ? `<p class="plinks">${links}</p>` : ""}`;

  // start the popup at the clicked card's position, then let it grow to center
  const r = card.getBoundingClientRect();
  pbox.style.transition = "none";
  pbox.style.transform = `translate(${r.left + r.width / 2 - innerWidth / 2}px, ${r.top + r.height / 2 - innerHeight / 2}px) scale(.35)`;
  pbox.style.opacity = "0";
  pm.classList.add("open");
  pbox.scrollTop = 0;
  void pbox.offsetWidth;                 // force reflow so the start position sticks
  pbox.style.transition = pbox.style.transform = pbox.style.opacity = "";

  document.body.style.overflow = "hidden";
  lastCard = card;
  pm.querySelector(".pclose").focus();
}
function closeProject() {
  if (!pm.classList.contains("open")) return;
  pm.classList.remove("open");
  document.body.style.overflow = "";
  if (lastCard) { const b = lastCard.querySelector(".proj"); if (b) b.focus(); }
}
pm.onclick = e => { if (e.target === pm || e.target.closest(".pclose")) closeProject(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProject(); });

/* certificate popup */
const cm = el("div", "pmodal");
cm.innerHTML = `<div class="pbox cbox" role="dialog" aria-modal="true" aria-label="Certificate"><button class="pclose" aria-label="Close">×</button><p class="ctitle"></p><div class="cview"></div><p class="plinks"><a class="copen" target="_blank" rel="noopener">Open in new tab ↗</a></p></div>`;
document.body.appendChild(cm);
const cview = cm.querySelector(".cview"), ctitle = cm.querySelector(".ctitle"), copen = cm.querySelector(".copen");
let lastCert = null;

function openCert(file, title, trigger) {
  const isPdf = /\.pdf($|\?)/i.test(file);
  cview.innerHTML = isPdf
    ? `<iframe src="${esc(file)}" title="${esc(title)}"></iframe>`
    : `<img src="${esc(file)}" alt="${esc(title)}">`;
  ctitle.textContent = title;
  copen.href = file;
  cm.classList.add("open");
  document.body.style.overflow = "hidden";
  lastCert = trigger;
  cm.querySelector(".pclose").focus();
}
function closeCert() {
  if (!cm.classList.contains("open")) return;
  cm.classList.remove("open");
  document.body.style.overflow = "";
  cview.innerHTML = "";               // stops the PDF from loading in the background
  if (lastCert) lastCert.focus();
}
cm.onclick = e => { if (e.target === cm || e.target.closest(".pclose")) closeCert(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") closeCert(); });
$("#bgList").onclick = e => {
  const b = e.target.closest(".entry-link");
  if (b) openCert(b.dataset.file, b.dataset.title, b);
};

/* projects with filter + popup */
const cats = ["All", ...new Set(DATA.projects.map(p => p.category))];
let cat = "All";
let showAll = false;
function renderProjects() {
  $("#chips").innerHTML = cats.map(c => `<button class="chip" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  const g = $("#projGrid"); g.innerHTML = "";
  DATA.projects.filter(p => cat === "All" || p.category === cat).forEach(p => {
    const c = el("div", "card");
    c.dataset.title = p.title;
    c.innerHTML = `<button class="proj" aria-haspopup="dialog"><div class="thumb">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy">` : "no preview yet"}</div>
      <div class="top"><span>${esc(p.category)} · ${esc(p.year)}</span><span>${esc(p.status || (p.demo ? "live" : "on GitHub"))}</span></div>
      <h3>${esc(p.title)}</h3>${p.role ? `<p class="role">${esc(p.role)}</p>` : ""}</button>`;
    c.querySelector(".proj").onclick = () => openProject(p, c);
    g.appendChild(c);
  });
  const total = DATA.projects.filter(p => cat === "All" || p.category === cat).length;
  const sm = $("#seeMore");
  g.classList.toggle("collapsed", !showAll);
  sm.hidden = total <= 1;
  sm.textContent = showAll ? "See less" : `See more (${total - 1})`;
}
$("#chips").onclick = e => { const c = e.target.closest("[data-c]"); if (c) { cat = c.dataset.c; showAll = false; renderProjects(); } };
$("#seeMore").onclick = () => { showAll = !showAll; renderProjects(); if (!showAll) $("#projects").scrollIntoView(); };
renderProjects();

/* toast, copy, contact */
const toast = m => { const t = $("#toast"); t.textContent = m; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2200); };
$("#copy").onclick = () => { (navigator.clipboard ? navigator.clipboard.writeText(DATA.email) : Promise.reject()).then(() => toast("Email copied"), () => toast(DATA.email)); };
$("#form").onsubmit = e => {
  e.preventDefault();
  const subj = encodeURIComponent($("#fType").value + " · from " + $("#fName").value);
  const body = encodeURIComponent($("#fMsg").value + "\n\n" + $("#fName").value);
  location.href = `mailto:${DATA.email}?subject=${subj}&body=${body}`; toast("Opening your email app");
};

/* theme: auto -> light -> dark */
const modes = ["auto", "light", "dark"]; let mode = "auto";
try { mode = localStorage.getItem("theme") || "auto"; } catch (e) {}
function applyTheme() {
  mode === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", mode);
  $("#theme").textContent = "Theme: " + mode;
}
$("#theme").onclick = () => { mode = modes[(modes.indexOf(mode) + 1) % 3]; try { localStorage.setItem("theme", mode); } catch (e) {} applyTheme(); };
applyTheme();

/* active nav */
const links = [...document.querySelectorAll("#nav a, #mobnav a")];
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(l => l.classList.toggle("on", l.dataset.s === en.target.id)); }), { rootMargin: "-40% 0px -55% 0px" });
SECTIONS.forEach(s => io.observe(document.getElementById(s[0])));

/* command palette (Alt+K) */
const pal = $("#pal"), palIn = $("#palIn"), palList = $("#palList"); let items = [], sel = 0;
const all = [...SECTIONS.map(s => ({ label: s[1], go: "#" + s[0] })), ...DATA.projects.map(p => ({ label: "Project: " + p.title, go: "#projects", proj: p.title }))];
function drawPal() {
  const q = palIn.value.toLowerCase(); items = all.filter(i => i.label.toLowerCase().includes(q)); sel = 0;
  palList.innerHTML = items.map((i, n) => `<li><button class="${n ? "" : "sel"}" data-n="${n}">${esc(i.label)}</button></li>`).join("");
}
const openPal = () => { pal.classList.add("open"); palIn.value = ""; drawPal(); palIn.focus(); };
const closePal = () => pal.classList.remove("open");
const go = n => {
  const it = items[n]; if (!it) return;
  closePal();
  if (it.proj) {
    cat = "All"; showAll = true; renderProjects();
    const card = [...document.querySelectorAll("#projGrid .card")].find(c => c.dataset.title === it.proj);
    if (card) { card.scrollIntoView({ behavior: "smooth", block: "center" }); card.classList.add("flash"); setTimeout(() => card.classList.remove("flash"), 1800); }
    return;
  }
  const t = document.querySelector(it.go);
  if (t) { t.scrollIntoView({ behavior: "smooth" }); history.replaceState(null, "", it.go); }
};
$("#openPal").onclick = openPal; palIn.oninput = drawPal;
palList.onclick = e => { const b = e.target.closest("button"); if (b) go(+b.dataset.n); };
pal.onclick = e => { if (e.target === pal) closePal(); };
document.addEventListener("keydown", e => {
  if (e.altKey && e.key.toLowerCase() === "k") { e.preventDefault(); openPal(); }
  if (!pal.classList.contains("open")) return;
  if (e.key === "Escape") closePal();
  if (e.key === "Enter") go(sel);
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault(); sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
    [...palList.querySelectorAll("button")].forEach((b, n) => b.classList.toggle("sel", n === sel));
  }
});

/* hamburger menu (phones) */
const burger = $("#burger"), mobmenu = $("#mobmenu");
$("#mbrand").textContent = DATA.name;
$("#mobextra").innerHTML = `<button class="pill" id="mobTheme">${$("#theme").textContent}</button><button class="pill" id="mobJump">Jump to…</button><a class="mono" href="mailto:${esc(DATA.email)}">${esc(DATA.email)}</a>`;
const setMenu = open => { mobmenu.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
burger.onclick = () => setMenu(!mobmenu.classList.contains("open"));
mobmenu.addEventListener("click", e => { if (e.target.closest("#mobnav a")) setMenu(false); });
document.addEventListener("click", e => { if (!e.target.closest(".mobtop")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
window.matchMedia("(min-width:861px)").addEventListener("change", () => setMenu(false));
$("#mobTheme").onclick = () => { $("#theme").click(); $("#mobTheme").textContent = $("#theme").textContent; };
$("#mobJump").onclick = () => { setMenu(false); openPal(); };

/* live viewers: count only */
const LIVE = {
  url: "https://glnvbwlpehxbxgzbffat.supabase.co",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsbnZid2xwZWh4YnhnemJmZmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxMTIzNzksImV4cCI6MjEwNzY4ODM3OX0.6J5RGx5HsyaU9N_VXisZMu_N-X26BOfSn_Ia3zYVU1k"
};
(function () {
  const mx = $("#mobextra");
  if (mx) mx.insertAdjacentHTML("afterbegin", '<div class="live"></div>');
  const boxes = document.querySelectorAll(".live");
  if (!window.supabase || LIVE.url.startsWith("PASTE")) { boxes.forEach(b => b.remove()); return; }
  const sb = window.supabase.createClient(LIVE.url, LIVE.key);
  const me = Math.random().toString(36).slice(2, 10);
  const ch = sb.channel("portfolio-live", { config: { presence: { key: me } } });
  const draw = () => {
    const n = Math.max(1, Object.keys(ch.presenceState()).length);
    boxes.forEach(b => { b.innerHTML = `<i class="dot"></i><span><b>${n}</b> ${n === 1 ? "person" : "people"} viewing now</span>`; });
  };
  ch.on("presence", { event: "sync" }, draw).subscribe(async s => { if (s === "SUBSCRIBED") await ch.track({ id: me }); });
})();