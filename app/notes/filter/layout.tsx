// app/notes/filter/[...slug]/layout.tsx
 // шлях до Sidebar
import { fetchTags } from "@/lib/api";
import css from "./LayoutNotes.module.css";
import SidebarNotes from "./@sidebar/SidebarNotes";

interface LayoutNotesProps {
  children: React.ReactNode;
}

export default async function LayoutNotes({ children }: LayoutNotesProps) {
  const tags = await fetchTags(); // список тегів для Sidebar

  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes tags={tags} />
      </aside>
      <main className={css.notesWrapper}>
        {children} {/* тут рендеряться NotesClient або інші компоненти */}
      </main>
    </div>
  );
}
