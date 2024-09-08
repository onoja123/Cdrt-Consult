"use client";
import React, { useState, useEffect } from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  btn_text?: string;
  variant?: "text" | "outlined" | "contained";
  lineHeight?: string;
  color?: string;
  fontSize_m?: string;
  fontSize_l?: string;
  fontWeight?: number | string;
  textTransform?: string;
  backgroundColor?: string;
  border?: string;
  onClick?: () => void;
  width?: string | number;
  loading?: boolean;
  padding?: string;
  hoverColor?: string;
  hoverText?: string;
}

export default function LabelButtons({
  icon,
  btn_text,
  onClick,
  width,
  loading,
  hoverColor,
  hoverText,
}: ButtonProps) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const buttonStyle: React.CSSProperties = {
    textTransform: "capitalize",
    fontWeight: "normal",
    fontSize: "16px",
    // lineHeight: "40px",
    backgroundColor: "#ED6810",
    border: "none",
    width: width || "auto",
    padding: "6px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    borderRadius: "8px",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      disabled={loading}
      className="button z-10"
    >
      {icon}
      {btn_text}
    </button>
  );
}
