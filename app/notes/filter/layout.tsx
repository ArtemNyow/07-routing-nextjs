
import { fetchTags } from "@/lib/api";
import css from "./LayoutNotes.module.css";
import SidebarNotes from "./@sidebar/SidebarNotes";

interface LayoutNotesProps {
  children: React.ReactNode;
}

export default async function LayoutNotes({ children }: LayoutNotesProps) {
  const tags = await fetchTags(); 

  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes tags={tags} />
      </aside>
      <main className={css.notesWrapper}>
        {children} 
      </main>
    </div>
  );
}
