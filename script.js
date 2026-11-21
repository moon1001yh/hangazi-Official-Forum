const translations = {
  ko: {
    navHangazi:"hangazi", navLevels:"Level List", navHelp:"Help", language:"언어", sourceSheet:"원본 스프레드시트",
    profileDescription:"한가지(hangazi) 공식 포럼입니다. 프로필과 링크, 레벨 목록 및 관련 안내를 확인할 수 있습니다.",
    levelListTitle:"Level List", levelIntro:"레벨 정보를 검색하고 원하는 기준으로 정렬할 수 있습니다.",
    searchLabel:"레벨 검색", searchPlaceholder:"제목, 작곡가, 제작자 또는 ID 검색", sortBy:"정렬 기준", sortRanking:"순위", sortId:"ID", sortDifficulty:"난이도",
    order:"정렬 순서", ascending:"오름차순", descending:"내림차순", difficultyFilter:"난이도 필터", allDifficulties:"전체",
    censored:"검열됨", showCensored:"검열된 레벨 표시", levelsFound:"개의 레벨", noResults:"조건에 맞는 레벨이 없습니다.",
    backToList:"레벨 목록으로", helpTitle:"Help", helpIntro:"레벨 목록에 사용되는 난이도와 추천도 표기 안내입니다.",
    difficultyGuide:"난이도", difficultyExplain:"일반 난이도는 레벨의 분류를, 숫자 난이도는 세부 난이도를 나타냅니다.",
    nscosmosNote:"nscosmos는 사이트에서 cosmos로 표시되며, 색상으로 구분됩니다.", numberDifficulty:"숫자 난이도",
    ns10Note:"ns10은 사이트에서 10으로 표시되며 별도 색상으로 구분됩니다.", ratingGuide:"추천도",
    ratingExplain:"각 아이콘은 레벨에 대한 추천도를 나타냅니다.", rank:"순위", accuracy:"정확도", difficulty:"난이도",
    title:"제목", composer:"작곡가", creator:"제작자", rating:"추천도", levelId:"ID", youtube:"YouTube", googleDrive:"Google Drive", tuf:"TUF",
    levelNotFound:"레벨을 찾을 수 없습니다.", back:"목록으로 돌아가기"
  },
  en: {
    navHangazi:"hangazi", navLevels:"Level List", navHelp:"Help", language:"Language", sourceSheet:"Original Spreadsheet",
    profileDescription:"The official hangazi forum. Explore the profile, links, level list, and related information.",
    levelListTitle:"Level List", levelIntro:"Search level information and sort it by your preferred criteria.",
    searchLabel:"Search levels", searchPlaceholder:"Search by title, composer, creator, or ID", sortBy:"Sort by", sortRanking:"Ranking", sortId:"ID", sortDifficulty:"Difficulty",
    order:"Order", ascending:"Ascending", descending:"Descending", difficultyFilter:"Difficulty filter", allDifficulties:"All",
    censored:"Censored", showCensored:"Show censored levels", levelsFound:"levels found", noResults:"No levels match your filters.",
    backToList:"Back to level list", helpTitle:"Help", helpIntro:"A guide to the difficulty and rating labels used in the level list.",
    difficultyGuide:"Difficulty", difficultyExplain:"The general tier shows the level category, while the numeric value indicates its detailed difficulty.",
    nscosmosNote:"nscosmos is displayed as cosmos on this site and is distinguished by its color.", numberDifficulty:"Numeric difficulty",
    ns10Note:"ns10 is displayed as 10 on this site and uses a distinct color.", ratingGuide:"Rating",
    ratingExplain:"Each icon represents the community rating for a level.", rank:"Rank", accuracy:"Accuracy", difficulty:"Difficulty",
    title:"Title", composer:"Composer", creator:"Creator", rating:"Rating", levelId:"ID", youtube:"YouTube", googleDrive:"Google Drive", tuf:"TUF",
    levelNotFound:"Level not found.", back:"Back to list"
  }
};

const numberColors = {
  "1":["#f2d7ff","#000"], "2":["#ebc1ff","#000"], "3":["#e3a9ff","#000"],
  "4":["#de9bff","#000"], "5":["#cd92ea","#000"], "6":["#bc97d0","#fff"],
  "7":["#9d89a7","#fff"], "8":["#756a7b","#fff"], "9":["#564c56","#fff"],
  "10":["#373030","#fff"], "11":["#431f33","#fff"], "ns10":["#2b3836","#fff"]
};
const difficultyOrder = {stellaria:1, cosmos:2, "cosmos+":3, nscosmos:4, censored:5};
let levels = [];
let currentLang = localStorage.getItem("site-language") || "ko";

const $ = (selector) => document.querySelector(selector);
const t = (key) => translations[currentLang][key] || key;
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("site-language", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[lang][el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const value = translations[lang][el.dataset.i18nPlaceholder];
    if (value) el.placeholder = value;
  });
  renderLevels();
  renderNumberGuide();
  renderRoute();
}
function difficultyLabel(code) {
  if (code === "censored") return t("censored");
  return code === "nscosmos" ? "cosmos" : code;
}
function difficultyClass(code) {
  return code === "cosmos+" ? "cosmos-plus" : code;
}
function numericLabel(value) { return value === "ns10" ? "10" : value; }
function ratingImage(value) {
  const safe = ["normal","great","brilliant","cp2"].includes(value) ? value : "normal";
  return `assets/rating/${safe}.png`;
}
function accuracyMark(value) {
  const marks = {
    ref: ["✦", "#4fdfe2"],
    fixed: ["✔", "#4fe29c"],
    unfixed: ["?", "#ffee3e"],
    no: ["✘", "#e24f80"]
  };
  const [symbol, color] = marks[String(value || "").toLowerCase()] || ["", "#ffffff"];
  return symbol ? `<small class="accuracy-mark" style="color:${color}" title="${escapeHTML(value)}">${symbol}</small>` : "";
}
function escapeHTML(value="") {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function externalLink(url, label, icon) {
  if (!url) return "";
  return `<a href="${escapeHTML(url)}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${icon}</a>`;
}
function levelLinkIcon(file, label) {
  return `<img src="assets/${file}" alt="${label}">`;
}
function sortLevels(list) {
  const key = $("#sortBy")?.value || "ranking";
  const direction = $("#sortOrder")?.value === "desc" ? -1 : 1;
  return [...list].sort((a,b) => {
    let av, bv;
    if (key === "id") { av = String(a.id ?? ""); bv = String(b.id ?? ""); }
    else if (key === "difficulty") {
      av = (difficultyOrder[a.difficulty] || 99) * 100 + (a.diffNumber === "ns10" ? 10 : Number(a.diffNumber) || 0);
      bv = (difficultyOrder[b.difficulty] || 99) * 100 + (b.diffNumber === "ns10" ? 10 : Number(b.diffNumber) || 0);
    } else { av = Number(a.ranking) || 0; bv = Number(b.ranking) || 0; }
    if (typeof av === "string") return av.localeCompare(bv, undefined, {numeric:true}) * direction;
    return (av - bv) * direction;
  });
}
function renderLevels() {
  const query = ($("#searchInput")?.value || "").trim().toLowerCase();
  const selectedDifficulty = $("#difficultyFilter")?.value || "all";
  const showCensored = $("#showCensored")?.checked ?? false;
  const showStellaria = $("#showStellaria")?.checked ?? true;
  const showCosmos = $("#showCosmos")?.checked ?? true;
  const showNs = $("#showNs")?.checked ?? true;

  const filtered = levels.filter(level => {
    const haystack = [level.id,level.title,level.composer,level.creator].join(" ").toLowerCase();
    if (query && !haystack.includes(query)) return false;
    if (level.difficulty === "censored" && !showCensored) return false;
    if (selectedDifficulty !== "all" && level.difficulty !== selectedDifficulty) return false;
    if (level.difficulty === "stellaria" && !showStellaria) return false;
    if (["cosmos","cosmos+"].includes(level.difficulty) && !showCosmos) return false;
    if (level.difficulty === "nscosmos" && !showNs) return false;
    return true;
  });
  const sorted = sortLevels(filtered);
  $("#resultCount").textContent = sorted.length;
  $("#emptyState").hidden = sorted.length !== 0;
  $("#levelList").innerHTML = sorted.map(level => {
    const diff = escapeHTML(level.difficulty);
    const num = String(level.diffNumber ?? "");
    const [color,stroke] = numberColors[num] || ["#ebc1ff","#000"];
    const links = [
      externalLink(level.youtube,"YouTube",levelLinkIcon("icon/youtube.png","YouTube")),
      externalLink(level.cosmopedia,"Cosmopedia",levelLinkIcon("icon/cosmopedia.png","Cosmopedia")),
      externalLink(level.googleDrive,"Google Drive",levelLinkIcon("icon/google-drive.png","Google Drive")),
      externalLink(level.tuf,"TUF",levelLinkIcon("icon/tuf.png","TUF")),
      externalLink(level.steam,"Steam",levelLinkIcon("icon/steam.png","Steam"))
    ].filter(Boolean).join("");
    return `<a class="level-row" href="#level/${encodeURIComponent(level.id)}">
      <div class="rank">#${escapeHTML(level.ranking)}${accuracyMark(level.rankingAccuracy)}</div>
      <div class="diff-cell"><span class="difficulty-badge ${difficultyClass(diff)}">${escapeHTML(difficultyLabel(diff))}</span><span class="diff-number" style="color:${color};-webkit-text-stroke-color:${stroke}">${escapeHTML(numericLabel(num))}</span></div>
      <div class="level-title"><small>ID: ${escapeHTML(level.id)} - ${escapeHTML(level.composer)}</small>${escapeHTML(level.title)}</div>
      <img class="rating-icon" src="${ratingImage(level.rating)}" alt="${escapeHTML(level.rating)}" title="${escapeHTML(level.rating)}">
      <div class="creator">${escapeHTML(level.creator)}</div>
      <div class="level-links">${links}</div>
    </a>`;
  }).join("");
}
function renderNumberGuide() {
  const values = ["1","2","3","4","5","6","7","8","9","10","11","ns10"];
  $("#numberDifficultyGuide").innerHTML = values.map(value => {
    const [color,stroke] = numberColors[value];
    return `<span class="number-chip" style="background:${color};color:${color};-webkit-text-stroke-color:${stroke}">${numericLabel(value)}</span>`;
  }).join("");
}
function getYouTubeVideoId(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "").replace(/^m\./, "");
    let id = "";
    if (host === "youtu.be") id = parsed.pathname.split("/").filter(Boolean)[0] || "";
    else if (["youtube.com", "youtube-nocookie.com"].includes(host)) {
      if (parsed.pathname === "/watch") id = parsed.searchParams.get("v") || "";
      else if (/^\/(embed|shorts|live)\//.test(parsed.pathname)) id = parsed.pathname.split("/")[2] || "";
    }
    return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : "";
  } catch {
    return "";
  }
}
function renderDetail(id) {
  const level = levels.find(item => String(item.id) === String(id));
  const target = $("#levelDetail");
  if (!level) { target.innerHTML = `<div class="detail-card"><h1>${t("levelNotFound")}</h1><a class="back-link" href="#levels">${t("back")}</a></div>`; return; }
  const [color,stroke] = numberColors[String(level.diffNumber)] || ["#ebc1ff","#000"];
  const detail = [
    ["rank",`#${level.ranking} (${level.rankingAccuracy || "—"})`],
    ["difficulty",`${difficultyLabel(level.difficulty)} / ${numericLabel(level.diffNumber)}`],
    ["levelId",level.id],["composer",level.composer],["creator",level.creator],["rating",level.rating]
  ];
  const youtubeId = getYouTubeVideoId(level.youtube);
  const videoEmbed = youtubeId ? `<div class="video-embed"><iframe
      src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}"
      title="${escapeHTML(level.title)} - YouTube"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe></div>` : "";
  target.innerHTML = `<article class="detail-card">
    <p class="eyebrow">LEVEL INFORMATION</p>
    <h1>${escapeHTML(level.title)}</h1>
    <p class="detail-sub">ID: ${escapeHTML(level.id)} · ${escapeHTML(level.composer)}</p>
    <div class="diff-cell" style="align-items:flex-start;margin-bottom:24px"><span class="difficulty-badge ${difficultyClass(level.difficulty)}">${escapeHTML(difficultyLabel(level.difficulty))}</span><span class="diff-number" style="color:${color};-webkit-text-stroke-color:${stroke}">${escapeHTML(numericLabel(String(level.diffNumber)))}</span></div>
    ${videoEmbed}
    <div class="detail-grid">${detail.map(([key,value]) => `<div class="detail-item"><span>${t(key)}</span><strong>${escapeHTML(value ?? "—")}</strong></div>`).join("")}</div>
    <div class="detail-links">
      ${level.youtube ? `<a href="${escapeHTML(level.youtube)}" target="_blank" rel="noopener">YouTube ↗</a>` : ""}
      ${level.cosmopedia ? `<a href="${escapeHTML(level.cosmopedia)}" target="_blank" rel="noopener">Cosmopedia ↗</a>` : ""}
      ${level.googleDrive ? `<a href="${escapeHTML(level.googleDrive)}" target="_blank" rel="noopener">Google Drive ↗</a>` : ""}
      ${level.tuf ? `<a href="${escapeHTML(level.tuf)}" target="_blank" rel="noopener">TUF ↗</a>` : ""}
      ${level.steam ? `<a href="${escapeHTML(level.steam)}" target="_blank" rel="noopener">Steam ↗</a>` : ""}
    </div>
  </article>`;
}
function renderRoute() {
  const hash = location.hash || "#home";
  const parts = hash.replace(/^#/, "").split("/");
  const route = parts[0];
  document.querySelectorAll(".page").forEach(page => page.classList.toggle("active", page.id === (route === "level" ? "level" : route)));
  document.querySelectorAll(".main-nav a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${route}`));
  if (route === "level") renderDetail(decodeURIComponent(parts.slice(1).join("/") || ""));
  if (!["home","hangazi","levels","help","level"].includes(route)) location.hash = "#home";
  window.scrollTo(0,0);
}
async function loadLevels() {
  try {
    const response = await fetch("levelmetadata.json");
    if (!response.ok) throw new Error("Could not load levelmetadata.json");
    const data = await response.json();
    levels = Array.isArray(data) ? data : (Array.isArray(data.levels) ? data.levels : []);
  } catch (error) {
    console.error(error);
    levels = [];
    $("#levelList").innerHTML = `<p class="empty-state">levelmetadata.json 파일을 불러오지 못했습니다.</p>`;
  }
  renderLevels();
}
document.querySelectorAll("#searchInput,#sortBy,#sortOrder,#difficultyFilter,#showCensored,#showStellaria,#showCosmos,#showNs")
  .forEach(control => control.addEventListener(control.type === "search" ? "input" : "change", renderLevels));
$("#languageSelect").value = currentLang;
$("#languageSelect").addEventListener("change", event => setLanguage(event.target.value));
window.addEventListener("hashchange", renderRoute);
setLanguage(currentLang);
loadLevels();
renderRoute();
