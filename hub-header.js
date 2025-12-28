(function () {

  const HUB_HOST = "amber-palette-hub.vercel.app";
  const HUB_URL  = "https://amber-palette-hub.vercel.app/";

  // Hub 自身では表示しない
  if (location.hostname === HUB_HOST) return;

  window.addEventListener("DOMContentLoaded", () => {

    if (!document.body) return;

    const back = document.createElement("a");
    back.href = HUB_URL;

    // テキストをシンプルに修正
    back.textContent = "← Hub";

    back.style.cssText = `
      position:fixed;
      top:12px;
      left:12px;
      z-index:9999;
      padding:6px 14px;
      font-size:12px;
      font-family:"Playfair Display", serif;
      font-weight: 500;
      letter-spacing:.06em;
      color:#c9b89b;
      border:1px solid rgba(215,178,116,.3);
      border-radius:20px;
      background:rgba(24,21,18,.8);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      text-decoration:none;
      box-shadow:0 4px 14px rgba(0,0,0,.4);
      transition:.2s ease;
      line-height: 1;
    `;

    back.addEventListener("mouseenter", () => {
      back.style.color = "#d7b274";
      back.style.borderColor = "rgba(215,178,116,.6)";
      back.style.transform = "translateY(-1px)";
    });

    back.addEventListener("mouseleave", () => {
      back.style.color = "#c9b89b";
      back.style.borderColor = "rgba(215,178,116,.3)";
      back.style.transform = "translateY(0)";
    });

    document.body.prepend(back);
  });

})();