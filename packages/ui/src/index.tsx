"use client";
import * as Dialog from "@radix-ui/react-dialog";
import type { ButtonHTMLAttributes, ReactNode } from "react";
export function Mark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.62}
      viewBox="0 0 34 21"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 21 L9.5 3.5 L15 11.5 L21.5 1 L34 21 Z" />
    </svg>
  );
}
export function Button({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`button ${className}`} {...props} />;
}
export function Notice({
  children,
  tone = "error",
}: {
  children: ReactNode;
  tone?: "error" | "info";
}) {
  return (
    <p
      className={`notice ${tone}`}
      role={tone === "error" ? "alert" : "status"}
    >
      {children}
    </p>
  );
}
export function Empty({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="empty-state">
      <span className="eyebrow">A little room for something new</span>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
export function SizeGuide() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="text-link">Size guide</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Title>Find your fit</Dialog.Title>
          <Dialog.Description>
            Choose your usual size. Product measurements vary by style; contact
            support for garment-specific measurements.
          </Dialog.Description>
          <p>
            For a relaxed silhouette, select one size up. Your selected size
            appears in your bag before checkout.
          </p>
          <Dialog.Close className="button">Close size guide</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
