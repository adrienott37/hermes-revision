/* Application de révision HERMES — logique front (SPA minimaliste) */
(function () {
  "use strict";

  const app = document.getElementById("app");
  const STORAGE_KEY = "hermes-progress-v1";
  const LETTRES = ["A", "B", "C", "D", "E"];

  // Fusion des volets de la banque de questions
  const ALL_QUESTIONS = QUESTIONS.concat(QUESTIONS_EXTRA);

  // ---------- État / persistance ----------
  let state = loadState();

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { answers: {} };
    } catch (e) {
      return { answers: {} };
    }
  }
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* localStorage indisponible */ }
  }
  function recordAnswer(qid, correct, moduleId) {
    if (!state.answers[qid]) state.answers[qid] = { correct: 0, wrong: 0, module: moduleId };
    state.answers[qid][correct ? "correct" : "wrong"]++;
    saveState();
  }

  // ---------- Utilitaires ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function moduleById(id) {
    return SYLLABUS.modules.find(m => m.id === id);
  }
  function questionsOf(moduleId) {
    return ALL_QUESTIONS.filter(q => q.module === moduleId);
  }
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function moduleStats(moduleId) {
    const qs = questionsOf(moduleId);
    let seen = 0, correct = 0, total = 0;
    qs.forEach(q => {
      const a = state.answers[q.id];
      if (a) { seen++; total += a.correct + a.wrong; correct += a.correct; }
    });
    return { seen, total: qs.length, ratio: total ? Math.round(100 * correct / total) : null };
  }

  // ---------- Vues ----------
  function renderHome() {
    let cards = "";
    SYLLABUS.modules.forEach(m => {
      const st = moduleStats(m.id);
      let badge = `<span class="badge">${st.total} QCM</span>`;
      if (st.seen > 0) {
        const cls = st.ratio >= 70 ? "success" : "warn";
        badge += ` <span class="badge ${cls}">${st.ratio} % de réussite</span>`;
      }
      cards += `
        <div class="card" data-module="${m.id}">
          <h3>${m.icone} ${escapeHtml(m.nom)}</h3>
          <div class="desc">${escapeHtml(m.description)}</div>
          <div>${badge}</div>
          <div class="card-actions">
            <button class="btn small" data-fiche="${m.id}">📘 Fiche</button>
            <button class="btn small secondary" data-quiz="${m.id}">S'entraîner</button>
          </div>
        </div>`;
    });

    app.innerHTML = `
      <h1>Bienvenue sur votre révision HERMES</h1>
      <p class="subtitle">Entraînez-vous par module ou simulez l'examen européen de pneumologie adulte.
      Chaque QCM s'accompagne d'une explication et de sa source (recommandations ERS, GOLD, ESC...).</p>
      <div class="actions" style="margin-bottom:26px">
        <button class="btn" id="btn-examen">⏱️ Mode examen</button>
        <button class="btn secondary" id="btn-stats">📊 Mes statistiques</button>
        <button class="btn secondary" id="btn-aleatoire">🎲 QCM aléatoire</button>
      </div>
      <div class="grid">${cards}</div>`;
    document.querySelectorAll(".card").forEach(c =>
      c.addEventListener("click", e => {
        if (e.target.closest("button")) return;
        renderModule(c.dataset.module);
      }));
    document.querySelectorAll("[data-quiz]").forEach(b =>
      b.addEventListener("click", () => renderModule(b.dataset.quiz)));
    document.querySelectorAll("[data-fiche]").forEach(b =>
      b.addEventListener("click", () => renderFiche(b.dataset.fiche)));
    document.getElementById("btn-examen").addEventListener("click", renderExamSetup);
    document.getElementById("btn-stats").addEventListener("click", renderStats);
    document.getElementById("btn-aleatoire").addEventListener("click", () => {
      const pool = ALL_QUESTIONS.filter(q => {
        const a = state.answers[q.id];
        return !a || a.wrong > 0;
      });
      const list = pool.length ? pool : ALL_QUESTIONS;
      startQuiz(shuffle(list).slice(0, 10), "QCM aléatoire", false, null);
    });
  }

  function renderModule(moduleId) {
    const m = moduleById(moduleId);
    const qs = questionsOf(moduleId);
    let sousThemes = m.sousThemes.map(s => `<li>${escapeHtml(s)}</li>`).join("");
    let refs = m.referents.map(r => `<li>${escapeHtml(r)}</li>`).join("");

    app.innerHTML = `
      <a href="#" class="back-link" id="back">← Retour à l'accueil</a>
      <h1>${m.icone} ${escapeHtml(m.nom)}</h1>
      <p class="subtitle">${escapeHtml(m.description)}</p>
      <div class="liste-sous-themes">
        <strong>Sous-thèmes du syllabus HERMES</strong>
        <ul>${sousThemes}</ul>
        <div class="refs"><strong>Références recommandées :</strong><ul>${refs}</ul></div>
      </div>
      <div class="actions">
        <button class="btn" id="btn-start">Commencer l'entraînement (${qs.length} QCM)</button>
        <select class="filters" id="select-diff">
          <option value="0">Toutes difficultés</option>
          <option value="1">Facile</option>
          <option value="2">Intermédiaire</option>
          <option value="3">Difficile</option>
        </select>
      </div>`;
    document.getElementById("back").addEventListener("click", e => { e.preventDefault(); renderHome(); });
    document.getElementById("btn-start").addEventListener("click", () => {
      const d = parseInt(document.getElementById("select-diff").value, 10);
      const pool = d ? qs.filter(q => q.difficulte === d) : qs;
      startQuiz(shuffle(pool), m.nom + " — entraînement", false, null);
    });
  }

  function renderFiche(moduleId) {
    const m = moduleById(moduleId);
    const f = FICHES[moduleId];
    if (!f) { renderModule(moduleId); return; }
    let sectionsHtml = "";
    f.sections.forEach(sec => {
      const points = sec.points.map(p => `<li>${escapeHtml(p)}</li>`).join("");
      sectionsHtml += `
        <div class="fiche-section">
          <h2>${escapeHtml(sec.titre)}</h2>
          <ul>${points}</ul>
        </div>`;
    });
    app.innerHTML = `
      <a href="#" class="back-link" id="back">← Retour à l'accueil</a>
      <h1>📘 Fiche — ${m.icone} ${escapeHtml(m.nom)}</h1>
      <p class="subtitle">Points clés et chiffres à connaître, tirés des recommandations (ERS, GOLD, ESC...).</p>
      ${sectionsHtml}
      <div class="actions">
        <button class="btn" id="btn-quiz-module">S'entraîner sur ce module (${questionsOf(moduleId).length} QCM)</button>
        <button class="btn secondary" id="btn-back-module">Vue module</button>
      </div>`;
    document.getElementById("back").addEventListener("click", e => { e.preventDefault(); renderHome(); });
    document.getElementById("btn-quiz-module").addEventListener("click", () => {
      startQuiz(shuffle(questionsOf(moduleId)), m.nom + " — entraînement", false, null);
    });
    document.getElementById("btn-back-module").addEventListener("click", () => renderModule(moduleId));
  }

  function renderExamSetup() {
    let options = SYLLABUS.modules.map(m =>
      `<option value="${m.id}">${m.icone} ${escapeHtml(m.nom)}</option>`).join("");

    app.innerHTML = `
      <a href="#" class="back-link" id="back">← Retour à l'accueil</a>
      <div class="exam-setup">
        <h1>⏱️ Mode examen</h1>
        <p class="subtitle">Simulation type HERMES : questions enchaînées, chrono global, correction à la fin.</p>
        <label for="nb">Nombre de questions</label>
        <select class="filters" id="nb" style="width:100%">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="45">45</option>
          <option value="90" selected>90 (examen complet)</option>
        </select>
        <label for="scope">Périmètre</label>
        <select class="filters" id="scope" style="width:100%">
          <option value="all">Tous les modules</option>
          ${options}
        </select>
        <label for="minutes">Durée (minutes)</label>
        <select class="filters" id="minutes" style="width:100%">
          <option value="30">30</option>
          <option value="60">60</option>
          <option value="120" selected>120</option>
          <option value="180">180 (durée réelle)</option>
        </select>
        <p class="hint">Note : la banque compte actuellement ${ALL_QUESTIONS.length} questions ; l'examen complet piochera avec remise si nécessaire.</p>
        <div class="actions">
          <button class="btn" id="btn-go">Démarrer l'examen</button>
        </div>
      </div>`;
    document.getElementById("back").addEventListener("click", e => { e.preventDefault(); renderHome(); });
    document.getElementById("btn-go").addEventListener("click", () => {
      const n = parseInt(document.getElementById("nb").value, 10);
      const scope = document.getElementById("scope").value;
      const mins = parseInt(document.getElementById("minutes").value, 10);
      let pool = scope === "all" ? ALL_QUESTIONS.slice() : questionsOf(scope).slice();
      let picked = shuffle(pool);
      if (picked.length < n) {
        while (picked.length < n) picked = picked.concat(shuffle(pool));
        picked = picked.slice(0, n);
      } else {
        picked = picked.slice(0, n);
      }
      startQuiz(picked, "Mode examen", true, mins * 60);
    });
  }

  // ---------- Quiz ----------
  let quiz = null;
  let timerId = null;

  function startQuiz(questions, titre, examMode, seconds) {
    quiz = {
      questions, titre, examMode,
      index: 0,
      answers: new Array(questions.length).fill(null),
      start: Date.now(),
      remaining: seconds
    };
    renderQuestion();
  }

  function renderQuestion() {
    const q = quiz.questions[quiz.index];
    const isLast = quiz.index === quiz.questions.length - 1;

    let pips = "";
    if (quiz.questions.length <= 50) {
      for (let i = 0; i < quiz.questions.length; i++) {
        let cls = "pip";
        if (i === quiz.index) cls += " current";
        else if (quiz.answers[i] !== null) cls += quiz.answers[i] === true ? " ok" : " ko";
        pips += `<div class="${cls}"></div>`;
      }
    }

    let optionsHtml = "";
    q.options.forEach((opt, i) => {
      optionsHtml += `
        <div class="option" data-i="${i}">
          <span class="letter">${LETTRES[i]}</span>
          <span>${escapeHtml(opt)}</span>
        </div>`;
    });

    app.innerHTML = `
      <div class="qcm-container">
        <a href="#" class="back-link" id="quit">← Quitter (progression sauvegardée)</a>
        <div class="meta-bar">
          <span>${escapeHtml(quiz.titre)} — Question ${quiz.index + 1} / ${quiz.questions.length}</span>
          <span class="badge">${moduleById(q.module).nom}</span>
          ${quiz.remaining ? `<span class="timer" id="timer"></span>` : ""}
        </div>
        <div class="progress-tracker">${pips}</div>
        <div class="enonce">${escapeHtml(q.enonce)}</div>
        <div class="options" id="options">${optionsHtml}</div>
        <div id="feedback-zone"></div>
        <div class="actions">
          <button class="btn" id="btn-next" style="display:none">
            ${isLast ? "Voir les résultats" : "Question suivante →"}
          </button>
        </div>
      </div>`;

    document.getElementById("quit").addEventListener("click", e => {
      e.preventDefault();
      stopTimer();
      renderHome();
    });

    if (quiz.remaining) startTimer();

    if (quiz.examMode) {
      document.getElementById("options").addEventListener("click", e => {
        const el = e.target.closest(".option");
        if (!el) return;
        const i = parseInt(el.dataset.i, 10);
        quiz.answers[quiz.index] = (i === q.reponse);
        recordAnswer(q.id, i === q.reponse, q.module);
        document.querySelectorAll(".option").forEach(o => {
          o.classList.add("locked");
          o.style.pointerEvents = "none";
        });
        document.getElementById("btn-next").style.display = "";
      });
      document.getElementById("btn-next").addEventListener("click", () => {
        if (quiz.answers[quiz.index] === null) quiz.answers[quiz.index] = false;
        advance();
      });
    } else {
      document.getElementById("options").addEventListener("click", e => {
        const el = e.target.closest(".option");
        if (!el || quiz.answers[quiz.index] !== null) return;
        const chosen = parseInt(el.dataset.i, 10);
        const correct = chosen === q.reponse;
        quiz.answers[quiz.index] = correct;
        recordAnswer(q.id, correct, q.module);

        document.querySelectorAll(".option").forEach(o => {
          const i = parseInt(o.dataset.i, 10);
          o.classList.add("locked");
          if (i === q.reponse) o.classList.add("correct");
          else if (i === chosen) o.classList.add("wrong");
        });
        document.getElementById("feedback-zone").innerHTML = `
          <div class="feedback ${correct ? "ok" : "ko"}">
            <div class="verdict">${correct ? "✅ Bonne réponse !" : "❌ Réponse incorrecte — la bonne réponse est " + LETTRES[q.reponse]}</div>
            <div>${escapeHtml(q.explication)}</div>
            <div class="source">📚 Source : ${escapeHtml(q.source)}</div>
          </div>`;
        document.getElementById("btn-next").style.display = "";
      });
      document.getElementById("btn-next").addEventListener("click", advance);
    }
  }

  function advance() {
    if (quiz.index === quiz.questions.length - 1) {
      stopTimer();
      renderResults();
    } else {
      quiz.index++;
      renderQuestion();
    }
  }

  function startTimer() {
    const el = document.getElementById("timer");
    const tick = () => {
      const spent = Math.floor((Date.now() - quiz.start) / 1000);
      const left = quiz.remaining - spent;
      if (left <= 0) {
        el.textContent = "Temps écoulé !";
        el.classList.add("alarm");
        stopTimer();
        for (let i = 0; i < quiz.questions.length; i++) {
          if (quiz.answers[i] === null) quiz.answers[i] = false;
        }
        renderResults();
        return;
      }
      const mm = String(Math.floor(left / 60)).padStart(2, "0");
      const ss = String(left % 60).padStart(2, "0");
      el.textContent = `${mm}:${ss}`;
      if (left < 60) el.classList.add("alarm");
    };
    tick();
    timerId = setInterval(tick, 1000);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  function renderResults() {
    const total = quiz.questions.length;
    const score = quiz.answers.filter(a => a === true).length;
    const pct = Math.round(100 * score / total);

    let rows = "";
    const byModule = {};
    quiz.questions.forEach((q, i) => {
      if (!byModule[q.module]) byModule[q.module] = { ok: 0, n: 0 };
      byModule[q.module].n++;
      if (quiz.answers[i] === true) byModule[q.module].ok++;
    });
    Object.keys(byModule).forEach(mid => {
      const m = moduleById(mid);
      const s = byModule[mid];
      const p = Math.round(100 * s.ok / s.n);
      const cls = p >= 70 ? "" : (p >= 50 ? "mid" : "low");
      rows += `<tr>
        <td>${m.icone} ${escapeHtml(m.nom)}</td>
        <td class="bar-cell"><div class="pct-bar ${cls}" style="width:${p}%"></div>${s.ok} / ${s.n} (${p} %)</td>
      </tr>`;
    });

    const verdict = pct >= 70
      ? "Solide ! Continuez sur cette lancée."
      : pct >= 50
        ? "Base correcte — ciblez les modules les plus faibles."
        : "Il faut retravailler les modules ci-dessous, un par un.";

    app.innerHTML = `
      <div class="qcm-container">
        <div class="result-box">
          <h1>${escapeHtml(quiz.titre)} — résultats</h1>
          <div class="score-big">${score} / ${total} <small style="font-size:1.2rem">(${pct} %)</small></div>
          <p class="subtitle">${verdict}</p>
          <div class="actions" style="justify-content:center">
            <button class="btn" id="btn-accueil">Retour à l'accueil</button>
            <button class="btn secondary" id="btn-recommencer">Recommencer ce quiz</button>
          </div>
        </div>
        <h2>Détail par module</h2>
        <table class="stats">
          <tr><th>Module</th><th>Résultat</th></tr>
          ${rows}
        </table>
      </div>`;
    document.getElementById("btn-accueil").addEventListener("click", renderHome);
    document.getElementById("btn-recommencer").addEventListener("click", () => {
      startQuiz(shuffle(quiz.questions), quiz.titre, quiz.examMode, quiz.remaining);
    });
  }

  function renderStats() {
    let rows = "";
    SYLLABUS.modules.forEach(m => {
      const st = moduleStats(m.id);
      const p = st.ratio === null ? "—" : st.ratio + " %";
      const cls = st.ratio === null ? "" : (st.ratio >= 70 ? "" : (st.ratio >= 50 ? "mid" : "low"));
      const width = st.ratio === null ? 0 : st.ratio;
      rows += `<tr>
        <td>${m.icone} ${escapeHtml(m.nom)}</td>
        <td class="bar-cell"><div class="pct-bar ${cls}" style="width:${width}%"></div>${st.seen} / ${st.total} vues</td>
        <td class="bar-cell"><div class="pct-bar ${cls}" style="width:${width}%"></div>${p}</td>
      </tr>`;
    });

    const totalSeen = Object.keys(state.answers).length;
    app.innerHTML = `
      <a href="#" class="back-link" id="back">← Retour à l'accueil</a>
      <h1>📊 Mes statistiques</h1>
      <p class="subtitle">${totalSeen} question(s) travaillée(s) sur ${ALL_QUESTIONS.length}. Progression sauvegardée sur cet appareil.</p>
      <table class="stats">
        <tr><th>Module</th><th>Couverture</th><th>Réussite</th></tr>
        ${rows}
      </table>
      <div class="actions">
        <button class="btn danger" id="btn-reset">Réinitialiser ma progression</button>
      </div>`;
    document.getElementById("back").addEventListener("click", e => { e.preventDefault(); renderHome(); });
    document.getElementById("btn-reset").addEventListener("click", () => {
      if (confirm("Effacer toute votre progression ?")) {
        state = { answers: {} };
        saveState();
        renderStats();
      }
    });
  }

  // ---------- Init ----------
  document.getElementById("brand").addEventListener("click", e => {
    e.preventDefault();
    stopTimer();
    renderHome();
  });
  renderHome();
})();
