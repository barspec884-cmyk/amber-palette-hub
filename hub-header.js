(function () {
  const HUB_URL = "https://amber-palette-hub.vercel.app/";

  // 1. 判定を「タイトルに Hub という文字が入っているかどうか」に変更（より確実）
  if (document.title.indexOf("Amber Palette — Web Hub") !== -1) {
    return;
  }

  function injectButton() {
    // すでにボタンがあれば何もしない
    if (document.getElementById("fixed-hub-button")) return;

    const back = document.createElement("a");
    back.id = "fixed-hub-button";
    back.href = HUB_URL;
    back.textContent = "← Hub";

    // スタイル（z-indexを最大級の 999999 に設定）
    back.style.cssText = `
      position: fixed !important;
      top: 15px !important;
      left: 15px !important;
      z-index: 999999 !important;
      padding: 7px 15px !important;
      font-size: 12px !important;
      font-family: serif !important;
      color: #c9b89b !important;
      background: rgba(20, 18, 15, 0.9) !important;
      border: 1px solid rgba(215, 178, 116, 0.4) !important;
      border-radius: 30px !important;
      text-decoration: none !important;
      box-shadow: 0 4px 15px rgba(0,0,0,0.6) !important;
      backdrop-filter: blur(8px) !important;
      -webkit-backdrop-filter: blur(8px) !important;
      line-height: 1 !important;
      display: flex !important;
      align-items: center !important;
      transition: 0.3s !important;
    `;

    // ホバー効果
    back.onmouseenter = () => {
      back.style.color = "#d7b274";
      back.style.borderColor = "#d7b274";
    };
    back.onmouseleave = () => {
      back.style.color = "#c9b89b";
      back.style.borderColor = "rgba(215, 178, 116, 0.4)";
    };

    document.body.appendChild(back);
  }

  // 2. 実行タイミングを複数回設定（辞書の読み込みに負けないように）
  if (document.readyState === "complete") {
    injectButton();
  } else {
    window.addEventListener("load", injectButton);
    window.addEventListener("DOMContentLoaded", injectButton);
  }
  
  // 念のため2秒後にもう一度チェック（保険）
  setTimeout(injectButton, 2000);

})();