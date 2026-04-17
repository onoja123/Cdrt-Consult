"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "@/lib/firebase";
import {
  HiHome,
  HiCog6Tooth,
  HiAcademicCap,
  HiUserGroup,
  HiInformationCircle,
  HiPhoto,
  HiUsers,
  HiPhone,
  HiLink,
  HiSquares2X2,
  HiArrowRightOnRectangle,
  HiArrowTopRightOnSquare,
  HiBars3,
  HiXMark,
  HiChevronRight,
  HiCheckCircle,
  HiSwatch,
} from "react-icons/hi2";
import {
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
  defaultTheme,
  AVAILABLE_FONTS,
} from "@/lib/defaultContent";

// ─── firebase helpers ─────────────────────────────────────────────────────────
async function saveSection(section: string, data: object) {
  await setDoc(doc(db, "content", section), data);
}
async function loadSection<T>(section: string, fallback: T): Promise<T> {
  const snap = await getDoc(doc(db, "content", section));
  return snap.exists() ? ({ ...fallback, ...snap.data() } as T) : fallback;
}
async function uploadImage(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

// ─── nav config ───────────────────────────────────────────────────────────────
type NavIcon = React.ComponentType<{ className?: string }>;

const NAV: { group: string; items: { id: string; label: string; Icon: NavIcon }[] }[] = [
  {
    group: "Home Page",
    items: [
      { id: "hero", label: "Hero Banner", Icon: HiHome },
      { id: "services", label: "Our Services", Icon: HiCog6Tooth },
      { id: "advisors", label: "Research Advisors", Icon: HiAcademicCap },
      { id: "partners", label: "Partners", Icon: HiUserGroup },
    ],
  },
  {
    group: "About Us",
    items: [
      { id: "about", label: "About CDRT", Icon: HiInformationCircle },
      { id: "gallery", label: "Gallery", Icon: HiPhoto },
    ],
  },
  {
    group: "Our Team",
    items: [{ id: "team", label: "Team & Coordinators", Icon: HiUsers }],
  },
  {
    group: "Other",
    items: [
      { id: "contactPage", label: "Contact Page", Icon: HiPhone },
      { id: "footer", label: "Footer", Icon: HiLink },
      { id: "theme", label: "Theme & Appearance", Icon: HiSwatch },
    ],
  },
];

// ─── shared form components ───────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
        {label}
      </label>
      {children}
    </div>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition"
    />
  );
}

function Textarea({
  value,
  onChange,
  rows = 3,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <textarea
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition resize-none"
    />
  );
}

function SaveBar({
  onSave,
  saving,
  saved,
}: {
  onSave: () => void;
  saving: boolean;
  saved: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 mb-6">
      <p className="text-xs text-gray-400">
        {saved ? (
          <span className="flex items-center gap-1.5 text-green-500 font-medium">
            <HiCheckCircle className="w-4 h-4" /> Changes saved and live
          </span>
        ) : (
          "Unsaved changes will not appear on the site"
        )}
      </p>
      <button
        onClick={onSave}
        disabled={saving}
        className="inline-flex items-center gap-2 bg-[#FF6525] hover:bg-orange-600 disabled:opacity-50 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition shadow-sm"
      >
        {saving ? (
          <>
            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Saving…
          </>
        ) : (
          "Publish changes"
        )}
      </button>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5">
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold text-gray-700 mb-1">{children}</h3>;
}

function ImageUploader({
  label,
  currentUrl,
  storagePath,
  onUploaded,
}: {
  label: string;
  currentUrl: string;
  storagePath: string;
  onUploaded: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadImage(file, storagePath);
      onUploaded(url);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
        {label}
      </label>
      <div className="flex items-center gap-4">
        {currentUrl ? (
          <img
            src={currentUrl}
            alt="preview"
            className="w-28 h-20 object-cover rounded-lg border border-gray-200 shadow-sm"
          />
        ) : (
          <div className="w-28 h-20 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300 text-2xl">
            +
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          <button
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="text-sm border border-gray-200 hover:border-orange-400 hover:text-orange-500 text-gray-600 font-medium px-4 py-2 rounded-lg transition disabled:opacity-50"
          >
            {uploading ? "Uploading…" : "Replace image"}
          </button>
          <p className="text-xs text-gray-400">PNG, JPG, WebP — max 10 MB</p>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFile}
      />
    </div>
  );
}

// ─── section editors ──────────────────────────────────────────────────────────

function useSectionState<T>(section: string, fallback: T) {
  const [data, setData] = useState<T>(fallback);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    loadSection(section, fallback).then(setData);
  }, []);

  async function save() {
    setSaving(true);
    await saveSection(section, data as object);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  }

  return { data, setData, save, saving, saved };
}

function HeroEditor() {
  const { data, setData, save, saving, saved } = useSectionState<HeroContent>(
    "hero",
    defaultContent.hero
  );
  return (
    <>
      <SaveBar onSave={save} saving={saving} saved={saved} />
      <div className="grid grid-cols-1 gap-5">
        <Card>
          <CardTitle>Page heading</CardTitle>
          <Field label="Title">
            <TextInput value={data.title} onChange={(v) => setData({ ...data, title: v })} />
          </Field>
        </Card>
        <Card>
          <CardTitle>Body copy</CardTitle>
          <Field label="First paragraph">
            <Textarea
              rows={4}
              value={data.description1}
              onChange={(v) => setData({ ...data, description1: v })}
            />
          </Field>
          <Field label='Second paragraph (appears after "CDRT CONSULT")'>
            <Textarea
              rows={2}
              value={data.description2}
              onChange={(v) => setData({ ...data, description2: v })}
            />
          </Field>
        </Card>
      </div>
    </>
  );
}

function ServicesEditor() {
  const { data, setData, save, saving, saved } = useSectionState<ServicesContent>(
    "services",
    defaultContent.services
  );
  return (
    <>
      <SaveBar onSave={save} saving={saving} saved={saved} />
      <div className="grid grid-cols-1 gap-5">
        <Card>
          <CardTitle>Section heading & description</CardTitle>
          <Field label="Title">
            <TextInput
              value={data.sectionTitle}
              onChange={(v) => setData({ ...data, sectionTitle: v })}
            />
          </Field>
          <Field label="Description">
            <Textarea
              rows={4}
              value={data.sectionDescription}
              onChange={(v) => setData({ ...data, sectionDescription: v })}
            />
          </Field>
        </Card>
        <Card>
          <ImageUploader
            label="Main image"
            currentUrl={data.mainImage}
            storagePath={`images/services-main-${Date.now()}`}
            onUploaded={(url) => setData({ ...data, mainImage: url })}
          />
        </Card>
        <Card>
          <CardTitle>Service cards</CardTitle>
          <div className="flex flex-col gap-2">
            {data.items.map((item, i) => (
              <div key={i} className="flex gap-2 items-center">
                <span className="text-xs text-gray-400 w-5 text-right shrink-0">{i + 1}</span>
                <TextInput
                  value={item.name}
                  onChange={(v) => {
                    const items = [...data.items];
                    items[i] = { name: v };
                    setData({ ...data, items });
                  }}
                  placeholder="Service name"
                />
                <button
                  onClick={() =>
                    setData({ ...data, items: data.items.filter((_, j) => j !== i) })
                  }
                  className="text-gray-300 hover:text-red-400 text-xl leading-none transition"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => setData({ ...data, items: [...data.items, { name: "" }] })}
            className="self-start text-sm text-orange-500 hover:text-orange-600 font-medium"
          >
            + Add service
          </button>
        </Card>
      </div>
    </>
  );
}

function AdvisorsEditor() {
  const { data, setData, save, saving, saved } = useSectionState<AdvisorsContent>(
    "advisors",
    defaultContent.advisors
  );
  return (
    <>
      <SaveBar onSave={save} saving={saving} saved={saved} />
      <div className="flex flex-col gap-5">
        {data.items.map((item, i) => (
          <Card key={i}>
            <div className="flex items-center justify-between">
              <CardTitle>Advisor {i + 1}</CardTitle>
              <button
                onClick={() =>
                  setData({ ...data, items: data.items.filter((_, j) => j !== i) })
                }
                className="text-xs text-gray-400 hover:text-red-400 font-medium transition"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Name / Title">
                <TextInput value={item.title} onChange={(v) => {
                  const items = [...data.items]; items[i] = { ...item, title: v }; setData({ ...data, items });
                }} />
              </Field>
              <Field label="Phone">
                <TextInput value={item.phone} onChange={(v) => {
                  const items = [...data.items]; items[i] = { ...item, phone: v }; setData({ ...data, items });
                }} />
              </Field>
            </div>
            <Field label="Institution">
              <TextInput value={item.institution} onChange={(v) => {
                const items = [...data.items]; items[i] = { ...item, institution: v }; setData({ ...data, items });
              }} />
            </Field>
            <Field label="Email (optional)">
              <TextInput value={item.email || ""} onChange={(v) => {
                const items = [...data.items]; items[i] = { ...item, email: v }; setData({ ...data, items });
              }} />
            </Field>
          </Card>
        ))}
        <button
          onClick={() =>
            setData({ ...data, items: [...data.items, { title: "", institution: "", phone: "", email: "" }] })
          }
          className="self-start text-sm text-orange-500 hover:text-orange-600 font-medium"
        >
          + Add advisor
        </button>
      </div>
    </>
  );
}

function PartnersEditor() {
  const { data, setData, save, saving, saved } = useSectionState<PartnersContent>(
    "partners",
    defaultContent.partners
  );
  return (
    <>
      <SaveBar onSave={save} saving={saving} saved={saved} />
      <div className="flex flex-col gap-5">
        {data.items.map((item, i) => (
          <Card key={i}>
            <div className="flex items-center justify-between">
              <CardTitle>Partner {i + 1}</CardTitle>
              <button
                onClick={() =>
                  setData({ ...data, items: data.items.filter((_, j) => j !== i) })
                }
                className="text-xs text-gray-400 hover:text-red-400 font-medium transition"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Organisation name">
                <TextInput value={item.title} onChange={(v) => {
                  const items = [...data.items]; items[i] = { ...item, title: v }; setData({ ...data, items });
                }} />
              </Field>
              <Field label="Location">
                <TextInput value={item.location} onChange={(v) => {
                  const items = [...data.items]; items[i] = { ...item, location: v }; setData({ ...data, items });
                }} />
              </Field>
              <Field label="Contact person">
                <TextInput value={item.contactPerson} onChange={(v) => {
                  const items = [...data.items]; items[i] = { ...item, contactPerson: v }; setData({ ...data, items });
                }} />
              </Field>
              <Field label="Phone">
                <TextInput value={item.phone} onChange={(v) => {
                  const items = [...data.items]; items[i] = { ...item, phone: v }; setData({ ...data, items });
                }} />
              </Field>
            </div>
            <Field label="Email">
              <TextInput value={item.email} onChange={(v) => {
                const items = [...data.items]; items[i] = { ...item, email: v }; setData({ ...data, items });
              }} />
            </Field>
          </Card>
        ))}
        <button
          onClick={() =>
            setData({ ...data, items: [...data.items, { title: "", location: "", contactPerson: "", phone: "", email: "" }] })
          }
          className="self-start text-sm text-orange-500 hover:text-orange-600 font-medium"
        >
          + Add partner
        </button>
      </div>
    </>
  );
}

function AboutEditor() {
  const { data, setData, save, saving, saved } = useSectionState<AboutContent>(
    "about",
    defaultContent.about
  );
  return (
    <>
      <SaveBar onSave={save} saving={saving} saved={saved} />
      <div className="grid grid-cols-1 gap-5">
        <Card>
          <CardTitle>Section heading</CardTitle>
          <Field label="Title">
            <TextInput value={data.title} onChange={(v) => setData({ ...data, title: v })} />
          </Field>
          <Field label="Main description">
            <Textarea rows={5} value={data.description} onChange={(v) => setData({ ...data, description: v })} />
          </Field>
        </Card>
        <Card>
          <CardTitle>Development services list</CardTitle>
          <div className="flex flex-col gap-3">
            {data.services.map((s, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-xs text-gray-400 w-5 text-right pt-2.5 shrink-0">{i + 1}</span>
                <Textarea
                  rows={2}
                  value={s.text}
                  onChange={(v) => {
                    const services = [...data.services]; services[i] = { text: v }; setData({ ...data, services });
                  }}
                />
                <button
                  onClick={() => setData({ ...data, services: data.services.filter((_, j) => j !== i) })}
                  className="text-gray-300 hover:text-red-400 text-xl leading-none mt-2 transition"
                >×</button>
              </div>
            ))}
          </div>
          <button
            onClick={() => setData({ ...data, services: [...data.services, { text: "" }] })}
            className="self-start text-sm text-orange-500 hover:text-orange-600 font-medium"
          >
            + Add service
          </button>
        </Card>
        <Card>
          <CardTitle>Our Approach</CardTitle>
          <Field label="Approach text">
            <Textarea rows={3} value={data.approachText} onChange={(v) => setData({ ...data, approachText: v })} />
          </Field>
        </Card>
      </div>
    </>
  );
}

function GalleryEditor() {
  const { data, setData, save, saving, saved } = useSectionState<GalleryContent>(
    "gallery",
    defaultContent.gallery
  );
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function addImages(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploading(true);
    const urls = await Promise.all(
      files.map((f) => uploadImage(f, `gallery/${Date.now()}-${f.name}`))
    );
    setData((prev) => ({ images: [...prev.images, ...urls] }));
    setUploading(false);
  }

  return (
    <>
      <SaveBar onSave={save} saving={saving} saved={saved} />
      <Card>
        <div className="flex items-center justify-between mb-2">
          <CardTitle>Gallery images ({data.images.length})</CardTitle>
          <button
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-1.5 text-sm bg-orange-50 hover:bg-orange-100 text-orange-600 font-medium px-4 py-2 rounded-lg transition disabled:opacity-50"
          >
            {uploading ? (
              <><span className="w-3.5 h-3.5 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" /> Uploading…</>
            ) : (
              <><span className="text-base leading-none">+</span> Upload images</>
            )}
          </button>
        </div>
        <p className="text-xs text-gray-400 mb-4">Hover over an image and click × to remove it.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {data.images.map((src, i) => (
            <div key={i} className="relative group aspect-square">
              <img src={src} alt="" className="w-full h-full object-cover rounded-xl border border-gray-100" />
              <button
                onClick={() => setData({ images: data.images.filter((_, j) => j !== i) })}
                className="absolute top-1.5 right-1.5 bg-black/60 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:bg-red-500"
              >×</button>
            </div>
          ))}
          <button
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="aspect-square rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 text-gray-400 hover:border-orange-300 hover:text-orange-400 transition"
          >
            <span className="text-2xl leading-none">+</span>
            <span className="text-xs">Add photo</span>
          </button>
        </div>
        <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={addImages} />
      </Card>
    </>
  );
}

function TeamEditor() {
  const { data, setData, save, saving, saved } = useSectionState<TeamContent>(
    "team",
    defaultContent.team
  );
  return (
    <>
      <SaveBar onSave={save} saving={saving} saved={saved} />
      <div className="grid grid-cols-1 gap-5">
        <Card>
          <CardTitle>Page header</CardTitle>
          <Field label="Title">
            <TextInput value={data.headerTitle} onChange={(v) => setData({ ...data, headerTitle: v })} />
          </Field>
          <Field label="Description">
            <Textarea rows={3} value={data.headerDescription} onChange={(v) => setData({ ...data, headerDescription: v })} />
          </Field>
        </Card>

        <Card>
          <CardTitle>Team members</CardTitle>
          <div className="flex flex-col gap-3">
            {data.members.map((m, i) => (
              <div key={i} className="flex gap-3 items-center">
                <span className="text-xs text-gray-400 w-5 text-right shrink-0">{i + 1}</span>
                <TextInput
                  value={m.title}
                  onChange={(v) => {
                    const members = [...data.members]; members[i] = { ...m, title: v }; setData({ ...data, members });
                  }}
                  placeholder="Role / Title"
                />
                <TextInput
                  value={m.name}
                  onChange={(v) => {
                    const members = [...data.members]; members[i] = { ...m, name: v }; setData({ ...data, members });
                  }}
                  placeholder="Full name"
                />
                <button
                  onClick={() => setData({ ...data, members: data.members.filter((_, j) => j !== i) })}
                  className="text-gray-300 hover:text-red-400 text-xl leading-none transition shrink-0"
                >×</button>
              </div>
            ))}
          </div>
          <button
            onClick={() => setData({ ...data, members: [...data.members, { title: "", name: "" }] })}
            className="self-start text-sm text-orange-500 hover:text-orange-600 font-medium"
          >
            + Add member
          </button>
        </Card>

        <Card>
          <CardTitle>Zonal coordinators</CardTitle>
          <div className="flex flex-col gap-4">
            {data.zonalCoordinators.map((c, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-gray-500">Coordinator {i + 1}</span>
                  <button
                    onClick={() => setData({ ...data, zonalCoordinators: data.zonalCoordinators.filter((_, j) => j !== i) })}
                    className="text-xs text-gray-400 hover:text-red-400 font-medium transition"
                  >Remove</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Field label="Zone"><TextInput value={c.zone} onChange={(v) => { const z = [...data.zonalCoordinators]; z[i] = { ...c, zone: v }; setData({ ...data, zonalCoordinators: z }); }} /></Field>
                  <Field label="Name"><TextInput value={c.coordinator} onChange={(v) => { const z = [...data.zonalCoordinators]; z[i] = { ...c, coordinator: v }; setData({ ...data, zonalCoordinators: z }); }} /></Field>
                  <Field label="Department"><TextInput value={c.department} onChange={(v) => { const z = [...data.zonalCoordinators]; z[i] = { ...c, department: v }; setData({ ...data, zonalCoordinators: z }); }} /></Field>
                  <Field label="Institution"><TextInput value={c.institution} onChange={(v) => { const z = [...data.zonalCoordinators]; z[i] = { ...c, institution: v }; setData({ ...data, zonalCoordinators: z }); }} /></Field>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setData({ ...data, zonalCoordinators: [...data.zonalCoordinators, { zone: "", coordinator: "", department: "", institution: "" }] })}
            className="self-start text-sm text-orange-500 hover:text-orange-600 font-medium mt-1"
          >
            + Add coordinator
          </button>
        </Card>
      </div>
    </>
  );
}

function ContactPageEditor() {
  const { data, setData, save, saving, saved } = useSectionState<ContactPageContent>(
    "contactPage",
    defaultContent.contactPage
  );
  return (
    <>
      <SaveBar onSave={save} saving={saving} saved={saved} />
      <Card>
        <Field label="Button label">
          <TextInput value={data.title} onChange={(v) => setData({ ...data, title: v })} />
        </Field>
        <Field label="Description">
          <Textarea rows={5} value={data.description} onChange={(v) => setData({ ...data, description: v })} />
        </Field>
      </Card>
    </>
  );
}

function FooterEditor() {
  const { data, setData, save, saving, saved } = useSectionState<FooterContent>(
    "footer",
    defaultContent.footer
  );
  return (
    <>
      <SaveBar onSave={save} saving={saving} saved={saved} />
      <Card>
        <CardTitle>Contact details</CardTitle>
        <Field label="Address">
          <TextInput value={data.address} onChange={(v) => setData({ ...data, address: v })} />
        </Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Phone 1">
            <TextInput value={data.phone1} onChange={(v) => setData({ ...data, phone1: v })} />
          </Field>
          <Field label="Phone 2">
            <TextInput value={data.phone2} onChange={(v) => setData({ ...data, phone2: v })} />
          </Field>
        </div>
        <Field label="Email">
          <TextInput value={data.email} onChange={(v) => setData({ ...data, email: v })} />
        </Field>
      </Card>
    </>
  );
}

// ─── overview / home screen ───────────────────────────────────────────────────
function Overview({ onNavigate }: { onNavigate: (id: string) => void }) {
  const sections: { id: string; label: string; desc: string; Icon: NavIcon }[] = [
    { id: "hero",        label: "Hero Banner",          desc: "Welcome title and intro text",                    Icon: HiHome },
    { id: "services",   label: "Our Services",          desc: "Section title, description and service cards",    Icon: HiCog6Tooth },
    { id: "advisors",   label: "Research Advisors",     desc: "Advisor names, institutions and contacts",        Icon: HiAcademicCap },
    { id: "partners",   label: "Partners",              desc: "Partner organisations and contacts",              Icon: HiUserGroup },
    { id: "about",      label: "About CDRT",            desc: "About text, services list and approach",          Icon: HiInformationCircle },
    { id: "gallery",    label: "Gallery",               desc: "About page photo gallery",                        Icon: HiPhoto },
    { id: "team",       label: "Team & Coordinators",   desc: "Staff members and zonal coordinators",            Icon: HiUsers },
    { id: "contactPage",label: "Contact Page",          desc: "Contact page heading and description",            Icon: HiPhone },
    { id: "footer",     label: "Footer",                desc: "Address, phone numbers and email",                Icon: HiLink },
    { id: "theme",      label: "Theme & Appearance",    desc: "Brand colours, backgrounds, text colours and fonts", Icon: HiSwatch },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-6 text-white shadow-sm">
        <p className="text-sm font-medium opacity-80 mb-1">Welcome back</p>
        <h2 className="text-2xl font-bold">CDRT Consult CMS</h2>
        <p className="text-sm opacity-75 mt-2">
          Select any section below to edit it. Changes go live as soon as you publish.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onNavigate(s.id)}
            className="bg-white border border-gray-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-md hover:border-orange-200 transition group"
          >
            <div className="w-9 h-9 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-3 transition">
              <s.Icon className="w-5 h-5 text-orange-500" />
            </div>
            <p className="font-semibold text-gray-800 group-hover:text-orange-500 transition text-sm">
              {s.label}
            </p>
            <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── theme editor ─────────────────────────────────────────────────────────────

const COLOR_FIELDS: { key: keyof ThemeContent; label: string; hint: string }[] = [
  { key: "primaryColor",  label: "Primary / brand colour",      hint: "Buttons, active links, badges, checkmarks" },
  { key: "headingColor",  label: "Heading text colour",         hint: "All page & section titles" },
  { key: "bodyColor",     label: "Body text colour",            hint: "Paragraphs and descriptions" },
  { key: "darkTextColor", label: "Text on dark backgrounds",    hint: "Text inside the black hero & footer sections" },
  { key: "navbarBg",      label: "Navbar background",           hint: "Top navigation bar" },
  { key: "darkBg",        label: "Dark section background",     hint: "Footer, team header, contact header" },
  { key: "sectionBg",     label: "Light section background",    hint: "Alternating pale sections (advisors, partners)" },
  { key: "cardBg",        label: "Service card background",     hint: "The tinted cards in the Our Services section" },
];

function ColorRow({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-4 py-3.5 border-b border-gray-100 last:border-0">
      {/* swatch + native picker */}
      <label className="relative cursor-pointer shrink-0">
        <span
          className="block w-10 h-10 rounded-xl border-2 border-white shadow-md ring-1 ring-gray-200"
          style={{ background: value }}
        />
        <input
          type="color"
          value={value.length === 7 ? value : "#FF6525"}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        />
      </label>

      {/* labels */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-700 leading-tight">{label}</p>
        <p className="text-xs text-gray-400 mt-0.5 truncate">{hint}</p>
      </div>

      {/* hex input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={9}
        className="w-28 text-xs font-mono bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-400 focus:bg-white uppercase"
      />
    </div>
  );
}

function FontRow({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-4 py-3.5 border-b border-gray-100 last:border-0">
      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
        <span className="text-orange-500 font-bold text-sm">Aa</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-700 leading-tight">{label}</p>
        <p className="text-xs text-gray-400 mt-0.5">{hint}</p>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-36 text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-400 focus:bg-white"
        style={{ fontFamily: `'${value}', sans-serif` }}
      >
        {AVAILABLE_FONTS.map((f) => (
          <option key={f} value={f} style={{ fontFamily: `'${f}', sans-serif` }}>
            {f}
          </option>
        ))}
      </select>
    </div>
  );
}

function ThemeEditor() {
  const { data, setData, save, saving, saved } = useSectionState<ThemeContent>(
    "theme",
    defaultTheme
  );

  // live-preview: inject updated CSS vars as user picks colours
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--cdrt-primary",     data.primaryColor);
    root.style.setProperty("--cdrt-heading",      data.headingColor);
    root.style.setProperty("--cdrt-body",         data.bodyColor);
    root.style.setProperty("--cdrt-dark-text",    data.darkTextColor);
    root.style.setProperty("--cdrt-navbar-bg",    data.navbarBg);
    root.style.setProperty("--cdrt-dark-bg",      data.darkBg);
    root.style.setProperty("--cdrt-section-bg",   data.sectionBg);
    root.style.setProperty("--cdrt-card-bg",      data.cardBg);
    root.style.setProperty("--cdrt-font-heading", `'${data.headingFont}', sans-serif`);
    root.style.setProperty("--cdrt-font-body",    `'${data.bodyFont}', sans-serif`);
  }, [data]);

  function update(key: keyof ThemeContent, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function resetToDefaults() {
    setData(defaultTheme);
  }

  return (
    <>
      <SaveBar onSave={save} saving={saving} saved={saved} />
      <div className="flex flex-col gap-5">

        {/* live preview strip */}
        <div
          className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          style={{ background: data.navbarBg }}
        >
          <div className="px-5 py-3 flex items-center gap-3 border-b border-gray-100">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="ml-2 text-xs" style={{ color: data.bodyColor, fontFamily: `'${data.bodyFont}', sans-serif` }}>
              Live preview
            </span>
          </div>
          <div className="px-5 py-5 flex flex-col gap-3">
            <h2
              className="text-xl font-bold"
              style={{ color: data.headingColor, fontFamily: `'${data.headingFont}', sans-serif` }}
            >
              Welcome to CDRT Consult
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: data.bodyColor, fontFamily: `'${data.bodyFont}', sans-serif` }}
            >
              Where we empower sustainable development through people-centered solutions.
            </p>
            <div className="flex gap-2 mt-1">
              <span
                className="text-white text-xs font-semibold px-4 py-2 rounded-full"
                style={{ background: data.primaryColor }}
              >
                Contact Us
              </span>
              <span
                className="text-xs font-semibold px-4 py-2 rounded-full"
                style={{ background: data.cardBg, color: data.bodyColor }}
              >
                Our Services
              </span>
            </div>
          </div>
          <div className="px-5 py-3" style={{ background: data.darkBg }}>
            <p className="text-xs" style={{ color: data.darkTextColor, fontFamily: `'${data.bodyFont}', sans-serif` }}>
              Footer / dark section preview
            </p>
          </div>
        </div>

        {/* colours */}
        <Card>
          <div className="flex items-center justify-between mb-1">
            <CardTitle>Colours</CardTitle>
            <button
              onClick={resetToDefaults}
              className="text-xs text-gray-400 hover:text-orange-500 font-medium transition"
            >
              Reset to defaults
            </button>
          </div>
          {COLOR_FIELDS.map(({ key, label, hint }) => (
            <ColorRow
              key={key}
              label={label}
              hint={hint}
              value={data[key] as string}
              onChange={(v) => update(key, v)}
            />
          ))}
        </Card>

        {/* fonts */}
        <Card>
          <CardTitle>Fonts</CardTitle>
          <FontRow
            label="Heading font"
            hint="Page titles, section headings, card titles"
            value={data.headingFont}
            onChange={(v) => update("headingFont", v)}
          />
          <FontRow
            label="Body font"
            hint="Paragraphs, labels, buttons, navigation"
            value={data.bodyFont}
            onChange={(v) => update("bodyFont", v)}
          />
        </Card>

      </div>
    </>
  );
}

// ─── editor map ───────────────────────────────────────────────────────────────
const EDITORS: Record<string, React.ComponentType> = {
  hero: HeroEditor,
  services: ServicesEditor,
  advisors: AdvisorsEditor,
  partners: PartnersEditor,
  about: AboutEditor,
  gallery: GalleryEditor,
  team: TeamEditor,
  contactPage: ContactPageEditor,
  footer: FooterEditor,
  theme: ThemeEditor,
};

const SECTION_LABELS: Record<string, string> = {
  hero: "Hero Banner",
  services: "Our Services",
  advisors: "Research Advisors",
  partners: "Partners",
  about: "About CDRT",
  gallery: "Gallery",
  team: "Team & Coordinators",
  contactPage: "Contact Page",
  footer: "Footer",
  theme: "Theme & Appearance",
};

// ─── main dashboard ───────────────────────────────────────────────────────────
export default function Dashboard() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [active, setActive] = useState("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.replace("/admin");
      else setChecking(false);
    });
    return unsub;
  }, [router]);

  async function handleLogout() {
    await signOut(auth);
    router.replace("/admin");
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {/* top bar skeleton */}
        <div className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-200 animate-pulse" />
            <div className="w-16 h-4 rounded bg-gray-200 animate-pulse hidden sm:block" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-20 h-7 rounded-lg bg-gray-200 animate-pulse hidden sm:block" />
            <div className="w-16 h-7 rounded-lg bg-gray-200 animate-pulse" />
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* sidebar skeleton */}
          <aside className="hidden lg:flex flex-col w-56 bg-white border-r border-gray-100 shrink-0 p-3 gap-2">
            <div className="w-full h-8 rounded-lg bg-gray-100 animate-pulse mb-1" />
            {/* group 1 */}
            <div className="w-24 h-3 rounded bg-gray-100 animate-pulse mt-2 mb-1 ml-2" />
            {[1,2,3,4].map(i => (
              <div key={i} className="w-full h-8 rounded-lg bg-gray-100 animate-pulse" />
            ))}
            {/* group 2 */}
            <div className="w-20 h-3 rounded bg-gray-100 animate-pulse mt-3 mb-1 ml-2" />
            {[1,2].map(i => (
              <div key={i} className="w-full h-8 rounded-lg bg-gray-100 animate-pulse" />
            ))}
            {/* group 3 */}
            <div className="w-20 h-3 rounded bg-gray-100 animate-pulse mt-3 mb-1 ml-2" />
            {[1,2,3].map(i => (
              <div key={i} className="w-full h-8 rounded-lg bg-gray-100 animate-pulse" />
            ))}
          </aside>

          {/* main content skeleton */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-6 flex flex-col gap-5">
            {/* hero card */}
            <div className="rounded-2xl bg-gray-200 animate-pulse h-28 w-full" />
            {/* overview grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {[1,2,3,4,5,6,7,8,9,10].map(i => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 animate-pulse" />
                  <div className="w-32 h-4 rounded bg-gray-100 animate-pulse" />
                  <div className="w-full h-3 rounded bg-gray-100 animate-pulse" />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }

  const ActiveEditor = active !== "overview" ? EDITORS[active] : null;

  function navigate(id: string) {
    setActive(id);
    setMobileNavOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* ── top navbar ── */}
      <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30 shrink-0">
        <div className="flex items-center gap-3">
          {/* mobile hamburger */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-800 p-1"
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            <HiBars3 className="w-5 h-5" />
          </button>
          <img src="/cdrt-logo.png" alt="CDRT" className="h-8" />
          <span className="font-semibold text-gray-700 text-sm hidden sm:block">Admin</span>
          {active !== "overview" && (
            <>
              <span className="text-gray-300 hidden sm:block">/</span>
              <span className="text-sm text-gray-500 hidden sm:block">{SECTION_LABELS[active]}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-orange-500 font-medium px-3 py-1.5 rounded-lg hover:bg-orange-50 transition"
          >
            View site
            <HiArrowTopRightOnSquare className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-500 font-medium px-3 py-1.5 rounded-lg hover:bg-red-50 transition"
          >
            <HiArrowRightOnRectangle className="w-4 h-4" />
            <span className="hidden sm:inline">Log out</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">

        {/* ── sidebar (desktop) ── */}
        <aside className="hidden lg:flex flex-col w-56 bg-white border-r border-gray-100 shrink-0 overflow-y-auto">
          <nav className="flex flex-col gap-1 p-3 pt-4">
            <button
              onClick={() => navigate("overview")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition text-left ${
                active === "overview"
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <HiSquares2X2 className="w-4 h-4 shrink-0" /> Overview
            </button>

            {NAV.map((group) => (
              <div key={group.group} className="mt-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-1">
                  {group.group}
                </p>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition text-left ${
                      active === item.id
                        ? "bg-orange-50 text-orange-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                  >
                    <item.Icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* ── sidebar (mobile overlay) ── */}
        {mobileNavOpen && (
          <div className="lg:hidden fixed inset-0 z-40 flex">
            <div className="absolute inset-0 bg-black/30" onClick={() => setMobileNavOpen(false)} />
            <aside className="relative w-64 bg-white h-full shadow-xl overflow-y-auto flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <span className="font-semibold text-gray-700 text-sm">Navigation</span>
                <button onClick={() => setMobileNavOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <HiXMark className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-3">
                <button
                  onClick={() => navigate("overview")}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition text-left ${
                    active === "overview" ? "bg-orange-50 text-orange-600" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <HiSquares2X2 className="w-4 h-4 shrink-0" /> Overview
                </button>
                {NAV.map((group) => (
                  <div key={group.group} className="mt-4">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-1">
                      {group.group}
                    </p>
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => navigate(item.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition text-left ${
                          active === item.id ? "bg-orange-50 text-orange-600" : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <item.Icon className="w-4 h-4 shrink-0" /> {item.label}
                      </button>
                    ))}
                  </div>
                ))}
              </nav>
            </aside>
          </div>
        )}

        {/* ── main content ── */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-8">
            {active !== "overview" && (
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => setActive("overview")}
                  className="text-xs text-gray-400 hover:text-gray-600 transition"
                >
                  Overview
                </button>
                <HiChevronRight className="w-3 h-3 text-gray-300" />
                <span className="text-xs text-gray-600 font-medium">{SECTION_LABELS[active]}</span>
              </div>
            )}

            {active !== "overview" && (
              <h1 className="text-xl font-bold text-gray-800 mb-6">{SECTION_LABELS[active]}</h1>
            )}

            {active === "overview" ? (
              <Overview onNavigate={navigate} />
            ) : ActiveEditor ? (
              <ActiveEditor />
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
}
