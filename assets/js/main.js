const dictionaries = {
  zh: {
    "nav.aria": "主导航",
    "tools.aria": "站点工具",
    "nav.home": "首页",
    "nav.posts": "文章",
    "nav.embedded": "嵌入式 Linux",
    "nav.c": "C 语言",
    "nav.ai": "AI",
    "nav.research": "研究课题",
    "nav.projects": "项目",
    "nav.about": "关于",
    "tools.language": "语言",
    "tools.theme": "主题",
    "theme.light": "亮色",
    "theme.dark": "暗色",
    "search.button": "搜索",
    "search.title": "站内搜索",
    "search.label": "关键词",
    "search.placeholder": "搜索文章、栏目、标签",
    "search.hint": "输入关键词后显示匹配内容。",
    "search.loading": "正在加载搜索索引...",
    "search.empty": "没有找到匹配内容。",
    "search.count": "找到 {count} 条结果。",
    "search.error": "搜索索引加载失败。",
    "home.description": "记录嵌入式 Linux、C 语言、AI、研究课题、技术实践和长期写作。",
    "home.readPosts": "阅读文章",
    "home.aboutAuthor": "了解作者",
    "home.latest": "最新内容",
    "home.topics": "写作方向",
    "profile.eyebrow": "个人信息",
    "profile.role": "嵌入式 Linux / C 语言 / AI / 研究课题记录者",
    "profile.email": "邮箱",
    "profile.education": "教育经历",
    "profile.educationValue": "电子信息与计算机系统方向学习经历",
    "profile.motto": "座右铭",
    "profile.mottoValue": "把复杂问题拆小，把长期积累写清楚。",
    "columns.title": "主栏目与子栏目",
    "sub.embedded.boot": "启动与系统构建",
    "sub.embedded.drivers": "驱动与设备树",
    "sub.embedded.debug": "调试与性能",
    "sub.c.pointer": "指针与内存",
    "sub.c.module": "模块与接口",
    "sub.c.debug": "调试与质量",
    "sub.ai.model": "模型基础",
    "sub.ai.prompt": "提示词与智能体",
    "sub.ai.engineering": "AI 工程实践",
    "sub.research.topic": "选题与文献",
    "sub.research.experiment": "实验与复现",
    "sub.research.writing": "写作与复盘",
    "meta.readingTimePrefix": "约",
    "meta.readingTimeSuffix": "分钟",
    "meta.pageViews": "本文阅读",
    "meta.totalViews": "本站累计阅读",
    "meta.times": "次",
    "code.copy": "复制",
    "code.copied": "已复制"
  },
  en: {
    "nav.aria": "Main navigation",
    "tools.aria": "Site tools",
    "nav.home": "Home",
    "nav.posts": "Posts",
    "nav.embedded": "Embedded Linux",
    "nav.c": "C Language",
    "nav.ai": "AI",
    "nav.research": "Research",
    "nav.projects": "Projects",
    "nav.about": "About",
    "tools.language": "Language",
    "tools.theme": "Theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "search.button": "Search",
    "search.title": "Site Search",
    "search.label": "Keywords",
    "search.placeholder": "Search posts, columns, and tags",
    "search.hint": "Type keywords to search content.",
    "search.loading": "Loading search index...",
    "search.empty": "No matching content found.",
    "search.count": "{count} results found.",
    "search.error": "Failed to load search index.",
    "home.description": "Notes on Embedded Linux, C language, AI, research topics, engineering practice, and long-term writing.",
    "home.readPosts": "Read Posts",
    "home.aboutAuthor": "About",
    "home.latest": "Latest",
    "home.topics": "Topics",
    "profile.eyebrow": "Profile",
    "profile.role": "Embedded Linux / C language / AI / research topic writer",
    "profile.email": "Email",
    "profile.education": "Education",
    "profile.educationValue": "Learning experience in electronic information and computer systems",
    "profile.motto": "Motto",
    "profile.mottoValue": "Break complex problems down, and write long-term learning clearly.",
    "columns.title": "Main Columns and Subcolumns",
    "sub.embedded.boot": "Boot and System Build",
    "sub.embedded.drivers": "Drivers and Device Tree",
    "sub.embedded.debug": "Debugging and Performance",
    "sub.c.pointer": "Pointers and Memory",
    "sub.c.module": "Modules and Interfaces",
    "sub.c.debug": "Debugging and Quality",
    "sub.ai.model": "Model Basics",
    "sub.ai.prompt": "Prompts and Agents",
    "sub.ai.engineering": "AI Engineering",
    "sub.research.topic": "Topics and Literature",
    "sub.research.experiment": "Experiments and Reproduction",
    "sub.research.writing": "Writing and Review",
    "meta.readingTimePrefix": "About",
    "meta.readingTimeSuffix": "min read",
    "meta.pageViews": "Article reads",
    "meta.totalViews": "Total reads",
    "meta.times": "times",
    "code.copy": "Copy",
    "code.copied": "Copied"
  }
};

const getLang = () => localStorage.getItem("lang") || "zh";
const getTheme = () => localStorage.getItem("theme") || "light";
let searchIndexPromise;

function applyLanguage(lang) {
  const dict = dictionaries[lang] || dictionaries.zh;
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === "en" ? "en" : "zh-cn";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    node.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((part) => part.trim());
      if (attr && key && dict[key]) node.setAttribute(attr, dict[key]);
    });
  });

  const langCurrent = document.querySelector("[data-lang-current]");
  if (langCurrent) langCurrent.textContent = lang === "en" ? "EN" : "中";

  const langSelect = document.querySelector("[data-lang-select]");
  if (langSelect) langSelect.value = lang;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const themeCurrent = document.querySelector("[data-theme-current]");
  if (themeCurrent) themeCurrent.textContent = theme === "dark" ? "暗" : "亮";

  const themeSelect = document.querySelector("[data-theme-select]");
  if (themeSelect) themeSelect.value = theme;
}

function setupControls() {
  const langSelect = document.querySelector("[data-lang-select]");
  if (langSelect) {
    langSelect.addEventListener("change", () => {
      localStorage.setItem("lang", langSelect.value);
      applyLanguage(langSelect.value);
    });
  }

  const themeSelect = document.querySelector("[data-theme-select]");
  if (themeSelect) {
    themeSelect.addEventListener("change", () => {
      localStorage.setItem("theme", themeSelect.value);
      applyTheme(themeSelect.value);
    });
  }
}

function getText(key, params = {}) {
  const dict = dictionaries[getLang()] || dictionaries.zh;
  return (dict[key] || key).replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeSearchText(value) {
  return String(value || "").toLowerCase().trim();
}

function loadSearchIndex(panel) {
  if (!searchIndexPromise) {
    const indexUrl = panel.dataset.searchIndex || "/index.json";
    searchIndexPromise = fetch(indexUrl).then((response) => {
      if (!response.ok) throw new Error("Search index request failed");
      return response.json();
    });
  }
  return searchIndexPromise;
}

function scoreSearchItem(item, terms) {
  const title = normalizeSearchText(item.title);
  const description = normalizeSearchText(item.description);
  const content = normalizeSearchText(item.content);
  const tags = normalizeSearchText((item.tags || []).join(" "));
  let score = 0;

  terms.forEach((term) => {
    if (title.includes(term)) score += 8;
    if (tags.includes(term)) score += 5;
    if (description.includes(term)) score += 3;
    if (content.includes(term)) score += 1;
  });

  return score;
}

function renderSearchResults(resultsNode, statusNode, results) {
  if (!results.length) {
    statusNode.textContent = getText("search.empty");
    resultsNode.innerHTML = "";
    return;
  }

  statusNode.textContent = getText("search.count", { count: results.length });
  resultsNode.innerHTML = results.slice(0, 12).map((item) => {
    const tags = (item.tags || []).slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    return `
      <article class="search-result">
        <a href="${escapeHtml(item.url)}">${escapeHtml(item.title)}</a>
        <p>${escapeHtml(item.description || "")}</p>
        <div class="search-result-meta">
          <time>${escapeHtml(item.date || "")}</time>
          ${tags}
        </div>
      </article>
    `;
  }).join("");
}

function setupSearch() {
  const panel = document.querySelector("[data-search-panel]");
  const overlay = document.querySelector("[data-search-overlay]");
  const input = document.querySelector("[data-search-input]");
  const statusNode = document.querySelector("[data-search-status]");
  const resultsNode = document.querySelector("[data-search-results]");
  const openButton = document.querySelector("[data-search-open]");
  const closeButton = document.querySelector("[data-search-close]");
  if (!panel || !overlay || !input || !statusNode || !resultsNode || !openButton || !closeButton) return;

  const closeSearch = () => {
    panel.hidden = true;
    overlay.hidden = true;
    document.body.classList.remove("has-search-open");
    openButton.focus();
  };

  const openSearch = () => {
    panel.hidden = false;
    overlay.hidden = false;
    document.body.classList.add("has-search-open");
    statusNode.textContent = getText("search.hint");
    window.setTimeout(() => input.focus(), 0);
  };

  const runSearch = async () => {
    const query = normalizeSearchText(input.value);
    if (!query) {
      statusNode.textContent = getText("search.hint");
      resultsNode.innerHTML = "";
      return;
    }

    statusNode.textContent = getText("search.loading");
    try {
      const terms = query.split(/\s+/).filter(Boolean);
      const index = await loadSearchIndex(panel);
      const results = index
        .map((item) => ({ ...item, score: scoreSearchItem(item, terms) }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score || String(b.date).localeCompare(String(a.date)));
      renderSearchResults(resultsNode, statusNode, results);
    } catch (error) {
      statusNode.textContent = getText("search.error");
      resultsNode.innerHTML = "";
    }
  };

  openButton.addEventListener("click", openSearch);
  closeButton.addEventListener("click", closeSearch);
  overlay.addEventListener("click", closeSearch);
  input.addEventListener("input", runSearch);
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
    if (event.key === "Escape" && !panel.hidden) closeSearch();
  });
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.inset = "0 auto auto -9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function setupCodeCopyButtons() {
  document.querySelectorAll(".article-body pre").forEach((pre) => {
    if (pre.closest(".code-block")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "code-block";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.dataset.i18n = "code.copy";
    button.textContent = (dictionaries[getLang()] || dictionaries.zh)["code.copy"];
    wrapper.appendChild(button);

    button.addEventListener("click", async () => {
      const dict = dictionaries[getLang()] || dictionaries.zh;
      const code = pre.querySelector("code");
      await copyText((code || pre).innerText.replace(/\n$/, ""));
      button.textContent = dict["code.copied"];
      button.classList.add("is-copied");
      window.setTimeout(() => {
        const latestDict = dictionaries[getLang()] || dictionaries.zh;
        button.textContent = latestDict["code.copy"];
        button.classList.remove("is-copied");
      }, 1600);
    });
  });
}

function setupReadingStats() {
  const pageCounter = document.querySelector("[data-page-views]");
  const totalCounter = document.querySelector("[data-total-views]");
  if (!pageCounter || !totalCounter) return;

  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const pageKey = `views:${path}`;
  const totalKey = "views:total";
  const pageViews = Number(localStorage.getItem(pageKey) || "0") + 1;
  const totalViews = Number(localStorage.getItem(totalKey) || "0") + 1;
  localStorage.setItem(pageKey, String(pageViews));
  localStorage.setItem(totalKey, String(totalViews));
  pageCounter.textContent = String(pageViews);
  totalCounter.textContent = String(totalViews);
}

applyTheme(getTheme());
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(getLang());
  setupControls();
  setupSearch();
  setupCodeCopyButtons();
  setupReadingStats();
});
