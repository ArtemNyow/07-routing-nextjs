import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes, NotesResponse } from "@/lib/api";

interface NotesPageProps {
  params: { slug?: string[] };
  searchParams: { page?: string };
}

export default async function NotesPage(props: NotesPageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const slug = params?.slug ?? [];
  const tag = slug.length === 0 || slug[0] === "All" ? "" : slug[0];

  const page = Number(searchParams?.page ?? 1);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<NotesResponse>({
    queryKey: ["notes", page, { tag }],
    queryFn: () => fetchNotes(tag, page, 12),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialTag={tag} initialPage={page} />
    </HydrationBoundary>
  );
}
