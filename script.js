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
    projectsNote: "College and personal projects. Some are still in progress, and source code is linked where it's on GitHub.",
  projects: [
    { title: "TAPLY", category: "Capstone", year: "2026", status: "Ongoing", placeholder: false, role: "Backend programmer / QA",
      stack: ["IoT", "Telemetry", "Game"], image: "",
      summary: "An IoT-enabled aquarium game that uses smart faucet telemetry to encourage household water conservation.",
      details: "My capstone project. I work on the backend and on quality assurance.",
      repo: "", demo: "" },
    { title: "Mindweaver", category: "Game dev", year: "2026", status: "Ongoing", placeholder: false, role: "Project manager",
      stack: ["Jira", "Scrum"], image: "",
      summary: "A tabletop game that is moving toward a digital hybrid version.",
      details: "I lead the team using Jira and Scrum for sprint planning and tracking.",
      repo: "", demo: "" },
    { title: "DORM", category: "Web", year: "2026", status: "Not deployed", placeholder: false, role: "Frontend programmer",
      stack: ["PHP", "HTML", "CSS", "JavaScript", "VS Code", "GitHub"], image: "",
      summary: "A web project for my Event Driven Programming course.",
      details: "I built the frontend. The source code is on GitHub. Add one sentence here about what the system does.",
      repo: "", demo: "" },
    { title: "2K2J", category: "Web", year: "2026", status: "Not deployed", placeholder: false, role: "Frontend programmer",
      stack: ["PHP", "HTML", "CSS", "JavaScript", "VS Code", "GitHub"], image: "",
      summary: "A web project for my Web Development course.",
      details: "I built the frontend. The source code is on GitHub. Add one sentence here about what the site does.",
      repo: "", demo: "" },
    { title: "Link-In", category: "Film", year: "2026", status: "Completed", placeholder: false, role: "Director",
      stack: ["Directing", "Pre-production", "Post-production"], image: "",
      summary: "A film for the IT Film Fest.",
      details: "I directed the whole film and helped with every stage, from pre-production to post-production.",
      repo: "", demo: "" },
    { title: "Personal portfolio", category: "Personal", year: "2026", status: "Live", placeholder: false, role: "Designer and developer",
      stack: ["HTML", "CSS", "JavaScript", "Vercel", "GitHub"], image: "",
      summary: "This website. It's built by hand and updates from one data block.",
      details: "Responsive layout, light and dark themes, project filters and a live viewer count.",
      repo: "https://github.com/hyanarchy/My-Portfolio", demo: "https://adrianmcabaluna.vercel.app" }
  
  ],
    background: [
    { group: "Experience", items: [
      { title: "Technical Committee", text: "VITS", meta: "2026" },
      { title: "Creatives Officer", text: "VTHK", meta: "2026" } ] },
    { group: "Contests", items: [
      { title: "C# Programming · Participant", text: "PLV ITlympics, problem solving", meta: "2025" },
      { title: "Networking · Finalist", text: "PLV ITlympics, hardware and Cisco Packet Tracer", meta: "2026" } ] },
    { group: "Certificates", items: [
      { title: "Introduction to Digital Marketing", text: "TESDA", meta: "2026" },
      { title: "Web Development Fundamentals", text: "IBM", meta: "2026" },
      { title: "Introduction to Data Analysis with Python", text: "CodeSignal", meta: "2026" } ] },
    { group: "Seminars", items: [
      { title: "Unlocking Security: The Power of Identity & Access Management", text: "Seminars and Colloquia", meta: "2025" } ] }
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
document.title = DATA.name + " · Virtual Assistant";
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
$("#bgList").innerHTML = DATA.background.map(g => `<div class="skillrow"><h3>${esc(g.group)}</h3><div>${g.items.map(i => `<div class="entry"><div><b>${esc(i.title)}</b>${i.text ? `<span>${esc(i.text)}</span>` : ""}</div><small>${esc(i.meta)}</small></div>`).join("")}</div></div>`).join("");
$("#steps").innerHTML = DATA.process.map(p => `<div><b>${esc(p.title)}</b><span>${esc(p.text)}</span></div>`).join("");
$("#projSub").textContent = DATA.projectsNote;
$("#foot").textContent = "© " + new Date().getFullYear() + " " + DATA.name;
$("#nav").innerHTML = SECTIONS.map(s => `<a href="#${s[0]}" data-s="${s[0]}">${s[1]}</a>`).join("");
$("#mobnav").innerHTML = SECTIONS.map(s => `<a href="#${s[0]}" data-s="${s[0]}">${s[1]}</a>`).join("");$("#fType").innerHTML = `<option>General question</option>` + DATA.services.map(s => `<option>${esc(s.title)}</option>`).join("");

/* projects with filter + expand */
const cats = ["All", ...new Set(DATA.projects.map(p => p.category))];
let cat = "All";
function renderProjects() {
  $("#chips").innerHTML = cats.map(c => `<button class="chip" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  const g = $("#projGrid"); g.innerHTML = "";
  DATA.projects.filter(p => cat === "All" || p.category === cat).forEach(p => {
    const c = el("div", "card");
        c.innerHTML = `<button class="proj" aria-expanded="false"><div class="thumb">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy">` : "no preview yet"}</div>
      <div class="top"><span>${esc(p.category)} · ${esc(p.year)}</span><span>${esc(p.status || (p.demo ? "live" : "on GitHub"))}</span></div>
      <h3>${esc(p.title)}</h3>${p.role ? `<p class="role">${esc(p.role)}</p>` : ""}<p>${esc(p.summary)}</p></button>
      <div class="more"><p style="margin-bottom:10px">${esc(p.details)}</p>${p.stack.map(s => `<span class="tag">${esc(s)}</span>`).join("")}
      <p class="plinks">${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo ↗</a>` : ""}${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Source code ↗</a>` : ""}</p></div>`;
  });
}
$("#chips").onclick = e => { const c = e.target.closest("[data-c]"); if (c) { cat = c.dataset.c; renderProjects(); } };
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
const all = [...SECTIONS.map(s => ({ label: s[1], go: "#" + s[0] })), ...DATA.projects.map(p => ({ label: "Project: " + p.title, go: "#projects" }))];
function drawPal() {
  const q = palIn.value.toLowerCase(); items = all.filter(i => i.label.toLowerCase().includes(q)); sel = 0;
  palList.innerHTML = items.map((i, n) => `<li><button class="${n ? "" : "sel"}" data-n="${n}">${esc(i.label)}</button></li>`).join("");
}
const openPal = () => { pal.classList.add("open"); palIn.value = ""; drawPal(); palIn.focus(); };
const closePal = () => pal.classList.remove("open");
const go = n => { if (items[n]) { location.hash = items[n].go; closePal(); } };
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