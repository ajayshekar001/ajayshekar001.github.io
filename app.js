(function () {
  const P = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tags = (list) => `<ul class="tags">${(list || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
  const gh = P.links.github;

  // Hero
  $("brand").textContent = P.name;
  $("name").textContent = P.name;
  $("title").textContent = P.title + (P.location ? " · " + P.location : "");
  $("summary").textContent = P.summary;
  $("stats").innerHTML = P.stats.map((s) => `<li><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></li>`).join("");

  const linkButtons = [
    P.links.github && `<a class="btn primary" href="${esc(P.links.github)}" target="_blank" rel="noopener">GitHub</a>`,
    P.links.linkedin && `<a class="btn" href="${esc(P.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
    P.links.resume && `<a class="btn" href="${esc(P.links.resume)}" target="_blank" rel="noopener">Résumé</a>`,
    P.links.email && `<a class="btn" href="mailto:${esc(P.links.email)}">Email</a>`,
  ].filter(Boolean).join("");
  $("cta").innerHTML = linkButtons;
  $("contact-links").innerHTML = linkButtons;

  // Experience
  $("experience").innerHTML = P.experience.map((job) => `
    <article class="job">
      <header>
        <div><h3>${esc(job.role)}</h3><p class="muted">${esc(job.company)}</p></div>
        <span class="period">${esc(job.period)}</span>
      </header>
      <p>${esc(job.summary)}</p>
      <div class="work-list">
        ${job.projects.map((p) => `
          <div class="work-item">
            <h4>${esc(p.name)}</h4>
            <dl>
              ${p.problem ? `<dt>Problem</dt><dd>${esc(p.problem)}</dd>` : ""}
              ${p.contribution ? `<dt>What I built</dt><dd>${esc(p.contribution)}</dd>` : ""}
              ${p.impact ? `<dt>Impact</dt><dd>${esc(p.impact)}</dd>` : ""}
            </dl>
            ${tags(p.tags)}
          </div>`).join("")}
      </div>
    </article>`).join("");

  // Projects
  const card = (p) => `
    <article class="card${p.featured ? " featured" : ""}">
      <div class="card-top">
        <span class="cat">${esc(p.category)}</span><span class="muted">${esc(p.year)}</span>
      </div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.blurb)}</p>
      ${p.highlights ? `<ul class="highlights">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
      ${tags(p.tags)}
      <div class="card-links">
        ${p.repo && p.public !== false ? `<a href="${esc(gh)}/${esc(p.repo)}" target="_blank" rel="noopener">Code →</a>` : ""}
        ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo →</a>` : ""}
      </div>
    </article>`;

  let active = "All";
  const render = () => {
    const list = P.projects
      .filter((p) => active === "All" || p.category === active)
      .sort((a, b) => (b.featured | 0) - (a.featured | 0) || String(b.year).localeCompare(String(a.year)));
    $("project-grid").innerHTML = list.map(card).join("");
  };
  $("filters").innerHTML = ["All", ...P.categories].map((c) => `<button class="chip" aria-pressed="${c === active}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  $("filters").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    active = b.dataset.cat;
    $("filters").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    render();
  });
  render();

  // Skills
  $("skill-list").innerHTML = P.skills.map((s) => `<div class="skill"><h3>${esc(s.group)}</h3>${tags(s.items)}</div>`).join("");

  $("footer").textContent = `© ${new Date().getFullYear()} ${P.name}`;

  // Theme toggle (remembered per browser)
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  $("theme").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });
})();
