/* HERMES v2 — Application : login multi-utilisateur, moteur A/K-prime, scoring officiel */
(function () {
  "use strict";

  const app = document.getElementById("app");
  const LETTRES = ["A", "B", "C", "D", "E"];
  const ALL_QUESTIONS = QUESTIONS_V2;
  const STORE_USERS = "hermes-users-v2";
  const STORE_SESSION = "hermes-session-v2";

  // ---------- Comptes utilisateurs (localStorage) ----------
  let users = loadUsers();
  let currentUser = localStorage.getItem(STORE_SESSION) || null;

  function loadUsers() {
    try { return JSON.parse(localStorage.getItem(STORE_USERS)) || {}; }
    catch (e) { return {}; }
  }
  function saveUsers() { localStorage.setItem(STORE_USERS, JSON.stringify(users)); }

  function hashPw(pw) {
    // hash simple (non cryptographique — usage pédagogique local)
    let h = 0;
    for (let i = 0; i < pw.length; i++) { h = (h << 5) - h + pw.charCodeAt(i); h |= 0; }
    return String(h);
  }

  function userState() {
    if (!currentUser || !users[currentUser]) return null;
    if (!users[currentUser].progress) users[currentUser].progress = { answers: {} };
    return users[currentUser];
  }
  function recordAnswer(qid, points, maxPoints, moduleId) {
    const u = userState(); if (!u) return;
    if (!u.progress.answers[qid]) u.progress.answers[qid] = { pts: 0, max: 0, module: moduleId, n: 0 };
    const a = u.progress.answers[qid];
    a.pts = points; a.max = maxPoints; a.n++;
    saveUsers();
  }

  // ---------- Utilitaires ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function moduleById(id) { return SYLLABUS.modules.find(m => m.id === id); }
  function questionsOf(moduleId) { return ALL_QUESTIONS.filter(q => q.module === moduleId); }
  function escapeHtml(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function nl2br(s) { return escapeHtml(s).replace(/\n/g, "<br>"); }
  function moduleStats(moduleId) {
    const qs = questionsOf(moduleId);
    let seen = 0, pts = 0, max = 0;
    qs.forEach(q => {
      const u = userState();
      const a = u && u.progress.answers[q.id];
      if (a) { seen++; pts += a.pts; max += a.max; }
    });
    return { seen, total: qs.length, ratio: max ? Math.round(100 * pts / max) : null };
  }

  // ---------- Écran de connexion ----------
  function renderLogin() {
    app.innerHTML = `
      <div class="login-box">
        <div class="login-logo">🫁</div>
        <h1>Révision HERMES</h1>
        <p class="subtitle">Pneumologie adulte — plateforme de préparation à l'examen ERS</p>
        <div id="login-form">
          <h2>${modeLogin ? "Connexion" : "Créer un compte"}</h2>
          <label>Nom d'utilisateur</label>
          <input type="text" id="login-user" placeholder="Dr Nom" autocomplete="username">
          <label>Mot de passe</label>
          <input type="password" id="login-pw" placeholder="••••••••" autocomplete="current-password">
          <div id="login-error" class="login-error"></div>
          <button class="btn" id="btn-login" style="width:100%;margin-top:12px">${modeLogin ? "Se connecter" : "Créer le compte"}</button>
          <p class="login-switch">${modeLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
            <a href="#" id="switch-mode">${modeLogin ? "Créer un compte" : "Se connecter"}</a></p>
        </div>
        <p class="login-note">Vos statistiques de progression sont enregistrées sur cet appareil, par utilisateur.</p>
      </div>`;
    document.getElementById("btn-login").addEventListener("click", tryLogin);
    document.getElementById("login-pw").addEventListener("keydown", e => { if (e.key === "Enter") tryLogin(); });
    document.getElementById("switch-mode").addEventListener("click", e => {
      e.preventDefault(); modeLogin = !modeLogin; renderLogin();
    });
  }
  let modeLogin = true;
  function tryLogin() {
    const name = document.getElementById("login-user").value.trim();
    const pw = document.getElementById("login-pw").value;
    const err = document.getElementById("login-error");
    if (!name || !pw) { err.textContent = "Nom d'utilisateur et mot de passe requis."; return; }
    if (modeLogin) {
      if (!users[name]) { err.textContent = "Utilisateur inconnu. Créez un compte."; return; }
      if (users[name].pw !== hashPw(pw)) { err.textContent = "Mot de passe incorrect."; return; }
      currentUser = name; localStorage.setItem(STORE_SESSION, name);
      renderHome();
    } else {
      if (users[name]) { err.textContent = "Ce nom existe déjà. Connectez-vous."; return; }
      users[name] = { pw: hashPw(pw), progress: { answers: {} }, created: Date.now() };
      saveUsers();
      currentUser = name; localStorage.setItem(STORE_SESSION, name);
      renderHome();
    }
  }
  function logout() {
    currentUser = null; localStorage.removeItem(STORE_SESSION);
    renderLogin();
  }

  // ---------- Barre d'en-tête ----------
  function headerBar() {
    return `<div class="user-bar">
      <span>Bonjour, <strong>${escapeHtml(currentUser)}</strong></span>
      <button class="btn small secondary" id="btn-logout">Déconnexion</button>
    </div>`;
  }
  function bindHeader() {
    document.getElementById("btn-logout").addEventListener("click", logout);
  }

  // ---------- Accueil ----------
  function renderHome() {
    let cards = "";
    SYLLABUS.modules.forEach(m => {
      const st = moduleStats(m.id);
      const nQ = st.total;
      let badge = nQ ? `<span class="badge">${nQ} QCM</span>` : `<span class="badge muted">bientôt</span>`;
      if (st.seen > 0 && st.ratio !== null) {
        const cls = st.ratio >= 70 ? "success" : "warn";
        badge += ` <span class="badge ${cls}">${st.ratio} %</span>`;
      }
      cards += `
        <div class="card" data-module="${m.id}">
          <h3>${m.icone} M${m.id.slice(1)} · ${escapeHtml(m.nom)}</h3>
          <div>${badge}</div>
          <div class="card-actions">
            <button class="btn small" data-fiche="${m.id}" ${nQ ? "" : "disabled"}>📘 Fiche</button>
            <button class="btn small secondary" data-quiz="${m.id}" ${nQ ? "" : "disabled"}>S'entraîner</button>
          </div>
        </div>`;
    });

    app.innerHTML = `
      ${headerBar()}
      <h1>Révision HERMES — Pneumologie adulte</h1>
      <p class="subtitle">Les 20 modules du syllabus ERS (Breathe 2018). Questions aux formats officiels de l'examen :
      Type A (5 options, 1 correcte) et K-prime (4 options, 0-4 correctes ; 4 correctes = 1 pt, 3 = 0,5 pt, pas de pénalité).
      Corrections détaillées avec liens vers les recommandations les plus récentes.</p>
      <div class="actions" style="margin-bottom:24px">
        <button class="btn" id="btn-examen">⏱️ Mode examen (90 Q / 3 h)</button>
        <button class="btn secondary" id="btn-stats">📊 Mes statistiques</button>
        <button class="btn secondary" id="btn-aleatoire">🎲 10 questions aléatoires</button>
      </div>
      <div class="grid">${cards}</div>`;
    bindHeader();
    document.querySelectorAll(".card").forEach(c =>
      c.addEventListener("click", e => {
        if (e.target.closest("button")) return;
        if (questionsOf(c.dataset.module).length) renderModule(c.dataset.module);
      }));
    document.querySelectorAll("[data-quiz]").forEach(b =>
      b.addEventListener("click", () => startQuiz(shuffle(questionsOf(b.dataset.quiz)), "Module " + b.dataset.quiz.toUpperCase(), false, null)));
    document.querySelectorAll("[data-fiche]").forEach(b =>
      b.addEventListener("click", () => renderFiche(b.dataset.fiche)));
    document.getElementById("btn-examen").addEventListener("click", renderExamSetup);
    document.getElementById("btn-stats").addEventListener("click", renderStats);
    document.getElementById("btn-aleatoire").addEventListener("click", () => {
      const pool = ALL_QUESTIONS.filter(q => {
        const u = userState(); const a = u && u.progress.answers[q.id];
        return !a || a.pts < a.max;
      });
      const list = pool.length ? pool : ALL_QUESTIONS;
      startQuiz(shuffle(list).slice(0, 10), "Questions aléatoires", false, null);
    });
  }

  // ---------- Vue module ----------
  function renderModule(moduleId) {
    const m = moduleById(moduleId);
    const qs = questionsOf(moduleId);
    const f = FICHES_V2[moduleId];
    let sous = m.sousThemes.map(s => `<li>${escapeHtml(s)}</li>`).join("");
    let srcs = (m.sources || []).map(s => `<li><a href="${s.l}" target="_blank" rel="noopener">${escapeHtml(s.t)}</a></li>`).join("");

    app.innerHTML = `
      ${headerBar()}
      <a href="#" class="back-link" id="back">← Accueil</a>
      <h1>${m.icone} Module ${m.id.slice(1)} — ${escapeHtml(m.nom)}</h1>
      <div class="liste-sous-themes">
        <strong>Items du syllabus</strong>
        <ul>${sous}</ul>
        <div class="refs"><strong>Sources officielles :</strong><ul>${srcs}</ul></div>
      </div>
      <div class="actions">
        <button class="btn" id="btn-start" ${qs.length ? "" : "disabled"}>Entraînement (${qs.length} QCM)</button>
        ${f ? `<button class="btn secondary" id="btn-fiche">📘 Fiche de cours</button>` : ""}
      </div>`;
    bindHeader();
    document.getElementById("back").addEventListener("click", e => { e.preventDefault(); renderHome(); });
    if (qs.length) document.getElementById("btn-start").addEventListener("click", () =>
      startQuiz(shuffle(qs), "Module " + m.id.slice(1), false, null));
    if (f) document.getElementById("btn-fiche").addEventListener("click", () => renderFiche(moduleId));
  }

  // ---------- Fiche de cours ----------
  function renderFiche(moduleId) {
    const m = moduleById(moduleId);
    const f = FICHES_V2[moduleId];
    if (!f) { renderModule(moduleId); return; }
    let sections = "";
    f.sections.forEach(sec => {
      sections += `<div class="fiche-section"><h2>${escapeHtml(sec.titre)}</h2><ul>${sec.points.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul></div>`;
    });
    let srcs = "";
    if (f.sources && f.sources.length) {
      srcs = `<div class="fiche-section refs"><strong>📚 Sources :</strong><ul>${f.sources.map(s => `<li><a href="${s.l}" target="_blank" rel="noopener">${escapeHtml(s.t)}</a></li>`).join("")}</ul></div>`;
    }
    app.innerHTML = `
      ${headerBar()}
      <a href="#" class="back-link" id="back">← Accueil</a>
      <h1>📘 ${m.icone} ${escapeHtml(f.titre)}</h1>
      <p class="subtitle">Points clés et chiffres à connaître — d'après les recommandations les plus récentes.</p>
      ${sections}
      ${srcs}
      <div class="actions">
        <button class="btn" id="btn-quiz">S'entraîner sur ce module (${questionsOf(moduleId).length} QCM)</button>
        <button class="btn secondary" id="btn-module">Vue module</button>
      </div>`;
    bindHeader();
    document.getElementById("back").addEventListener("click", e => { e.preventDefault(); renderHome(); });
    document.getElementById("btn-quiz").addEventListener("click", () =>
      startQuiz(shuffle(questionsOf(moduleId)), "Module " + m.id.slice(1), false, null));
    document.getElementById("btn-module").addEventListener("click", () => renderModule(moduleId));
  }

  // ---------- Mode examen ----------
  function renderExamSetup() {
    app.innerHTML = `
      ${headerBar()}
      <a href="#" class="back-link" id="back">← Accueil</a>
      <div class="exam-setup">
        <h1>⏱️ Mode examen</h1>
        <p class="subtitle">Simulation type HERMES : 90 QCM, 3 heures, questions Type A et K-prime, pas de pénalité.
        La banque compte actuellement ${ALL_QUESTIONS.length} questions : un examen complet piochera avec répétitions.</p>
        <label>Nombre de questions</label>
        <select class="filters" id="nb" style="width:100%">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40" selected>40</option>
          <option value="90">90 (format réel)</option>
        </select>
        <label>Périmètre</label>
        <select class="filters" id="scope" style="width:100%">
          <option value="all">Tous les modules</option>
          ${SYLLABUS.modules.map(m => `<option value="${m.id}">${m.icone} ${escapeHtml(m.nom)}</option>`).join("")}
        </select>
        <label>Durée (minutes)</label>
        <select class="filters" id="minutes" style="width:100%">
          <option value="30">30</option>
          <option value="60">60</option>
          <option value="90">90</option>
          <option value="180" selected>180 (durée réelle)</option>
        </select>
        <div class="actions"><button class="btn" id="btn-go">Démarrer l'examen</button></div>
      </div>`;
    bindHeader();
    document.getElementById("back").addEventListener("click", e => { e.preventDefault(); renderHome(); });
    document.getElementById("btn-go").addEventListener("click", () => {
      const n = parseInt(document.getElementById("nb").value, 10);
      const scope = document.getElementById("scope").value;
      const mins = parseInt(document.getElementById("minutes").value, 10);
      let pool = scope === "all" ? ALL_QUESTIONS.slice() : questionsOf(scope).slice();
      let picked = shuffle(pool);
      while (picked.length < n) picked = picked.concat(shuffle(pool));
      startQuiz(picked.slice(0, n), "Mode examen", true, mins * 60);
    });
  }

  // ---------- Quiz ----------
  let quiz = null, timerId = null;

  function startQuiz(questions, titre, examMode, seconds) {
    if (!questions.length) { alert("Aucune question disponible pour ce périmètre."); return; }
    quiz = {
      questions, titre, examMode, index: 0,
      answers: questions.map(q => null), // null = sans réponse ; sinon {points, max}
      start: Date.now(), remaining: seconds
    };
    renderQuestion();
  }

  function renderQuestion() {
    const q = quiz.questions[quiz.index];
    const isLast = quiz.index === quiz.questions.length - 1;
    const m = moduleById(q.module);

    let pips = "";
    if (quiz.questions.length <= 40) {
      for (let i = 0; i < quiz.questions.length; i++) {
        let cls = "pip";
        if (i === quiz.index) cls += " current";
        else if (quiz.answers[i] !== null) cls += quiz.answers[i].points >= quiz.answers[i].max ? " ok" : " ko";
        pips += `<div class="${cls}"></div>`;
      }
    }

    let body = "";
    if (q.format === "A") {
      body = `<div class="options" id="options">${q.options.map((o, i) => `
        <div class="option" data-i="${i}">
          <span class="letter">${LETTRES[i]}</span><span>${escapeHtml(o)}</span>
        </div>`).join("")}</div>`;
    } else {
      // K-prime : pour chaque option, deux boutons + / −
      body = `<div class="options" id="options">${q.options.map((o, i) => `
        <div class="option k-option" data-i="${i}">
          <span class="letter">${LETTRES[i]}</span>
          <span class="opt-text">${escapeHtml(o)}</span>
          <span class="k-btns">
            <button class="k-btn" data-i="${i}" data-v="true">+</button>
            <button class="k-btn" data-i="${i}" data-v="false">−</button>
          </span>
        </div>`).join("")}</div>`;
    }

    app.innerHTML = `
      ${headerBar()}
      <div class="qcm-container">
        <a href="#" class="back-link" id="quit">← Quitter (progression enregistrée)</a>
        <div class="meta-bar">
          <span>${escapeHtml(quiz.titre)} · Question ${quiz.index + 1} / ${quiz.questions.length}
            · <span class="badge">${q.format === "A" ? "Type A" : "K-prime"}</span></span>
          <span class="badge">${m.icone} ${escapeHtml(m.nom)}</span>
          ${quiz.remaining ? `<span class="timer" id="timer"></span>` : ""}
        </div>
        <div class="progress-tracker">${pips}</div>
        <div class="enonce">${escapeHtml(q.enonce)}
          ${q.format === "K" ? `<div class="k-hint">Pour chaque option : <strong>+</strong> = vraie, <strong>−</strong> = fausse. 4 correctes = 1 pt, 3 = 0,5 pt.</div>` : ""}
        </div>
        ${body}
        <div id="feedback-zone"></div>
        <div class="actions">
          <button class="btn" id="btn-next" style="display:none">${isLast ? "Voir les résultats" : "Question suivante →"}</button>
        </div>
      </div>`;
    bindHeader();
    document.getElementById("quit").addEventListener("click", e => { e.preventDefault(); stopTimer(); renderHome(); });
    if (quiz.remaining) startTimer();

    if (q.format === "A") {
      document.getElementById("options").addEventListener("click", e => {
        const el = e.target.closest(".option");
        if (!el || quiz.answers[quiz.index] !== null) return;
        const chosen = parseInt(el.dataset.i, 10);
        const correct = chosen === q.reponse;
        quiz.answers[quiz.index] = { points: correct ? 1 : 0, max: 1 };
        recordAnswer(q.id, correct ? 1 : 0, 1, q.module);
        document.querySelectorAll(".option").forEach(o => {
          const i = parseInt(o.dataset.i, 10);
          o.classList.add("locked");
          if (i === q.reponse) o.classList.add("correct");
          else if (i === chosen) o.classList.add("wrong");
        });
        showFeedback(q, correct ? 1 : 0, 1, q.format === "A" ? LETTRES[q.reponse] : null);
        document.getElementById("btn-next").style.display = "";
      });
    } else {
      const marks = {}; // i -> "true"/"false"
      document.querySelectorAll(".k-btn").forEach(b => {
        b.addEventListener("click", () => {
          if (quiz.answers[quiz.index] !== null) return;
          const i = b.dataset.i, v = b.dataset.v;
          if (marks[i] === v) { delete marks[i]; b.classList.remove("selected"); }
          else {
            if (marks[i]) document.querySelectorAll(`.k-btn[data-i="${i}"]`).forEach(x => x.classList.remove("selected"));
            marks[i] = v; b.classList.add("selected");
          }
          // quand les 4 sont marquées : valider
          if (Object.keys(marks).length === 4) {
            let good = 0;
            q.reponse.forEach((ans, idx) => {
              const user = marks[String(idx)] === "true";
              if (user === ans) good++;
            });
            const pts = good === 4 ? 1 : (good === 3 ? 0.5 : 0);
            quiz.answers[quiz.index] = { points: pts, max: 1 };
            recordAnswer(q.id, pts, 1, q.module);
            document.querySelectorAll(".k-btn").forEach(x => x.classList.add("locked"));
            // montrer les bonnes réponses
            q.reponse.forEach((ans, idx) => {
              const opt = document.querySelector(`.k-option[data-i="${idx}"]`);
              if (ans) opt.classList.add("correct");
              else opt.classList.add("wrong");
            });
            showFeedback(q, pts, 1, null);
            document.getElementById("btn-next").style.display = "";
          }
        });
      });
    }
    document.getElementById("btn-next").addEventListener("click", advance);
  }

  function showFeedback(q, pts, max, lettre) {
    const zone = document.getElementById("feedback-zone");
    const ok = pts >= max;
    const verdict = q.format === "A"
      ? (ok ? `✅ Bonne réponse !` : `❌ Réponse incorrecte — la bonne réponse est ${lettre}.`)
      : (pts === 1 ? `✅ 4/4 — 1 point !` : pts === 0.5 ? `🟡 3/4 — 0,5 point` : `❌ ${Math.round(pts * 4)}/4 ou moins — 0 point. Réponses : ${q.reponse.map((r, i) => (r ? "+" : "−") + LETTRES[i]).join(" ")}`);
    zone.innerHTML = `
      <div class="feedback ${ok ? "ok" : "ko"}">
        <div class="verdict">${verdict}</div>
        <div>${nl2br(q.correction)}</div>
        <div class="source">📚 Source : <a href="${q.source.l}" target="_blank" rel="noopener">${escapeHtml(q.source.t)}</a></div>
      </div>`;
  }

  function advance() {
    if (quiz.index === quiz.questions.length - 1) { stopTimer(); renderResults(); }
    else { quiz.index++; renderQuestion(); }
  }

  function startTimer() {
    const el = document.getElementById("timer");
    const tick = () => {
      const spent = Math.floor((Date.now() - quiz.start) / 1000);
      const left = quiz.remaining - spent;
      if (left <= 0) {
        el.textContent = "Temps écoulé !"; el.classList.add("alarm"); stopTimer();
        for (let i = 0; i < quiz.answers.length; i++) if (quiz.answers[i] === null) quiz.answers[i] = { points: 0, max: 1 };
        renderResults(); return;
      }
      const mm = String(Math.floor(left / 60)).padStart(2, "0");
      const ss = String(left % 60).padStart(2, "0");
      el.textContent = `${mm}:${ss}`;
      if (left < 60) el.classList.add("alarm");
    };
    tick(); timerId = setInterval(tick, 1000);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  function renderResults() {
    const total = quiz.questions.length;
    let score = 0, max = 0;
    quiz.answers.forEach(a => { if (a) { score += a.points; max += a.max; } });
    const pct = max ? Math.round(100 * score / max) : 0;
    const unanswered = quiz.answers.filter(a => a === null).length;

    const byModule = {};
    quiz.questions.forEach((q, i) => {
      if (!byModule[q.module]) byModule[q.module] = { pts: 0, max: 0, n: 0 };
      byModule[q.module].n++;
      byModule[q.module].max++;
      if (quiz.answers[i]) byModule[q.module].pts += quiz.answers[i].points;
    });
    let rows = "";
    Object.keys(byModule).forEach(mid => {
      const m = moduleById(mid); const s = byModule[mid];
      const p = Math.round(100 * s.pts / s.max);
      const cls = p >= 70 ? "" : (p >= 50 ? "mid" : "low");
      rows += `<tr><td>${m.icone} ${escapeHtml(m.nom)}</td>
        <td class="bar-cell"><div class="pct-bar ${cls}" style="width:${p}%"></div>${s.pts.toFixed(1).replace(".0", "")} / ${s.max} (${p} %)</td></tr>`;
    });

    app.innerHTML = `
      ${headerBar()}
      <div class="qcm-container">
        <div class="result-box">
          <h1>${escapeHtml(quiz.titre)} — résultats</h1>
          <div class="score-big">${score.toFixed(1).replace(".0", "")} <small>/ ${max} (${pct} %)</small></div>
          ${unanswered ? `<p class="subtitle">${unanswered} question(s) sans réponse (comptées 0, comme à l'examen)</p>` : ""}
          <p class="subtitle">${pct >= 70 ? "Solide ! Continuez." : pct >= 50 ? "Base correcte — ciblez les modules faibles." : "Retravaillez les modules ci-dessous avec les fiches."}</p>
          <div class="actions" style="justify-content:center">
            <button class="btn" id="btn-accueil">Accueil</button>
            <button class="btn secondary" id="btn-fiches">📘 Fiches de cours</button>
          </div>
        </div>
        <h2>Détail par module</h2>
        <table class="stats"><tr><th>Module</th><th>Résultat</th></tr>${rows}</table>
      </div>`;
    bindHeader();
    document.getElementById("btn-accueil").addEventListener("click", renderHome);
    document.getElementById("btn-fiches").addEventListener("click", () => renderFicheList());
  }

  // ---------- Liste des fiches ----------
  function renderFicheList() {
    let items = "";
    SYLLABUS.modules.forEach(m => {
      const f = FICHES_V2[m.id];
      if (!f) return;
      items += `<div class="card" data-fiche="${m.id}">
        <h3>${m.icone} ${escapeHtml(f.titre)}</h3>
        <div class="desc">${f.sections.length} section(s) · ${(m.sources || []).length} source(s)</div>
        <div><span class="badge">📘 Fiche</span></div>
      </div>`;
    });
    app.innerHTML = `
      ${headerBar()}
      <a href="#" class="back-link" id="back">← Accueil</a>
      <h1>📘 Fiches de cours</h1>
      <p class="subtitle">Points clés et chiffres des recommandations, module par module.</p>
      <div class="grid">${items}</div>`;
    bindHeader();
    document.getElementById("back").addEventListener("click", e => { e.preventDefault(); renderHome(); });
    document.querySelectorAll("[data-fiche]").forEach(c =>
      c.addEventListener("click", () => renderFiche(c.dataset.fiche)));
  }

  // ---------- Statistiques ----------
  function renderStats() {
    const u = userState();
    if (!u) { renderLogin(); return; }
    let rows = "";
    SYLLABUS.modules.forEach(m => {
      const st = moduleStats(m.id);
      const p = st.ratio === null ? "—" : st.ratio + " %";
      const cls = st.ratio === null ? "" : (st.ratio >= 70 ? "" : (st.ratio >= 50 ? "mid" : "low"));
      const width = st.ratio === null ? 0 : st.ratio;
      rows += `<tr><td>${m.icone} ${escapeHtml(m.nom)}</td>
        <td class="bar-cell"><div class="pct-bar ${cls}" style="width:${width}%"></div>${st.seen} / ${st.total} vues</td>
        <td class="bar-cell"><div class="pct-bar ${cls}" style="width:${width}%"></div>${p}</td></tr>`;
    });
    const totalSeen = Object.keys(u.progress.answers).length;
    app.innerHTML = `
      ${headerBar()}
      <a href="#" class="back-link" id="back">← Accueil</a>
      <h1>📊 Mes statistiques</h1>
      <p class="subtitle">${escapeHtml(currentUser)} — ${totalSeen} question(s) travaillée(s) sur ${ALL_QUESTIONS.length}.</p>
      <table class="stats"><tr><th>Module</th><th>Couverture</th><th>Réussite</th></tr>${rows}</table>`;
    bindHeader();
    document.getElementById("back").addEventListener("click", e => { e.preventDefault(); renderHome(); });
  }

  // ---------- Init ----------
  document.getElementById("brand").addEventListener("click", e => {
    e.preventDefault();
    stopTimer();
    if (currentUser) renderHome(); else renderLogin();
  });
  if (currentUser && users[currentUser]) renderHome(); else renderLogin();
})();
