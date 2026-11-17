import { ImageResponse } from "next/og";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a221d",
        }}
      >
        <svg width="22" height="14" viewBox="0 0 34 21" fill="#f2f0e6">
          <path d="M0 21 L9.5 3.5 L15 11.5 L21.5 1 L34 21 Z" />
        </svg>
      </div>
    ),
    size,
  );
}
