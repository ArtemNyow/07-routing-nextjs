import NotePreview from "./NotePreview/NotePreview";


interface NoteModalPageProps {
  params: { id: string };
}

export default function NoteModalPage({ params }: NoteModalPageProps) {
  return <NotePreview noteId={params.id} />;
}
