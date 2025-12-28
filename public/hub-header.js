(function () {

  const HUB_HOST = "amber-palette-hub.vercel.app";
  const HUB_URL  = "https://amber-palette-hub.vercel.app/";

  // Hub 自身では表示しない（hostname判定）
  if (location.hostname === HUB_HOST) return;

  // DOM 完成を待つ
  window.addEventListener("DOMContentLoaded", () => {

    if (!document.body) return;

    const back = document.createElement("a");
    back.href = HUB_URL;

    const title = document.title || "Back to Hub";
    back.textContent = `← Hub / ${title}`;

    back.style.cssText = `
      position:fixed;
      top:12px;
      left:12px;
      z-index:9999;
      padding:6px 10px;
      font-size:12.5px;
      font-family:"Playfair Display", serif;
      letter-spacing:.04em;
      color:#c9b89b;
      border:1px solid rgba(215,178,116,.25);
      border-radius:12px;
      background:rgba(24,21,18,.78);
      backdrop-filter: blur(8px);
      text-decoration:none;
      box-shadow:0 4px 14px rgba(0,0,0,.35);
      transition:.2s ease;
    `;

    back.addEventListener("mouseenter", () => {
      back.style.color = "#d7b274";
      back.style.borderColor = "rgba(215,178,116,.55)";
    });

    back.addEventListener("mouseleave", () => {
      back.style.color = "#c9b89b";
      back.style.borderColor = "rgba(215,178,116,.25)";
    });

    document.body.prepend(back);
  });

})();
