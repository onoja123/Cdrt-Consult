"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { defaultTheme, ThemeContent } from "@/lib/defaultContent";

function buildCss(t: ThemeContent): string {
  return `
    :root {
      --cdrt-primary:      ${t.primaryColor};
      --cdrt-heading:      ${t.headingColor};
      --cdrt-body:         ${t.bodyColor};
      --cdrt-dark-text:    ${t.darkTextColor};
      --cdrt-navbar-bg:    ${t.navbarBg};
      --cdrt-dark-bg:      ${t.darkBg};
      --cdrt-section-bg:   ${t.sectionBg};
      --cdrt-card-bg:      ${t.cardBg};
      --cdrt-font-heading: '${t.headingFont}', sans-serif;
      --cdrt-font-body:    '${t.bodyFont}', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--cdrt-font-heading) !important;
    }
    p, span, a, li, td, th, label, input, textarea, button {
      font-family: var(--cdrt-font-body) !important;
    }
  `;
}

export default function ThemeInjector() {
  const [css, setCss] = useState(buildCss(defaultTheme));

  useEffect(() => {
    if (!db) return;
    getDoc(doc(db, "content", "theme"))
      .then((snap) => {
        if (snap.exists()) {
          setCss(buildCss({ ...defaultTheme, ...(snap.data() as ThemeContent) }));
        }
      })
      .catch(() => {});
  }, []);

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
