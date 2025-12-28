(function(){
  const HUB_URL = "https://amber-palette-hub.vercel.app/";

  // Hub自身では表示しない
  if (location.href.startsWith(HUB_URL)) return;

  const back = document.createElement("a");
  back.href = HUB_URL;

  const pageTitle = document.title || "Back";
  back.textContent = `← Hub / ${pageTitle}`;

  back.style.cssText = `
    position:fixed;
    top:12px;
    left:12px;
    z-index:9999;
    display:inline-block;
    padding:6px 10px;
    font-size:12.5px;
    font-family: "Playfair Display", serif;
    letter-spacing:.04em;
    color:#c9b89b;
    border:1px solid rgba(215,178,116,.25);
    border-radius:12px;
    background:rgba(24,21,18,.78);
    backdrop-filter: blur(8px);
    text-decoration:none;
    box-shadow: 0 4px 14px rgba(0,0,0,.35);
    transition: all .2s ease;
  `;

  back.addEventListener("mouseenter",()=>{
    back.style.color = "#d7b274";
    back.style.borderColor = "rgba(215,178,116,.55)";
  });
  back.addEventListener("mouseleave",()=>{
    back.style.color = "#c9b89b";
    back.style.borderColor = "rgba(215,178,116,.25)";
  });

  // body先頭に追加
  document.body.prepend(back);
})();
