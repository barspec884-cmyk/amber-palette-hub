(function () {
  // Hub自体のホスト名
  const HUB_HOST = "amber-palette-hub.vercel.app";
  const HUB_URL  = "https://amber-palette-hub.vercel.app/";

  // 1. Hub自身、またはローカル開発環境のHub（localhost）では表示しない
  if (location.hostname === HUB_HOST || 
      (location.hostname === "localhost" && document.title.includes("Hub"))) {
    return;
  }

  // DOM 完成を待つ
  const init = () => {
    if (!document.body || document.getElementById("amber-hub-backlink")) return;

    const back = document.createElement("a");
    back.id = "amber-hub-backlink"; // 重複防止用ID
    back.href = HUB_URL;

    // 表示するタイトル（ページのtitleタグから取得）
    const title = document.title.split("—")[0] || "Back";
    back.textContent = `← Hub / ${title.trim()}`;

    // スタイルの調整
    back.style.cssText = `
      position:fixed;
      top:12px;
      left:12px;
      z-index:99999;
      padding:6px 12px;
      font-size:12px;
      font-family: serif;
      letter-spacing:.04em;
      color:#c9b89b;
      border:1px solid rgba(215,178,116,.3);
      border-radius:20px;
      background:rgba(14,12,10,0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      text-decoration:none;
      box-shadow:0 4px 12px rgba(0,0,0,0.5);
      transition:.3s ease;
      line-height: 1;
      display: flex;
      align-items: center;
    `;

    // ホバーエフェクト
    back.addEventListener("mouseenter", () => {
      back.style.color = "#d7b274";
      back.style.borderColor = "rgba(215,178,116,.6)";
      back.style.transform = "translateY(1px)";
    });

    back.addEventListener("mouseleave", () => {
      back.style.color = "#c9b89b";
      back.style.borderColor = "rgba(215,178,116,.3)";
      back.style.transform = "translateY(0)";
    });

    document.body.prepend(back);
  };

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();