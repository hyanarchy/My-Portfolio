/* =====================================================================
   EDIT ONLY THIS BLOCK. Everything on the page is built from DATA.
   - Add a project: copy one { ... } item in `projects` and change the text.
   - Set `placeholder: false` once a project is real.
   - Add a photo: put a link or file name in `photo`.
   ===================================================================== */
const DATA = {
  name: "Your Name",
  initials: "YN",
  email: "you@example.com",
  photo: "",                       // e.g. "me.jpg" (black and white looks best)
  available: "Open for clients",   // or "Fully booked until Dec"
  tagline: "Virtual assistant with a tech background.",
  intro: "3rd year BSIT student helping busy founders and small teams with tech support, admin work and, soon, social media.",
  socials: [
    { label: "linkedin", url: "https://linkedin.com/" },
    { label: "github", url: "https://github.com/" },
    { label: "facebook", url: "https://facebook.com/" }
  ],
  stats: [
    { value: "3rd yr", label: "BSIT student" },
    { value: "24h", label: "Reply time" },
    { value: "3", label: "Areas of support" }
  ],
  services: [
    { title: "Tech support VA", text: "Website updates, tool setup, spreadsheets and automations, basic troubleshooting.", status: "use" },
    { title: "General admin", text: "Email and calendar handling, data entry, research, document formatting.", status: "learn" },
    { title: "Social media support", text: "Post scheduling, simple graphics, caption drafts, basic reporting.", status: "learn" }
  ],
  skills: [
    { group: "Tech", items: [["HTML / CSS / JS", "use"], ["Python basics", "use"], ["Git & GitHub", "use"], ["Database basics (SQL)", "use"], ["Website editing (WordPress)", "learn"]] },
    { group: "Tools", items: [["Google Workspace", "use"], ["Microsoft Office", "use"], ["Notion", "use"], ["Canva", "learn"], ["Zapier / automation", "learn"]] },
    { group: "Admin & social", items: [["Email management", "learn"], ["Scheduling tools", "learn"], ["Content calendars", "learn"], ["Client communication", "learn"]] }
  ],
  projectsNote: "Early work from school and self-study. Newer projects and client work will replace the placeholders as I finish them.",
  projects: [
    { title: "Project name one", category: "Web", year: "2024", placeholder: true, stack: ["HTML", "CSS", "JavaScript"], summary: "One sentence on what this project does and who it is for.", details: "Add 2 to 3 sentences here: the problem, what you built, and what you learned.", link: "" },
    { title: "Project name two", category: "Database", year: "2024", placeholder: true, stack: ["Python", "SQLite"], summary: "A small system for tracking something, such as inventory or students.", details: "Explain how it works and one thing you would improve.", link: "" },
    { title: "Project name three", category: "Automation", year: "2025", placeholder: true, stack: ["Google Sheets", "Apps Script"], summary: "A sheet that saves time by doing a repeated task automatically.", details: "Describe the before and after, for example hours saved each week.", link: "" },
    { title: "Social media sample set", category: "Social", year: "2026", placeholder: true, stack: ["Canva", "Content calendar"], summary: "A week of sample posts for a small business.", details: "Share the brand, the posting plan and the graphics you made.", link: "" }
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
const SECTIONS = [["home", "Home"], ["services", "Services"], ["skills", "Skills"], ["projects", "Projects"], ["process", "Process"], ["contact", "Contact"]];

document.title = DATA.name + " · Virtual Assistant";
$("#brand").textContent = DATA.name; $("#name").textContent = DATA.name;
$("#tagline").textContent = DATA.tagline; $("#intro").textContent = DATA.intro;
$("#avail").textContent = DATA.available; $("#mail").textContent = DATA.email; $("#mail").href = "mailto:" + DATA.email;
$("#photo").innerHTML = DATA.photo ? `<img src="${esc(DATA.photo)}" alt="${esc(DATA.name)}">` : `<span>${esc(DATA.initials)}</span>`;
$("#socials").innerHTML = DATA.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join("");
$("#stats").innerHTML = DATA.stats.map(s => `<div><b>${esc(s.value)}</b><small>${esc(s.label)}</small></div>`).join("");
$("#serviceGrid").innerHTML = DATA.services.map(s => `<div class="card"><span class="tag ${s.status}">${s.status === "use" ? "Using" : "Learning"}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("");
$("#skillList").innerHTML = DATA.skills.map(g => `<div class="skillrow"><h3>${esc(g.group)}</h3><div>${g.items.map(i => `<span class="tag ${i[1]}">${esc(i[0])}</span>`).join("")}</div></div>`).join("");
$("#steps").innerHTML = DATA.process.map(p => `<div><b>${esc(p.title)}</b><span>${esc(p.text)}</span></div>`).join("");
$("#projSub").textContent = DATA.projectsNote;
$("#foot").textContent = "© " + new Date().getFullYear() + " " + DATA.name + ". Built by hand with HTML, CSS and JavaScript.";
$("#nav").innerHTML = SECTIONS.map(s => `<a href="#${s[0]}" data-s="${s[0]}">${s[1]}</a>`).join("");
$("#mobnav").innerHTML = SECTIONS.map(s => `<a href="#${s[0]}">${s[1]}</a>`).join("");
$("#fType").innerHTML = `<option>General question</option>` + DATA.services.map(s => `<option>${esc(s.title)}</option>`).join("");

/* projects with filter + expand */
const cats = ["All", ...new Set(DATA.projects.map(p => p.category))];
let cat = "All";
function renderProjects() {
  $("#chips").innerHTML = cats.map(c => `<button class="chip" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  const g = $("#projGrid"); g.innerHTML = "";
  DATA.projects.filter(p => cat === "All" || p.category === cat).forEach(p => {
    const c = el("div", "card");
    c.innerHTML = `<button class="proj" aria-expanded="false"><div class="thumb">${p.placeholder ? "image placeholder" : "preview"}</div>
      <div class="top"><span>${esc(p.category)} · ${esc(p.year)}</span><span>${p.placeholder ? "placeholder" : "live"}</span></div>
      <h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p></button>
      <div class="more"><p style="margin-bottom:10px">${esc(p.details)}</p>${p.stack.map(s => `<span class="tag">${esc(s)}</span>`).join("")}${p.link ? `<p><a href="${esc(p.link)}" target="_blank" rel="noopener" style="color:var(--acc)">View project ↗</a></p>` : ""}</div>`;
    const b = c.querySelector(".proj");
    b.onclick = () => { const o = c.classList.toggle("open"); b.setAttribute("aria-expanded", o); };
    g.appendChild(c);
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
const links = [...document.querySelectorAll("#nav a")];
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