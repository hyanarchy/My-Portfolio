/* ==========================================================================
   Portfolio – script.js
   --------------------------------------------------------------------------
   Everything on the page is rendered from the DATA object below, so most
   updates (new project, new certificate, new skill) only need an edit there.

   File layout
     1. DATA              – all editable content
     2. Helpers           – $, el, esc, SECTIONS
     3. Static content    – fills the hero, services, skills, background, etc.
     4. Project popup     – details modal with the image carousel
     5. Certificate popup – PDF / image viewer
     6. Projects grid     – category filter, "See more", cards
     7. Contact form      – builds a mailto: link
     8. Theme toggle      – auto / light / dark
     9. Active nav        – highlights the section in view
    10. Jump menu         – Alt+K command palette
    11. Mobile menu       – hamburger
    12. Live viewers      – Supabase presence counter
    13. Starfield         – animated neon stars on the canvas background
    14. Guided tour       – small arrow tips for the main buttons
   ========================================================================== */


/* ==========================================================================
   1. DATA – edit this block to update the site
   ========================================================================== */
const DATA = {
  /* --- Basic info --- */
  name: "Adrian",
  initials: "AC",                       // shown if no photo is set
  email: "cabalunaadrianm@gmail.com",
  photo: "asset/asset/mypicture.jpg",
  available: "Open for clients",        // status text in the sidebar
  tagline: "IT | Freelancer",
  nicknames: ["Ahyan"],                 // clicking a nickname swaps it with my name
  intro: "I’m a freelancer with a background in IT. I’m currently focused on social media management, and administrative support to help businesses stay organized and maintain their online presence.",

  /* --- Social links (shown under the hero) --- */
  socials: [
    { label: "instagram", url: "https://www.instagram.com/ahyanaheim?srtk=YWJjd2xieXoweHYx" },
    { label: "linkedin", url: "https://www.linkedin.com/in/adrian-marie-cabaluna-a42555386/?isSelfProfile=true" },
    { label: "onlinejobs.ph", url: "https://v2.onlinejobs.ph/jobseekers/info/5465586" }
  ],

  /* --- Quick stats bar under the hero --- */
  stats: [
    { value: "3rd yr", label: "BSIT student" },
    { value: "24h", label: "Reply time" },
    { value: "3", label: "Areas of support" }
  ],

  /* --- Services ---
     status: "use" shows an "Achieved" tag, anything else shows "In Progress" */
  services: [
    { title: "Development", text: "Website/App updates, Project Management, Tool Setup, Spreadsheets, QA testing, Troubleshooting...", status: "use" },
    { title: "Admin Support", text: "Email Management, Inbox Organization, calendar handling, data entry, research, document formatting...", status: "use" },
    { title: "Social media support", text: "Content Planning, Social Media Management, Graphics, Caption Writing, Post Scheduling, Content Coordination...", status: "use" }
  ],

  /* --- Skills ---
     Each item is [name, level]. "use" = ready for client work,
     "learn" = still in progress. */
  skills: [
    { group: "Tech Stack", items: [["HTML & CSS", "use"], ["JavaScript", "use"], ["C#", "use"], ["MySql", "use"], ["Python basics", "use"], ["Cisco Packet Tracer", "use"], ["Git & GitHub", "use"], ["Bootstrap", "learn"], ["WordPress", "learn"]] },
    { group: "Tools", items: [["Google Workspace", "use"], ["Microsoft Office", "use"], ["Visual Studio & VS Code", "use"], ["Supabase", "use"], ["JIRA", "use"], ["Trello", "use"], ["Figma", "use"], ["Canva", "use"], ["Capcut", "use"], ["Vercel", "use"], ["Buffer", "learn"], ["Notion", "learn"], ["Zapier / automation", "learn"]] },
    { group: "Client Support", items: [["Email management", "use"], ["Schedule management", "use"], ["Inquiry Handling", "use"], ["Promotional Graphics", "use"], ["Online Community Support", "use"], ["Content calendars", "use"], ["Time Zone Coordination", "use"], ["Client communication", "use"]] }
  ],
  /* --- Projects ---
     Fields:
       title / category / year / status / role / stack[] / summary / details
       summary    – one sentence: what the project is
       details    – a list of short points: what I did, with which tools (a plain string also works)
       image      – card thumbnail (and the only slide if "images" is missing)
       images[]   – optional list of images for the popup carousel
       featured   – true = appears under the ★ "Main projects" tab
       note       – optional highlighted note inside the popup
       Links shown in the popup when filled in:
         demo, repo, wiki, trailer, X, Canva, Facebook, Medium */
  projectsNote: "Client-based and personal builds across Development, Media Creation and Management.",
  projects: [
    { title: "TAPLY", category: "Development", year: "2026", status: "Ongoing", role: "Backend programmer",
      stack: ["IoT", "Telemetry", "Game"], image: "asset/asset/taply.png",
      summary: "An aquarium game connected to smart faucets: a household's water usage becomes part of the gameplay, to encourage saving water.",
      details: [
        "Capstone project built by a team; I am the backend programmer.",
        "I build the server-side parts that receive and handle the usage data sent by the smart faucets.",
        "I also do quality assurance: testing features and checking that fixes work before the team moves on."
      ],
      repo: "", demo: "" },
    { title: "Dorm ni Kuya", category: "Development", year: "2026", status: "Not deployed", role: "Frontend programmer",
      stack: ["PHP", "HTML", "CSS", "JavaScript"], image: "asset/asset/dorm.png",
      summary: "A web-based dorm information system where visitors can learn about the dorm and send accommodation inquiries.",
      details: [
        "I was the frontend programmer: I built the pages and the interface visitors use.",
        "Made with PHP, HTML, CSS and JavaScript for a course on event-driven programming, so the pages react to user actions like clicks and form submissions.",
        "The code is on GitHub; it has not been deployed online."
      ],
      repo: "https://github.com/hyanarchy/dorm-ni-kuya", demo: "" },
    { title: "2K2J", featured: true, category: "Development", year: "2026", status: "Not deployed", role: "Frontend programmer",
      stack: ["PHP", "HTML", "CSS", "JavaScript"], image: "asset/asset/2k2j.jpg",
      summary: "A web-based system built for a Web Development course.",
      details: [
        "I was the frontend programmer: I built the pages and the interactive parts users see.",
        "Made with PHP, HTML, CSS and JavaScript, working as a team and sharing the code through GitHub.",
        "It has not been deployed online; the full code is on GitHub."
      ],
      repo: "https://github.com/hyanarchy/2k2j-system", demo: "" },
    { title: "VTHK", featured: true, category: "Media Creation", year: "2026", status: "Ongoing", role: "Head Creatives Officer",
      stack: ["Graphic Design", "Social Media Management", "Community Management"],
      image: "asset/asset/INTERSECTION1.jpg",
      images: ["asset/asset/INTERSECTION1.jpg", "asset/asset/INTERSECTION2.jpg", "asset/asset/INTERSECTION_BANNERS.jpg",
        "asset/asset/BOOTH POSTER.jpg", "asset/asset/EVENT1.jpg",
        "asset/asset/WELCOME BACK.jpg", "asset/asset/GREETINGS1.jpg", "asset/asset/GREETINGS2.jpg",
        "asset/asset/RECOGNITION.jpg", "asset/asset/GRADUATION.jpg"
      ],
      summary: "The official social media graphics of the Valenzuela Tigers Haud Ka'Bu (VTHK) organization, published on its Facebook page.",
      details: [
        "As Head Creatives Officer, I lead the creative work: planning the posts and designing the graphics.",
        "I design in Canva: event posters and banners, a booth poster, welcome-back posts, greetings, recognition posts and graduation posts (see the gallery).",
        "I publish on the organization's Facebook page and handle its community management."
      ],
      Facebook: "https://www.facebook.com/PLVVTHK", Canva: "https://www.canva.com/design/DAHZR1lHDLI/UJ_PvLLrQIWEJ6SNtEOt3A/edit" },
    { title: "Link-In", category: "Media Creation", year: "2026", status: "Completed", role: "Director",
      stack: ["Directing", "Production", "Management"], image: "asset/asset/linkin.png",
      summary: "A film made for the IT Film Fest at our school.",
      details: [
        "I was the director and led the whole film from pre-production to post-production.",
        "That meant planning and preparing the shoot, directing the production, and overseeing the editing and finishing of the film.",
      ],
      note: "The full film is not publicly released, since it was made for and shown only at our school.",
      trailer: "https://www.facebook.com/reel/1892957314745360",
      repo: "", demo: "" },
    { title: "Rebels", category: "Media Creation", year: "2022", status: "Completed", role: "Content Creator",
      stack: ["Content Creation", "Graphic Design"], image: "asset/asset/rebels.jpg",
      summary: "A digital art NFT collection by Night Labs with dynamic NFTs, designed as a form of digital identity and self-expression.",
      details: [
        "I was a content creator for the project's online presence.",
        "I posted and engaged with the community on X and Discord."
      ],
      X: "https://x.com/rebelsbynight",
      repo: "", demo: "" },
    { title: "Lost Eden", category: "Media Creation", year: "2022", status: "Completed", role: "Content Creator",
      stack: ["Content Creation", "Graphic Design"],
      image: "asset/asset/losteden1.jpg",
      images: ["asset/asset/losteden1.jpg", "asset/asset/losteden2.jpg"],
      summary: "A Web3 gaming and esports project with the Lost Eden Origins NFT collection, where holder benefits connect to its gaming ecosystem.",
      details: [
        "I made content and graphics that presented the collectibles, the gaming identity and the community initiatives.",
        "I posted and engaged with the community on X and Discord."
      ],
      repo: "", demo: "" },
    { title: "Lonely Pop", category: "Media Creation", year: "2022", status: "Completed", role: "Content Creator",
      stack: ["Content Creation", "Graphic Design"],
      image: "asset/asset/lonelypop1.jpg",
      images: ["asset/asset/lonelypop1.jpg", "asset/asset/lonelypop2.jpg"],
      summary: "An art-centered NFT collection founded by Noinah and 0xStudio, inspired by personal experiences with loneliness and mental health.",
      details: [
        "I made content and graphics that communicated the artistic vision, the community values and the mental health message.",
        "I posted and engaged with the community on X and Discord."
      ],
      X: "https://x.com/LonelyPopNFT",
      repo: "", demo: "" },
    { title: "Shamanz", category: "Media Creation", year: "2022", status: "Completed", role: "Content Creator",
      stack: ["Content Creation", "Graphic Design"], image: "asset/asset/shamanz.jpg",
      summary: "An NFT project inspired by shamanic imagery and mystical themes, bringing digital collectibles and community participation together.",
      details: [
        "I made social media content that showcased the digital artwork.",
        "I posted and engaged with the community on X and Discord."
      ],
      Medium: "https://medium.com/@shamanzs",
      repo: "", demo: "" },
    { title: "Mindweaver", featured: true, category: "Management", year: "2026", status: "Ongoing", role: "Project manager",
      stack: ["Jira", "Scrum", "Discord"], image: "asset/asset/mindweaver.jpg",
      summary: "A tabletop game that the team is developing into a digital hybrid version.",
      details: [
        "I am the project manager and keep the team coordinated.",
        "I run Scrum: I plan each sprint and assign the tasks in Jira.",
        "I track progress in Jira and keep the team in sync on Discord."
      ],
      repo: "", wiki: "https://mindweaver.fandom.com/wiki/MindWeaver_Wiki", demo: "" },
    
  /* --- Background ---
     Entries that have a "file" become clickable and open the certificate
     popup (PDFs load in an iframe, images load in an <img>). */
  background: [
    { group: "Experience", items: [
      { title: "Technical Committee", text: "Valenzuela Information Technology Society", meta: "2026" },
      { title: "Head Creatives Officer", text: "Valenzuela Tigers Haud Ka'Bu", meta: "2026" },
      { title: "Social Media and Content Creation", text: "Insightblitz Solutions, @xis_NFT", meta: "2025" },
      { title: "Digital Marketing", text: "NFT Communities", meta: "2022" }
    ] },
    { group: "Competition", items: [
      { title: "C# Programming · Participant", text: "PLV ITlympics, Problem solving", meta: "2025" },
      { title: "Networking · Finalist", text: "PLV ITlympics, Hardware and Cisco Packet Tracer", meta: "2026" }
    ] },
    { group: "Certificates", items: [
      { title: "Introduction to Digital Marketing", text: "TESDA, Digital Marketing lll", meta: "2026", file: "asset/asset/digital_marketing_cert.pdf" },
      { title: "Web Development Fundamentals", text: "IBM", meta: "2026", file: "asset/asset/IBM_cert.pdf" },
      { title: "Fundamentals of Artificial Intelligence", text: "TESDA, Amazon Web Services", meta: "2026", file: "asset/asset/ai_cert.pdf" },
    ] },
    { group: "Seminars", items: [
      { title: "Unlocking Security: The Power of Identity & Access Management", text: "Seminars and Colloquia", meta: "2025", file: "asset/asset/seminars-and-colloquia.jpg" }
    ] }
  ],

  /* --- "How we'd work together" steps --- */
  process: [
    { title: "You send a message", text: "Tell me the task, the deadline and the tools you use." },
    { title: "I confirm the plan", text: "I reply within 24 hours with scope, timeline and rate." },
    { title: "I start with a small task", text: "A short trial so we both know it is a good fit." },
    { title: "Regular updates", text: "You get progress notes and a clear handoff of finished work." }
  ]
};
/* ===================== end of editable block ===================== */


/* ==========================================================================
   2. Helpers
   ========================================================================== */

// Shortcut for document.querySelector
const $ = s => document.querySelector(s);

// Create an element with an optional class name and innerHTML
const el = (t, c, h) => {
  const e = document.createElement(t);
  if (c) e.className = c;
  if (h != null) e.innerHTML = h;
  return e;
};

// Escape text before putting it inside HTML strings (prevents broken markup / injection)
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Sections used by the sidebar, the mobile menu, the nav highlight and the jump menu.
// Format: [element id, label]
const SECTIONS = [
  ["home", "Home"], ["services", "Services"], ["skills", "Skills"], ["projects", "Projects"],
  ["background", "Background"], ["process", "Process"], ["contact", "Contact"]
];


/* ==========================================================================
   3. Static content – fill the page from DATA
   ========================================================================== */
document.title = DATA.name;
$("#brand").textContent = DATA.name;
$("#name").textContent = DATA.name;

// "You can call me ..." line. Clicking a nickname swaps it with the main heading.
const aka = $("#aka");
if (DATA.nicknames && DATA.nicknames.length) {
  aka.innerHTML = "You can call me " + DATA.nicknames.map(n => `<button class="nick">${esc(n)}</button>`).join(" or ");
  aka.onclick = e => {
    const b = e.target.closest(".nick"); if (!b) return;
    const h = $("#name"), current = h.textContent;
    h.textContent = b.textContent;
    b.textContent = current;
  };
} else aka.remove();

// Hero text, availability and email
$("#tagline").textContent = DATA.tagline;
$("#intro").textContent = DATA.intro;
$("#avail").textContent = DATA.available;
$("#mail").textContent = DATA.email;
$("#mail").href = "mailto:" + DATA.email;

// Photo (falls back to my initials if no photo is set)
$("#photo").innerHTML = DATA.photo ? `<img src="${esc(DATA.photo)}" alt="${esc(DATA.name)}">` : `<span>${esc(DATA.initials)}</span>`;

// Social links and stats bar
$("#socials").innerHTML = DATA.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join("");
$("#stats").innerHTML = DATA.stats.map(s => `<div><b>${esc(s.value)}</b><small>${esc(s.label)}</small></div>`).join("");

// Service cards
$("#serviceGrid").innerHTML = DATA.services.map(s => `<div class="card"><span class="tag ${s.status}">${s.status === "use" ? "Achieved" : "In Progress"}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("");

// Skills: plain text, one skill per line, sorted A-Z so a specific skill is easy to find.
// "use" skills are the list; "learn" skills go in one short "Currently learning" line.
const az = (a, b) => a.localeCompare(b, undefined, { sensitivity: "base" });
$("#skillList").innerHTML = DATA.skills.map(g => {
  const ready = g.items.filter(i => i[1] === "use").map(i => i[0]).sort(az);
  const learning = g.items.filter(i => i[1] !== "use").map(i => i[0]).sort(az);
  return `<div class="skillrow"><h3>${esc(g.group)}</h3><div><ul class="sklist">${ready.map(n => `<li>${esc(n)}</li>`).join("")}</ul>${learning.length ? `<p class="sknote">Currently learning: ${learning.map(esc).join(", ")}</p>` : ""}</div></div>`;
}).join("");

// Background list. Entries with a file render as a button that opens the certificate popup.
$("#bgList").innerHTML = DATA.background.map(g => `<div class="skillrow"><h3>${esc(g.group)}</h3><div>${g.items.map(i => `<div class="entry"><div>${i.file ? `<button class="entry-link" data-file="${esc(i.file)}" data-title="${esc(i.title)}" aria-haspopup="dialog">${esc(i.title)} <i>↗</i></button>` : `<b>${esc(i.title)}</b>`}${i.text ? `<span>${esc(i.text)}</span>` : ""}</div><small>${esc(i.meta)}</small></div>`).join("")}</div></div>`).join("");

// Work process steps, projects subtitle and footer
$("#steps").innerHTML = DATA.process.map(p => `<div><b>${esc(p.title)}</b><span>${esc(p.text)}</span></div>`).join("");
$("#projSub").textContent = DATA.projectsNote;
$("#foot").textContent = "© " + new Date().getFullYear() + " " + DATA.name;

// Navigation links (desktop sidebar + mobile menu use the same list)
$("#nav").innerHTML = SECTIONS.map(s => `<a href="#${s[0]}" data-s="${s[0]}">${s[1]}</a>`).join("");
$("#mobnav").innerHTML = SECTIONS.map(s => `<a href="#${s[0]}" data-s="${s[0]}">${s[1]}</a>`).join("");


/* ==========================================================================
   4. Project popup (details + image carousel)
   ========================================================================== */
// Build the modal once and reuse it for every project
const pm = el("div", "pmodal");
pm.innerHTML = `<div class="pbox" role="dialog" aria-modal="true" aria-label="Project details"><button class="pclose" aria-label="Close">×</button><div class="pbody"></div></div>`;
document.body.appendChild(pm);

const pbox = pm.querySelector(".pbox"), pbody = pm.querySelector(".pbody");
let lastCard = null;   // card that opened the popup, so focus can return to it on close
let pStep = null;      // carousel "next/previous" function, used by the arrow keys (null if only one image)

function openProject(p, card) {
  // Only show link buttons for fields that are filled in
  const links = [["demo", "Live demo"], ["repo", "GitHub"], ["wiki", "Wiki"], ["trailer", "Trailer"], ["X", "X"], ["Canva", "Canva"], ["Facebook", "Facebook"], ["Medium", "Medium"]]
    .filter(l => p[l[0]]).map(l => `<a href="${esc(p[l[0]])}" target="_blank" rel="noopener">${l[1]} ↗</a>`).join("");

  // Use the "images" list if there is one, otherwise just the card image.
  // Arrows and dots are only built when there is more than one image.
  const imgs = (p.images || [p.image]).filter(Boolean), multi = imgs.length > 1;
  const car = imgs.length
    ? `<div class="pcar${multi ? " multi" : ""}"><div class="pstage">${imgs.map(src => `<div class="pslide"><img src="${esc(src)}" alt="${esc(p.title)} artwork"></div>`).join("")}</div>${multi ? `<div class="cnav"><button class="pill pprev" type="button" aria-label="Previous image">←</button><div class="dots pdots">${imgs.map(() => "<i></i>").join("")}</div><button class="pill pnext" type="button" aria-label="Next image">→</button></div>` : ""}</div>`
    : `<div class="pcar"><div class="thumb">no preview yet</div></div>`;

  // Popup layout: carousel on the left, project info on the right
  pbox.classList.add("pwide");
  pbody.innerHTML = `<div class="pgrid">${car}<div class="pinfo">
    <div class="top"><span>${esc(p.category)} · ${esc(p.year)}</span><span>${esc(p.status || "")}</span></div>
    <h3>${esc(p.title)}</h3>${p.role ? `<p class="role">${esc(p.role)}</p>` : ""}
    <p class="psum">${esc(p.summary)}</p>
        ${Array.isArray(p.details)
      ? `<ul class="pdetails">${p.details.map(d => `<li>${esc(d)}</li>`).join("")}</ul>`
      : `<p>${esc(p.details)}</p>`}
    ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
    <div class="ptags">${p.stack.map(s => `<span class="tag">${esc(s)}</span>`).join("")}</div>
    ${links ? `<p class="plinks">${links}</p>` : ""}</div></div>`;

  // Carousel: the centre image is large, its neighbours peek out on each side,
  // and the whole image is always visible (object-fit: contain in the CSS).
  const slides = [...pbody.querySelectorAll(".pslide")];
  let ci = 0;   // index of the current (centre) slide

  // Give each slide a position relative to the current one (-1, 0, 1 or hidden).
  // The offset wraps around so the carousel loops. CSS reads data-pos to place the slides.
  const paint = () => {
    const n = slides.length;
    slides.forEach((sl, i) => {
      let o = i - ci;
      if (o > n / 2) o -= n;
      if (o < -n / 2) o += n;
      sl.dataset.pos = Math.abs(o) > 1 ? "hidden" : String(o);
    });
    pbody.querySelectorAll(".pdots i").forEach((d, i) => d.classList.toggle("on", i === ci));
  };
  const step = d => { ci = (ci + d + slides.length) % slides.length; paint(); };
  paint();
  pStep = multi ? step : null;

  if (multi) {
    // Arrow buttons
    pbody.querySelector(".pprev").onclick = () => step(-1);
    pbody.querySelector(".pnext").onclick = () => step(1);

    // Clicking a peeking slide brings it to the centre
    slides.forEach((sl, i) => { sl.onclick = () => { if (i !== ci) { ci = i; paint(); } }; });

    // Swipe left/right on touch screens (ignore small movements under 40px)
    let x0 = null;
    const st = pbody.querySelector(".pstage");
    st.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    st.addEventListener("touchend", e => {
      if (x0 === null) return;
      const d = e.changedTouches[0].clientX - x0;
      if (Math.abs(d) > 40) step(d < 0 ? 1 : -1);
      x0 = null;
    });
  }

  // Open animation: start the popup at the clicked card's position and size,
  // then clear the inline styles so the CSS transition grows it to the centre.
  const r = card.getBoundingClientRect();
  pbox.style.transition = "none";
  pbox.style.transform = `translate(${r.left + r.width / 2 - innerWidth / 2}px, ${r.top + r.height / 2 - innerHeight / 2}px) scale(.35)`;
  pbox.style.opacity = "0";
  pm.classList.add("open");
  pbox.scrollTop = 0;
  void pbox.offsetWidth;   // force a reflow so the browser registers the start position
  pbox.style.transition = pbox.style.transform = pbox.style.opacity = "";

  document.body.style.overflow = "hidden";   // lock page scroll while the popup is open
  lastCard = card;
  pm.querySelector(".pclose").focus();
}

function closeProject() {
  if (!pm.classList.contains("open")) return;
  pm.classList.remove("open");
  document.body.style.overflow = "";
  if (lastCard) { const b = lastCard.querySelector(".proj"); if (b) b.focus(); }   // return focus to the card
}

// Close on backdrop click or the × button
pm.onclick = e => { if (e.target === pm || e.target.closest(".pclose")) closeProject(); };

// Keyboard: Esc closes, left/right arrows move the carousel
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeProject();
  if (pStep && pm.classList.contains("open")) {
    if (e.key === "ArrowRight") pStep(1);
    if (e.key === "ArrowLeft") pStep(-1);
  }
});


/* ==========================================================================
   5. Certificate popup (PDF or image viewer)
   ========================================================================== */
const cm = el("div", "pmodal");
cm.innerHTML = `<div class="pbox cbox" role="dialog" aria-modal="true" aria-label="Certificate"><button class="pclose" aria-label="Close">×</button><p class="ctitle"></p><div class="cview"></div><p class="plinks"><a class="copen" target="_blank" rel="noopener">Open in new tab ↗</a></p></div>`;
document.body.appendChild(cm);

const cview = cm.querySelector(".cview"), ctitle = cm.querySelector(".ctitle"), copen = cm.querySelector(".copen");
let lastCert = null;   // button that opened the popup, so focus can return to it on close

function openCert(file, title, trigger) {
  // PDFs go in an iframe, everything else is treated as an image
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
  cview.innerHTML = "";   // empty the viewer so the PDF stops loading in the background
  if (lastCert) lastCert.focus();
}

cm.onclick = e => { if (e.target === cm || e.target.closest(".pclose")) closeCert(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") closeCert(); });

// One click listener on the whole list (event delegation) instead of one per button
$("#bgList").onclick = e => {
  const b = e.target.closest(".entry-link");
  if (b) openCert(b.dataset.file, b.dataset.title, b);
};


/* ==========================================================================
   6. Projects grid – category filter, "See more" and cards
   ========================================================================== */
const STAR = "★";                                                   // special tab for featured ("main") projects
const cats = [STAR, ...new Set(DATA.projects.map(p => p.category))]; // tabs: ★ + every unique category
let cat = STAR;                                                     // currently selected tab
let showAll = false;                                                // phones only: false = just one card until "See more"

// Does this project belong in the current tab?
const inCat = p => cat === STAR ? p.featured : p.category === cat;

function renderProjects() {
  // Filter chips
  $("#chips").innerHTML = cats.map(c => c === STAR
    ? `<button class="chip chip-star" aria-pressed="${c === cat}" data-c="${STAR}" aria-label="Main projects" title="Main projects">${STAR}</button>`
    : `<button class="chip" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)}</button>`
  ).join("");

  // Cards for the selected tab
  const g = $("#projGrid");
  g.innerHTML = "";
  DATA.projects.filter(inCat).forEach(p => {
    const c = el("div", "card");
    c.dataset.title = p.title;   // used by the jump menu to find this card
    c.innerHTML = `<button class="proj" aria-haspopup="dialog"><div class="thumb">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy">` : "no preview yet"}</div>
      <div class="top"><span>${esc(p.category)} · ${esc(p.year)}</span><span>${esc(p.status || (p.demo ? "live" : "on GitHub"))}</span></div>
      <h3>${esc(p.title)}</h3>${p.role ? `<p class="role">${esc(p.role)}</p>` : ""}</button>`;
    c.querySelector(".proj").onclick = () => openProject(p, c);
    g.appendChild(c);
  });

  // "See more" button (only matters on phones, where the CSS hides cards 2+ while collapsed)
  const total = DATA.projects.filter(inCat).length;
  const sm = $("#seeMore");
  g.classList.toggle("collapsed", !showAll);
  sm.hidden = total <= 1;
  sm.textContent = showAll ? "See less" : `See more (${total - 1})`;
}

// Switching tabs resets the "See more" state
$("#chips").onclick = e => {
  const c = e.target.closest("[data-c]");
  if (c) { cat = c.dataset.c; showAll = false; renderProjects(); }
};

// Collapsing scrolls back up to the top of the Projects section
$("#seeMore").onclick = () => {
  showAll = !showAll;
  renderProjects();
  if (!showAll) $("#projects").scrollIntoView();
};
renderProjects();


/* ==========================================================================
   7. Toast + contact form
   ========================================================================== */
// Small message that slides up from the bottom for ~2 seconds
const toast = m => {
  const t = $("#toast");
  t.textContent = m;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
};

$("#mail2").textContent = DATA.email;
$("#mail2").href = "mailto:" + DATA.email;

// There is no backend, so the form builds a mailto: link that opens the visitor's email app
$("#form").onsubmit = e => {
  e.preventDefault();
  const v = id => $(id).value.trim();
  const subj = encodeURIComponent("Inquiry from " + v("#fName"));
  const body = encodeURIComponent(
    "Name: " + v("#fName") + "\nEmail: " + v("#fEmail") + "\nCompany: " + v("#fCompany") +
    "\nBudget: " + v("#fBudget") + "\n\n" + v("#fMsg"));
  location.href = `mailto:${DATA.email}?subject=${subj}&body=${body}`;
  toast("Opening your email app");
};

/* ==========================================================================
   8. Theme toggle: auto -> light -> dark
   "auto" removes data-theme so the CSS follows the visitor's system setting.
   ========================================================================== */
const modes = ["dark", "light", "auto"];   // order the button cycles through
let mode = "dark";                          // dark is the default
try { mode = localStorage.getItem("theme") || "dark"; } catch (e) {}   // saved choice (storage can be blocked)

function applyTheme() {
  mode === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", mode);
  $("#theme").textContent = "Theme: " + mode;
}

$("#theme").onclick = () => {
  mode = modes[(modes.indexOf(mode) + 1) % 3];
  try { localStorage.setItem("theme", mode); } catch (e) {}
  applyTheme();
};
applyTheme();


/* ==========================================================================
   9. Active nav – highlight the link of the section currently in view
   The rootMargin shrinks the "trigger zone" to a band near the middle of the screen.
   ========================================================================== */
const links = [...document.querySelectorAll("#nav a, #mobnav a")];
const io = new IntersectionObserver(
  es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle("on", l.dataset.s === en.target.id));
  }),
  { rootMargin: "-40% 0px -55% 0px" }
);
SECTIONS.forEach(s => { const n = document.getElementById(s[0]); if (n) io.observe(n); });


/* ==========================================================================
   10. Jump menu (command palette) – open with Alt+K
   ========================================================================== */
const pal = $("#pal"), palIn = $("#palIn"), palList = $("#palList");
let items = [];   // results currently shown (filtered by the search box)
let sel = 0;      // index of the highlighted result

// Everything that can be jumped to: every section + every project
const all = [
  ...SECTIONS.map(s => ({ label: s[1], go: "#" + s[0] })),
  ...DATA.projects.map(p => ({ label: "Project: " + p.title, go: "#projects", proj: p.title }))
];

// Filter by the search text and redraw the list (first result is highlighted)
function drawPal() {
  const q = palIn.value.toLowerCase();
  items = all.filter(i => i.label.toLowerCase().includes(q));
  sel = 0;
  palList.innerHTML = items.map((i, n) => `<li><button class="${n ? "" : "sel"}" data-n="${n}">${esc(i.label)}</button></li>`).join("");
}

const openPal = () => { pal.classList.add("open"); palIn.value = ""; drawPal(); palIn.focus(); };
const closePal = () => pal.classList.remove("open");

// Jump to the chosen result
const go = n => {
  const it = items[n]; if (!it) return;
  closePal();

  // Projects: switch to the tab the project lives in (★ if it is featured),
  // expand the list, then scroll to its card and flash it.
  if (it.proj) {
    const tp = DATA.projects.find(p => p.title === it.proj);
    cat = tp && tp.featured ? STAR : (tp ? tp.category : STAR);
    showAll = true;
    renderProjects();
    const card = [...document.querySelectorAll("#projGrid .card")].find(c => c.dataset.title === it.proj);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("flash");
      setTimeout(() => card.classList.remove("flash"), 1800);
    }
    return;
  }

  // Sections: smooth scroll and update the URL hash without adding a history entry
  const t = document.querySelector(it.go);
  if (t) { t.scrollIntoView({ behavior: "smooth" }); history.replaceState(null, "", it.go); }
};

$("#openPal").onclick = openPal;
palIn.oninput = drawPal;
palList.onclick = e => { const b = e.target.closest("button"); if (b) go(+b.dataset.n); };
pal.onclick = e => { if (e.target === pal) closePal(); };   // click on the dark backdrop closes it

document.addEventListener("keydown", e => {
  // Alt+K opens the menu from anywhere
  if (e.altKey && e.key.toLowerCase() === "k") { e.preventDefault(); openPal(); }

  // The keys below only apply while the menu is open
  if (!pal.classList.contains("open")) return;
  if (e.key === "Escape") closePal();
  if (e.key === "Enter") go(sel);

  // Up/Down move the highlight (wrapping around) and keep it scrolled into view,
  // since the list scrolls when there are many results.
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
    [...palList.querySelectorAll("button")].forEach((b, n) => {
      b.classList.toggle("sel", n === sel);
      if (n === sel) b.scrollIntoView({ block: "nearest" });
    });
  }
});


/* ==========================================================================
   11. Mobile menu (hamburger, phones only)
   ========================================================================== */
const burger = $("#burger"), mobmenu = $("#mobmenu");
$("#mbrand").textContent = DATA.name;

// Extra controls inside the mobile menu: theme button, jump button and email link
$("#mobextra").innerHTML = `<button class="pill" id="mobTheme">${$("#theme").textContent}</button><button class="pill" id="mobJump">Jump to…</button><a class="mono" href="mailto:${esc(DATA.email)}">${esc(DATA.email)}</a>`;

// Open or close the menu and keep the burger's accessibility attributes in sync
const setMenu = open => {
  mobmenu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};

burger.onclick = () => setMenu(!mobmenu.classList.contains("open"));
mobmenu.addEventListener("click", e => { if (e.target.closest("#mobnav a")) setMenu(false); });   // close after picking a section
document.addEventListener("click", e => { if (!e.target.closest(".mobtop")) setMenu(false); });   // close when tapping outside
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
window.matchMedia("(min-width:861px)").addEventListener("change", () => setMenu(false));          // close if resized to desktop

// The mobile theme button reuses the sidebar button's click handler
$("#mobTheme").onclick = () => { $("#theme").click(); $("#mobTheme").textContent = $("#theme").textContent; };
$("#mobJump").onclick = () => { setMenu(false); openPal(); };


/* ==========================================================================
   12. Live viewers – "N people viewing now"
   Uses Supabase Realtime presence. Each visitor joins the "portfolio-live"
   channel with a random id, and the number of joined ids is the viewer count.
   The key below is the public "anon" key, which is meant for front-end code.
   ========================================================================== */
const LIVE = {
  url: "https://glnvbwlpehxbxgzbffat.supabase.co",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsbnZid2xwZWh4YnhnemJmZmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxMTIzNzksImV4cCI6MjEwNzY4ODM3OX0.6J5RGx5HsyaU9N_VXisZMu_N-X26BOfSn_Ia3zYVU1k"
};

(function () {
  // Add a counter to the mobile menu (the sidebar already has one in the HTML)
  const mx = $("#mobextra");
  if (mx) mx.insertAdjacentHTML("afterbegin", '<div class="live"></div>');
  const boxes = document.querySelectorAll(".live");

  // If the Supabase library failed to load, or the config is still a placeholder, remove the counters
  if (!window.supabase || LIVE.url.startsWith("PASTE")) { boxes.forEach(b => b.remove()); return; }

  const sb = window.supabase.createClient(LIVE.url, LIVE.key);
  const me = Math.random().toString(36).slice(2, 10);   // random id for this visitor
  const ch = sb.channel("portfolio-live", { config: { presence: { key: me } } });

  // Count everyone currently present (at least 1, which is me)
  const draw = () => {
    const n = Math.max(1, Object.keys(ch.presenceState()).length);
    boxes.forEach(b => { b.innerHTML = `<i class="dot"></i><span><b>${n}</b> ${n === 1 ? "person" : "people"} viewing now</span>`; });
  };

  // Redraw whenever someone joins or leaves, and announce myself once connected
  ch.on("presence", { event: "sync" }, draw)
    .subscribe(async s => { if (s === "SUBSCRIBED") await ch.track({ id: me }); });
})();


/* ==========================================================================
   13. Starfield – neon stars drifting upward on the background canvas
   - Stars twinkle, glow, and move at different speeds based on their size.
   - A shooting star appears now and then.
   - Colour comes from the --acc CSS variable, so it follows the theme.
   - With "reduce motion" on, the stars are drawn once and don't move.
   ========================================================================== */
(function () {
  const c = document.getElementById('stars');
  if (!c) return;
  const x = c.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W, H;                 // canvas size in CSS pixels
  let stars = [];           // all stars
  let shoot = null;         // the current shooting star (null when there is none)
  let rgb = '255,182,220';  // accent colour as "r,g,b" (default is the dark theme pink)
  let f = 0;                // frame counter

  // Read --acc from the page and convert the hex colour into "r,g,b"
  function readColor() {
    const v = getComputedStyle(document.documentElement).getPropertyValue('--acc').trim();
    if (/^#[0-9a-f]{6}$/i.test(v)) {
      const n = parseInt(v.slice(1), 16);
      rgb = `${n >> 16},${(n >> 8) & 255},${n & 255}`;
    }
  }

  // Size the canvas to the window (capped at 2x pixel ratio for performance)
  // and create a fresh set of stars. The count scales with the screen area, max 140.
  function resize() {
    const d = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    c.width = W * d; c.height = H * d;
    x.setTransform(d, 0, 0, d, 0, 0);
    const count = Math.min(140, Math.round(W * H / 9000));
    stars = Array.from({ length: count }, () => {
      const r = 0.5 + Math.random() * 1.6;   // radius
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r,
        s: r * 0.09,                         // drift speed: bigger stars move faster (parallax effect)
        p: Math.random() * 6.28,             // twinkle phase, so stars don't all pulse together
        t: 0.01 + Math.random() * 0.03       // twinkle speed
      };
    });
    readColor();
  }

  // One animation frame
  function draw() {
    x.clearRect(0, 0, W, H);
    if (f % 30 === 0) readColor();   // re-check the colour twice a second so theme switches are picked up

    for (const s of stars) {
      // Move up, and respawn at the bottom (random x) once past the top edge
      if (!reduce) { s.y -= s.s; if (s.y < -4) { s.y = H + 4; s.x = Math.random() * W; } }

      // Twinkle: opacity follows a sine wave between 0.35 and 1
      const a = 0.35 + 0.65 * (Math.sin(s.p + f * s.t) + 1) / 2;
      x.shadowColor = `rgba(${rgb},.9)`;
      x.shadowBlur = s.r * 7;            // glow strength
      x.fillStyle = `rgba(${rgb},${a})`;
      x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.283); x.fill();
    }
    x.shadowBlur = 0;

    // Shooting star: ~0.4% chance each frame to start one, then it streaks
    // diagonally for 70 frames. The tail is a gradient that fades to transparent.
    if (!reduce) {
      if (!shoot && Math.random() < 0.004)
        shoot = { x: Math.random() * W * 0.8 + W * 0.2, y: Math.random() * H * 0.4, l: 0 };
      if (shoot) {
        shoot.x -= 9; shoot.y += 4.5; shoot.l += 1;
        const g = x.createLinearGradient(shoot.x, shoot.y, shoot.x + 90, shoot.y - 45);
        g.addColorStop(0, `rgba(${rgb},.9)`); g.addColorStop(1, `rgba(${rgb},0)`);
        x.strokeStyle = g; x.lineWidth = 1.6;
        x.beginPath(); x.moveTo(shoot.x, shoot.y); x.lineTo(shoot.x + 90, shoot.y - 45); x.stroke();
        if (shoot.l > 70) shoot = null;
      }
    }

    f++;
    // Keep animating, but pause while the tab is hidden and skip it entirely for reduced motion
    if (!reduce && !document.hidden) requestAnimationFrame(draw);
  }

  resize();
  addEventListener('resize', resize);
  // The loop stops while the tab is hidden, so restart it when the tab is visible again
  document.addEventListener('visibilitychange', () => { if (!document.hidden && !reduce) requestAnimationFrame(draw); });
  requestAnimationFrame(draw);
})();
/* ==========================================================================
   14. Guided tour – small arrow tips (no overlay)
   - 3 tips: Work with me / See my work, the menu, the theme button.
   - No dimming and no scroll lock: the page stays usable while a tip is showing.
   - Starts once on the first visit (saved in localStorage). The "? Tour" button replays it.
   - A tip is skipped if its target isn't on screen (e.g. the theme button lives
     inside the hamburger menu on phones).
   ========================================================================== */
(function () {
  const KEY = "tourSeen";
  const isPhone = () => matchMedia("(max-width:860px)").matches;

  const M = 12;              // minimum margin to the screen edge
  const PAD = 6;             // ring padding around the target
  const AW = 40, AH = 54;    // arrow size (width, length)
  const GAP = PAD + AH + 4;  // distance from the target's edge to the tag

  // The tips. "side" = preferred sides for the arrow, in order.
  // "scroll" = bring the target into view first (it lives in the page, not in a fixed bar).
  const STEPS = [
    { els: () => document.querySelectorAll(".hero .cta"), side: ["below", "above"], scroll: true,
      title: "Start here", text: () => "Hire me with “Work with me”, or browse my projects with “See my work”." },
    { els: () => document.querySelectorAll(isPhone() ? "#burger" : "#nav"), side: isPhone() ? ["below", "above"] : ["right", "below", "above"],
      title: "Menu", text: () => isPhone() ? "Jump to any section here. You can switch the theme in this menu too." : "Jump to any section from here. Tip: Alt + K searches everything." },
    { els: () => isPhone() ? [] : document.querySelectorAll("#theme"), side: ["right", "below", "above"],
      title: "Theme", text: () => "Switch between auto, light and dark." }
  ];

  /* ----- Build the tour UI once ----- */
  const root = el("div", "tour");
  root.hidden = true;
  root.innerHTML = `
    <div class="tour-hole"></div>
    <div class="tour-arrow" aria-hidden="true">
      <svg class="tour-svg" viewBox="0 0 60 80" width="${AW}" height="${AH}" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M31 76 C 10 62, 50 44, 29 10"/>
        <path d="M29 10 C 25 18, 19 24, 12 28"/>
        <path d="M29 10 C 33 17, 40 22, 48 24"/>
      </svg>
    </div>
    <div class="tour-box" role="region" aria-label="Website tip" aria-live="polite">
      <button class="tour-x" type="button" aria-label="Close tutorial">×</button>
      <p class="tour-title"></p>
      <p class="tour-text"></p>
      <div class="tour-foot">
        <span class="tour-count"></span>
        <button class="tour-next" type="button">Next ▶</button>
      </div>
    </div>`;
  document.body.appendChild(root);

  // Floating button to replay the tour
  const help = el("button", "pill tour-help", "? Tour");
  help.type = "button";
  help.setAttribute("aria-label", "Replay the website tutorial");
  document.body.appendChild(help);

  const q = s => root.querySelector(s);
  const box = q(".tour-box"), arrow = q(".tour-arrow"), hole = q(".tour-hole"), nextBtn = q(".tour-next");
  let list = [], i = 0, raf = 0;

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  // Rectangle that covers every element of a target (so two buttons share one ring)
  function rectOf(nodes) {
    let l = 1e9, t = 1e9, r = -1e9, b = -1e9;
    nodes.forEach(n => {
      const k = n.getBoundingClientRect();
      l = Math.min(l, k.left); t = Math.min(t, k.top); r = Math.max(r, k.right); b = Math.max(b, k.bottom);
    });
    return { left: l, top: t, right: r, bottom: b, width: r - l, height: b - t };
  }

  // Instant scroll (the page uses smooth scrolling, which would make measurements wrong)
  function jump(fn) {
    const h = document.documentElement;
    h.style.scrollBehavior = "auto";
    fn();
    h.style.scrollBehavior = "";
  }

  /* ----- Position the ring, arrow and tag for the current step.
         Runs on every scroll/resize so everything stays attached to the target. ----- */
  function place() {
    const s = list[i], vw = innerWidth, vh = innerHeight;
    const r = rectOf(s.nodes), bw = box.offsetWidth, bh = box.offsetHeight;

    // Target scrolled off screen: hide the ring + arrow and park the tag at the bottom edge
    const off = r.bottom < 0 || r.top > vh || r.right < 0 || r.left > vw;
    root.classList.toggle("off", off);
    if (off) {
      box.style.left = clamp((vw - bw) / 2, M, vw - bw - M) + "px";
      box.style.top = Math.max(M, vh - bh - M) + "px";
      return;
    }

    // Ring around the target
    hole.style.cssText = `left:${r.left - PAD}px;top:${r.top - PAD}px;width:${r.width + PAD * 2}px;height:${r.height + PAD * 2}px`;

    // Choose the first preferred side that has room for the arrow + the tag
    const fits = {
      right: r.right + GAP + bw + M <= vw,
      left:  r.left - GAP - bw >= M,
      below: r.bottom + GAP + bh + M <= vh,
      above: r.top - GAP - bh >= M
    };
    const side = [...s.side, "below", "above", "right", "left"].find(k => fits[k]) || "below";

    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const edge = PAD + 2 + AH / 2;   // arrow centre distance from the target's edge
    let ax, ay, rot, bx, by;         // arrow centre, arrow rotation (0 = points up), tag position
    if (side === "right") {
      ax = r.right + edge; ay = clamp(cy, 30, vh - 30); rot = -90;
      bx = r.right + GAP;  by = ay - bh / 2;
    } else if (side === "left") {
      ax = r.left - edge;  ay = clamp(cy, 30, vh - 30); rot = 90;
      bx = r.left - GAP - bw; by = ay - bh / 2;
    } else if (side === "below") {
      ax = clamp(cx, M + AW / 2, vw - M - AW / 2); ay = r.bottom + edge; rot = 0;
      bx = cx - bw / 2;    by = r.bottom + GAP;
    } else {
      ax = clamp(cx, M + AW / 2, vw - M - AW / 2); ay = r.top - edge; rot = 180;
      bx = cx - bw / 2;    by = r.top - GAP - bh;
    }
    arrow.style.left = (ax - AW / 2) + "px";
    arrow.style.top = (ay - AH / 2) + "px";
    arrow.style.transform = `rotate(${rot}deg)`;
    box.style.left = clamp(bx, M, vw - bw - M) + "px";
    box.style.top = clamp(by, M, vh - bh - M) + "px";
  }

  // Throttle scroll/resize updates to one per frame
  const queue = () => { if (!raf && !root.hidden) raf = requestAnimationFrame(() => { raf = 0; place(); }); };
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", queue);

  /* ----- Show step n ----- */
  function show(n, animate) {
    i = n;
    const s = list[i], last = i === list.length - 1;
    q(".tour-title").textContent = s.title;
    q(".tour-text").textContent = s.text();
    q(".tour-count").textContent = `${i + 1} / ${list.length}`;
    nextBtn.textContent = last ? "Done ✓" : "Next ▶";

    // Targets that live in the page (not in a fixed bar) are scrolled into view first
    if (s.scroll) {
      const r = rectOf(s.nodes);
      if (r.top < 70 || r.bottom > innerHeight - 90) jump(() => s.nodes[0].scrollIntoView({ block: "center" }));
    }

    // Slide to the new spot only when moving between tips, not while scrolling
    if (animate) { root.classList.add("anim"); setTimeout(() => root.classList.remove("anim"), 450); }
    place();
    nextBtn.focus({ preventScroll: true });
  }

  /* ----- Start / end ----- */
  function start() {
    // Keep only the steps whose target exists and is visible on this screen size
    list = STEPS.filter(s => {
      s.nodes = [...s.els()];
      return s.nodes.length && s.nodes[0].getBoundingClientRect().width > 0;
    });
    if (!list.length) return;
    setMenu(false);   // make sure the phone menu isn't open underneath the tip
    root.hidden = false;
    help.hidden = true;
    show(0, false);
  }

  function end() {
    if (root.hidden) return;
    root.hidden = true;
    help.hidden = false;
    try { localStorage.setItem(KEY, "1"); } catch (e) {}   // don't auto-start again
  }

  /* ----- Controls ----- */
  nextBtn.onclick = () => (i === list.length - 1 ? end() : show(i + 1, true));
  q(".tour-x").onclick = end;
  help.onclick = start;
  document.addEventListener("keydown", e => { if (e.key === "Escape") end(); });

  /* ----- Auto-start on the first visit (after a short pause, and not over an open popup) ----- */
  let seen = false;
  try { seen = localStorage.getItem(KEY) === "1"; } catch (e) {}
  if (!seen) setTimeout(() => { if (!document.querySelector(".pmodal.open, .pal.open")) start(); }, 1200);
})();