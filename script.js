const translations = {
  ko: {
    navHangazi:"한가지", navLevels:"레벨 목록", navHelp:"도움말", language:"언어", sourceSheet:"원본 스프레드시트",
    profileDescription:"2020년 3월 25일부터 2026년 9월 27일까지 활동한 '불과 얼음의 춤' 레벨 제작자입니다.\n\n총 2377일의 활동 기간 동안 TremENDouS, Fallen Symphony, Icyxis, [ns], Parallel Universe Shifter, HALL, REX 등 수많은 영향력있는 레벨들을 제작했으며, 불과 얼음의 춤 레벨 제작 판에 수많은 기믹들을 통해 큰 영향력을 끼친 레벨 제작자입니다.\n\n한가지에 대한 자세한 내용은 그의 코스모피디아 페이지를 참고해주세요.",
    levelListTitle:"Level List", levelIntro:"레벨 정보를 검색하고 원하는 기준으로 정렬할 수 있습니다.",
    searchLabel:"레벨 검색", searchPlaceholder:"제목, 작곡가, 제작자 또는 ID 검색", sortBy:"정렬 기준", sortRanking:"순위", sortId:"ID", sortDifficulty:"난이도",
    order:"정렬 순서", ascending:"오름차순", descending:"내림차순", difficultyFilter:"난이도 필터", allDifficulties:"전체", ratingFilter:"추천도 필터", allRatings:"전체",
    stellariaExplain:"숫자 난이도 1에서 5까지의 레벨입니다. TremENDouS보다 쉬운 레벨들에 해당됩니다.", cosmosExplain:"숫자 난이도 6에서 10까지의 레벨입니다. TremENDouS 이상의 난이도를 가진 레벨들에 해당됩니다.",
    cosmosPlusExplain:"cosmos 난이도의 레벨들 중 10키 이내로 클리어될 수 없다고 판단되는 레벨들에 해당됩니다.", censoredExplain:"검열 대상으로 분류된 레벨들에 해당됩니다.",
    censorshipCriteriaTitle:"검열 기준", censorshipCriteria:"퀄리티 미달 : 퀄리티와 가독성 문제로 플레이를 권장하지 않는 레벨입니다.\n\n불가능 : 숫자 난이도 10 초과의 너무 어려운 레벨입니다.\n\n저작권 : 저작권 문제로 플레이를 권장하지 않는 레벨입니다. (이에 해당되는 레벨은 숨김 처리됐습니다)\n\n비친화적 : 위 세 문제 외의 다른 요인으로 검열 처리된 레벨입니다.",
    censored:"검열됨", showCensored:"검열된 레벨 표시", levelsFound:"개의 레벨", noResults:"조건에 맞는 레벨이 없습니다.",
    backToList:"레벨 목록으로", helpTitle:"Help", helpIntro:"레벨 목록에 사용되는 난이도와 추천도 표기 안내입니다.",
    difficultyGuide:"난이도", difficultyExplain:"일반 난이도는 레벨의 분류를, 숫자 난이도는 세부 난이도를 나타냅니다.",
    numberDifficulty:"숫자 난이도",
    ratingGuide:"추천도",
    ratingExplain:"각 아이콘은 레벨에 대한 추천도를 나타냅니다.", rank:"순위", accuracy:"정확도", difficulty:"난이도",
    title:"제목", composer:"작곡가", creator:"제작자", team:"팀", release:"출시일", length:"길이", bpm:"BPM", rating:"추천도", levelId:"ID", youtube:"YouTube", googleDrive:"Google Drive", tuf:"TUF",
    levelNotFound:"레벨을 찾을 수 없습니다.", back:"목록으로 돌아가기"
  },
  en: {
    navHangazi:"hangazi", navLevels:"Level List", navHelp:"Help", language:"Language", sourceSheet:"Original Spreadsheet",
    profileDescription:"A level creator for A Dance of Fire and Ice who was active from March 25, 2020, to September 27, 2026.\n\nOver a span of 2,377 days, they created numerous influential levels—such as TremENDouS, Fallen Symphony, Icyxis, [ns], Parallel Universe Shifter, HALL, and REX—and left a significant mark on the ADOFAI level-creation community through the introduction of various creative gimmicks.\n\nFor further details, please refer to their Cosmopedia page.",
    levelListTitle:"Level List", levelIntro:"Search level information and sort it by your preferred criteria.",
    searchLabel:"Search levels", searchPlaceholder:"Search by title, composer, creator, or ID", sortBy:"Sort by", sortRanking:"Ranking", sortId:"ID", sortDifficulty:"Difficulty",
    order:"Order", ascending:"Ascending", descending:"Descending", difficultyFilter:"Difficulty filter", allDifficulties:"All", ratingFilter:"Rating filter", allRatings:"All",
    stellariaExplain:"Levels whose number difficulty is 1 to 5. These levels are easier than TremENDouS.", cosmosExplain:"Levels whose number difficulty is 6 to 10. These levels are harder than TremENDouS.",
    cosmosPlusExplain:"Levels within the 'cosmos' difficulty tier that are deemed impossible to clear in 10 keys or fewer.", censoredExplain:"Levels classified as censored.",
    censorshipCriteriaTitle:"Censorship criteria", censorshipCriteria:"Subpar Quality: Levels that are not recommended for play due to issues with quality or readability.\n\nImpossible: Levels that are excessively difficult, exceeding a number difficulty rating of 10.\n\nCopyright: Levels that are not recommended for play due to copyright issues. (Levels falling into this category have been hidden.)\n\nUnsuitable: Levels that have been censored or restricted due to factors other than those mentioned above.",
    censored:"Censored", showCensored:"Show censored levels", levelsFound:"levels found", noResults:"No levels match your filters.",
    backToList:"Back to level list", helpTitle:"Help", helpIntro:"A guide to the difficulty and rating labels used in the level list.",
    difficultyGuide:"Difficulty", difficultyExplain:"The general tier shows the level category, while the numeric value indicates its detailed difficulty.",
    numberDifficulty:"Numeric difficulty",
    ratingGuide:"Rating",
    ratingExplain:"Each icon represents the community rating for a level.", rank:"Rank", accuracy:"Accuracy", difficulty:"Difficulty",
    title:"Title", composer:"Composer", creator:"Creator", team:"Team", release:"Release Date", length:"Length", bpm:"BPM", rating:"Rating", levelId:"ID", youtube:"YouTube", googleDrive:"Google Drive", tuf:"TUF",
    levelNotFound:"Level not found.", back:"Back to list"
  }
};

const numberColors = {
  "1":["#f2d7ff","#000"], "2":["#ebc1ff","#000"], "3":["#e3a9ff","#000"],
  "4":["#de9bff","#000"], "5":["#cd92ea","#000"], "6":["#bc97d0","#fff"],
  "7":["#9d89a7","#fff"], "8":["#756a7b","#fff"], "9":["#564c56","#fff"],
  "10":["#373030","#fff"], "11":["#431f33","#fff"]
};
const difficultyOrder = {stellaria:1, cosmos:2, "cosmos+":3, censored:5};
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
  return code;
}
function difficultyClass(code) {
  return code === "cosmos+" ? "cosmos-plus" : code;
}
function numericLabel(value) { return value; }
function ratingLabel(value) {
  const labels = {normal:"Normal", great:"Great", brilliant:"Brilliant"};
  return labels[String(value || "").toLowerCase()] || "Normal";
}
function ratingImage(value) {
  const safe = ["normal","great","brilliant"].includes(value) ? value : "normal";
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
  return `<img src="assets/${file}" alt="${label}"
    onerror="this.closest('a').remove()">`;
}
function sortLevels(list) {
  const key = $("#sortBy")?.value || "ranking";
  const direction = $("#sortOrder")?.value === "desc" ? -1 : 1;
  return [...list].sort((a,b) => {
    let av, bv;
    if (key === "id") { av = String(a.id ?? ""); bv = String(b.id ?? ""); }
    else if (key === "difficulty") {
      av = (difficultyOrder[a.difficulty] || 99) * 100 + (Number(a.diffNumber) || 0);
      bv = (difficultyOrder[b.difficulty] || 99) * 100 + (Number(b.diffNumber) || 0);
    } else { av = Number(a.ranking) || 0; bv = Number(b.ranking) || 0; }
    if (typeof av === "string") return av.localeCompare(bv, undefined, {numeric:true}) * direction;
    return (av - bv) * direction;
  });
}
function renderLevels() {
  const query = ($("#searchInput")?.value || "").trim().toLowerCase();
  const selectedRating = $("#ratingFilter")?.value || "all";
  const showCensored = $("#showCensored")?.checked ?? false;
  const showStellaria = $("#showStellaria")?.checked ?? true;
  const showCosmos = $("#showCosmos")?.checked ?? true;
  const showCosmosplus = $("#showCosmosplus")?.checked ?? true;

  const filtered = levels.filter(level => {
    const haystack = [level.id,level.title,level.composer,level.creator,level.team].join(" ").toLowerCase();
    if (query && !haystack.includes(query)) return false;
    if (level.difficulty === "censored" && !showCensored) return false;
    if (selectedRating !== "all" && level.rating !== selectedRating) return false;
    if (level.difficulty === "stellaria" && !showStellaria) return false;
    if (level.difficulty === "cosmos" && !showCosmos) return false;
    if (level.difficulty === "cosmos+" && !showCosmosplus) return false;

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
      <div class="level-title"><small>ID: ${escapeHTML(level.id)}</small><span class="level-composer">${escapeHTML(level.composer)} - </span>${escapeHTML(level.title)}${(level.length || level.bpm) ? `<small class="level-meta">${level.length ? `Length: ${escapeHTML(level.length)}` : ""}${level.length && level.bpm ? " · " : ""}${level.bpm ? `BPM: ${escapeHTML(level.bpm)}` : ""}</small>` : ""}</div>
      <img class="rating-icon" src="${ratingImage(level.rating)}" alt="${ratingLabel(level.rating)}" title="${ratingLabel(level.rating)}">
      <div class="creator">${escapeHTML(level.team || level.creator || "")}</div>
      <div class="level-links">${links}</div>
    </a>`;
  }).join("");
}
function renderNumberGuide() {
  const referenceLevels = [
    ["1", "Extinction", "18"],
    ["2", "My Piano Is Escaping!", "75"],
    ["3", "Little, Love, Lit", "219"],
    ["4", "Aquaaura", "208"],
    ["5", "Icyxis", "129"],
    ["6", "TremENDouS", "102"],
    ["7", "Fallen Symphony", "115"],
    ["8", "TremENDouS 『TheEND』", "160"],
    ["9", "swallow SMOKE", "232"],
    ["10", "ΩΩPARTS 『101%pure』", "279"]
  ];
  const difficultyCells = referenceLevels.map(([number]) => {
    const [color, stroke] = numberColors[number];
    return `<th scope="col"><span class="number-chip" style="background:${color};color:${color};-webkit-text-stroke-color:${stroke}">${number}</span></th>`;
  }).join("");
  const levelCells = referenceLevels.map(([, title, id]) =>
    `<td><a class="reference-level-link" href="#level/${encodeURIComponent(id)}">${escapeHTML(title)}</a></td>`
  ).join("");
  $("#numberDifficultyGuide").innerHTML = `
    <table class="number-difficulty-table">
      <tbody>
        <tr><th scope="row" class="guide-row-label">${currentLang === "ko" ? "난이도" : "Difficulty"}</th>${difficultyCells}</tr>
        <tr><th scope="row" class="guide-row-label">${currentLang === "ko" ? "기준 레벨" : "Reference level"}</th>${levelCells}</tr>
      </tbody>
    </table>`;
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
    ["levelId",level.id],["release",level.release],...(level.team ? [["team",level.team]] : []),["creator",level.creator],["rating",ratingLabel(level.rating)],...(level.length ? [["length",level.length]] : []),...(level.bpm ? [["bpm",level.bpm]] : [])
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
    <h1>${escapeHTML(level.composer)} - ${escapeHTML(level.title)}</h1>
    <p class="detail-sub">ID: ${escapeHTML(level.id)}</p>
    <div class="diff-cell" style="align-items:flex-start;margin-bottom:24px"><span class="difficulty-badge ${difficultyClass(level.difficulty)}">${escapeHTML(difficultyLabel(level.difficulty))}</span><span class="diff-number" style="color:${color};-webkit-text-stroke-color:${stroke}">${escapeHTML(numericLabel(String(level.diffNumber)))}</span></div>
    ${videoEmbed}
    <div class="detail-grid">${detail.map(([key,value]) => `<div class="detail-item"><span>${t(key)}</span><strong>${escapeHTML(value ?? "—")}</strong></div>`).join("")}</div>
    <div class="detail-links">
      ${externalLink(level.youtube,"YouTube",levelLinkIcon("icon/youtube.png","YouTube"))}
      ${externalLink(level.cosmopedia,"Cosmopedia",levelLinkIcon("icon/cosmopedia.png","Cosmopedia"))}
      ${externalLink(level.googleDrive,"Google Drive",levelLinkIcon("icon/google-drive.png","Google Drive"))}
      ${externalLink(level.tuf,"TUF",levelLinkIcon("icon/tuf.png","TUF"))}
      ${externalLink(level.steam,"Steam",levelLinkIcon("icon/steam.png","Steam"))}
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
  renderRoute();
}
document.querySelectorAll("#searchInput,#sortBy,#sortOrder,#ratingFilter,#showCensored,#showStellaria,#showCosmos,#showCosmosplus")
  .forEach(control => control.addEventListener(control.type === "search" ? "input" : "change", renderLevels));
$("#languageSelect").value = currentLang;
$("#languageSelect").addEventListener("change", event => setLanguage(event.target.value));
window.addEventListener("hashchange", renderRoute);
setLanguage(currentLang);
loadLevels();
renderRoute();
