"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  SiteContent,
  defaultContent,
  HeroContent,
  ServicesContent,
  AdvisorsContent,
  PartnersContent,
  AboutContent,
  TeamContent,
  GalleryContent,
  FooterContent,
  ContactPageContent,
  ThemeContent,
} from "@/lib/defaultContent";

interface ContentContextType {
  content: SiteContent;
  loading: boolean;
}

const ContentContext = createContext<ContentContextType>({
  content: defaultContent,
  loading: true,
});

async function fetchSection<T>(section: string, fallback: T): Promise<T> {
  if (!db) return fallback;
  try {
    const snap = await getDoc(doc(db, "content", section));
    if (snap.exists()) {
      return { ...fallback, ...snap.data() } as T;
    }
  } catch {
    // silently fall back to defaults
  }
  return fallback;
}

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAll() {
      const [hero, services, advisors, partners, about, team, gallery, footer, contactPage, theme] =
        await Promise.all([
          fetchSection<HeroContent>("hero", defaultContent.hero),
          fetchSection<ServicesContent>("services", defaultContent.services),
          fetchSection<AdvisorsContent>("advisors", defaultContent.advisors),
          fetchSection<PartnersContent>("partners", defaultContent.partners),
          fetchSection<AboutContent>("about", defaultContent.about),
          fetchSection<TeamContent>("team", defaultContent.team),
          fetchSection<GalleryContent>("gallery", defaultContent.gallery),
          fetchSection<FooterContent>("footer", defaultContent.footer),
          fetchSection<ContactPageContent>("contactPage", defaultContent.contactPage),
          fetchSection<ThemeContent>("theme", defaultContent.theme),
        ]);

      setContent({ hero, services, advisors, partners, about, team, gallery, footer, contactPage, theme });
      setLoading(false);
    }
    loadAll();
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
