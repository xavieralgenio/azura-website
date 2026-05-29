import https from "https";
import http from "http";
import { URL } from "url";

const PING_INTERVAL_MS = 14 * 60 * 1000; // 14 minutes
const REQUEST_TIMEOUT_MS = 5000; // 5 seconds

export function initializeKeepAlive() {
  const keepAliveUrl = process.env.KEEP_ALIVE_URL;

  if (process.env.NODE_ENV !== "production") {
    console.log("[keepAlive] Skipping keep-alive outside of production.");
    return;
  }

  if (!keepAliveUrl) {
    console.warn("[keepAlive] KEEP_ALIVE_URL is not set; keep-alive disabled.");
    return;
  }

  let targetUrl: URL;
  try {
    targetUrl = new URL(keepAliveUrl);
  } catch (error) {
    console.warn("[keepAlive] Invalid KEEP_ALIVE_URL:", keepAliveUrl, error);
    return;
  }

  const ping = () => {
    const client = targetUrl.protocol === "http:" ? http : https;
    const req = client.get(targetUrl, (res) => {
      const status = res.statusCode ?? 0;
      console.log(`[keepAlive] Pinged ${keepAliveUrl} - status ${status}`);
      res.resume();
    });

    req.on("error", (error) => {
      console.warn("[keepAlive] Ping error:", error.message);
    });

    req.setTimeout(REQUEST_TIMEOUT_MS, () => {
      req.destroy();
      console.warn("[keepAlive] Ping timed out after", REQUEST_TIMEOUT_MS, "ms");
    });
  };

  ping();
  setInterval(ping, PING_INTERVAL_MS);
  console.log(`[keepAlive] Started keep-alive to ${keepAliveUrl} every 14 minutes.`);
}
