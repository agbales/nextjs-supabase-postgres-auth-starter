'use server';

import Nav from '@/components/Nav';
import Note from '@/components/Note';
import { getNote } from '@/data/getNote';

export default async function NotePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const noteId = parseInt(id, 10);
  const note = await getNote(noteId);

  return (
    <div>
      <Nav />
      <Note note={note} />
    </div>
  );
}
