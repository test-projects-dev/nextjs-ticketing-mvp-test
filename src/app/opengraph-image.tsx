import { ImageResponse } from "next/og";

export const alt = "Next.js MVP Starter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
          position: "relative",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            border: "1px solid #ebebeb",
            borderRadius: 9999,
            color: "#4d4d4d",
            fontSize: 24,
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            marginBottom: 40,
          }}
        >
          v1.0.0
        </div>

        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            color: "#171717",
            lineHeight: 1.1,
          }}
        >
          Hello World
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 48,
            fontWeight: 500,
            color: "#4d4d4d",
            lineHeight: 1.2,
          }}
        >
          Next.js MVP Starter
        </div>

        <div
          style={{
            position: "absolute",
            left: 64,
            bottom: 48,
            fontSize: 24,
            color: "#7d7d7d",
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          }}
        >
          Next.js · TypeScript · Tailwind
        </div>
      </div>
    ),
    { ...size }
  );
}
