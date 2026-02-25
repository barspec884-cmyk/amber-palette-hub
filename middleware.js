import { next } from "@vercel/functions";

function notFound() {
  // 「存在しない」ように見せる
  return new Response("Not Found", { status: 404 });
}

export const config = {
  // 重要：全部にかけるとCSS/画像が死ぬ可能性があるので、
  // 「ドキュメント(HTML)」だけを対象にする想定。
  // ここでは広めに走らせて、コード内で判定します。
  matcher: ["/:path*"],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // すでに通行許可CookieがあればOK
  const cookie = request.headers.get("cookie") || "";
  if (cookie.includes("app_ok=1")) {
    return next();
  }

  // HTMLドキュメントの時だけ検査（画像/CSS/JS等は通す）
  const secFetchDest = request.headers.get("sec-fetch-dest") || "";
  const accept = request.headers.get("accept") || "";
  const isDocument =
    secFetchDest === "document" || accept.includes("text/html");

  if (!isDocument) {
    return next();
  }

  // ---- ここがヘッダーチェック本体 ----
  const h = request.headers;
  const xMyApp = h.get("X-Amber-Palette-App");
  const xAppVersion = h.get("X-App-Version");
  const ua = h.get("User-Agent") || "";

  const ok =
    xMyApp === "true" &&
    xAppVersion === "1.0.0" &&
    ua.includes("AmberPalette/1.0.0");

  if (!ok) return notFound();

  // OKなら Cookie を付けて続行（以後はヘッダー無しでもOKにできる）
  const res = next();
  res.headers.append(
    "set-cookie",
    "app_ok=1; Path=/; Max-Age=2592000; SameSite=Lax; Secure"
  );
  return res;
}
