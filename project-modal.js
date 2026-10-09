"use strict";
/* Reusable project detail modal for index.html and projects.html.
   Native <dialog>; Escape/backdrop close; focus restore; scroll
   lock; #project=<id> deep links without creating detail pages. */
(function () {
  var lastTrigger = null;

  function projects() {
    return Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  }

  function find(id) {
    return projects().find(function (p) { return p.id === id; }) || null;
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function ensureDialog() {
    var dlg = document.getElementById("project-modal");
    if (dlg) return dlg;
    dlg = document.createElement("dialog");
    dlg.id = "project-modal";
    dlg.setAttribute("aria-labelledby", "project-modal-title");
    dlg.innerHTML =
      '<div class="modal-inner">' +
      '<div class="modal-head"><h2 id="project-modal-title"></h2>' +
      '<button type="button" class="modal-close" data-close aria-label="Close project details">Close</button></div>' +
      '<div class="modal-body"></div></div>';
    document.body.appendChild(dlg);
    dlg.addEventListener("click", function (ev) {
      if (ev.target === dlg) close();
    });
    dlg.querySelector("[data-close]").addEventListener("click", close);
    dlg.addEventListener("close", function () {
      document.body.style.overflow = "";
      if (window.location.hash.indexOf("#project=") === 0) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
      lastTrigger = null;
    });
    return dlg;
  }

  function bodyHtml(p) {
    var h = "";
    if (p.role) h += "<p><strong>Role:</strong> " + esc(p.role) + "</p>";
    if (p.period) h += "<p><strong>Period:</strong> " + esc(p.period) + "</p>";
    if (p.context) h += "<p>" + esc(p.context) + "</p>";
    if (p.image) {
      h += '<img src="' + esc(p.image.src) + '" alt="' + esc(p.image.alt) + '"' +
        (p.image.width ? ' width="' + p.image.width + '"' : "") +
        (p.image.height ? ' height="' + p.image.height + '"' : "") +
        ' loading="lazy" onerror="this.remove()">';
    }
    if (p.contribution && p.contribution.length) {
      h += "<h3>My contribution</h3><ul>";
      p.contribution.forEach(function (c) { h += "<li>" + esc(c) + "</li>"; });
      h += "</ul>";
    }
    if (p.stack && p.stack.length) {
      h += '<h3>Technologies</h3><div class="stack-row">';
      p.stack.forEach(function (s) { h += "<span>" + esc(s) + "</span>"; });
      h += "</div>";
    }
    if (p.urls && p.urls.length) {
      h += "<h3>Links</h3><ul>";
      p.urls.forEach(function (u) {
        h += '<li><a href="' + esc(u.href) + '" target="_blank" rel="noreferrer">' + esc(u.label) + "</a></li>";
      });
      h += "</ul>";
    }
    if (p.notes && p.notes.length) {
      p.notes.forEach(function (n) { h += '<p class="modal-note">' + esc(n) + "</p>"; });
    }
    return h;
  }

  function open(id, trigger) {
    var p = find(id);
    if (!p) return false;
    var dlg = ensureDialog();
    lastTrigger = trigger || document.activeElement;
    dlg.querySelector("#project-modal-title").textContent = p.name;
    dlg.querySelector(".modal-body").innerHTML = bodyHtml(p);
    document.body.style.overflow = "hidden";
    if (!dlg.open) dlg.showModal();
    dlg.querySelector(".modal-close").focus();
    if (window.location.hash !== "#project=" + p.id) {
      history.replaceState(null, "", "#project=" + p.id);
    }
    return true;
  }

  function close() {
    var dlg = document.getElementById("project-modal");
    if (dlg && dlg.open) dlg.close();
  }

  function bind(root) {
    (root || document).querySelectorAll("[data-project-id]").forEach(function (btn) {
      if (btn.__projectBound) return;
      btn.__projectBound = true;
      btn.addEventListener("click", function () { open(btn.getAttribute("data-project-id"), btn); });
    });
  }

  function openFromHash() {
    var m = window.location.hash.match(/^#project=([A-Za-z0-9-]*)/);
    if (m && find(m[1])) open(m[1], null);
    else if (m) history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  document.addEventListener("DOMContentLoaded", function () {
    ensureDialog();
    bind(document);
    openFromHash();
  });
  window.addEventListener("hashchange", openFromHash);

  window.ProjectModal = { open: open, close: close, bind: bind };
})();
