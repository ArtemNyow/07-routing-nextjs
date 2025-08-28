import NotePreviewClient from './NotePreview.client';

interface Props {
  params: { id: string };
}

export default function NotePreviewPage({ params }: Props) {
  return <NotePreviewClient noteId={params.id} />;
}
