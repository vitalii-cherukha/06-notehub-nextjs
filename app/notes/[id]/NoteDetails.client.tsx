'use client';
import NoteDetails from '@/components/NoteDetails/NoteDetails';
import { fetchNoteById } from '@/lib/api/noteService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {data && <NoteDetails note={data} />}
      {isLoading && <p>Loading, please wait...</p>}
    </>
  );
};

export default NoteDetailsClient;
