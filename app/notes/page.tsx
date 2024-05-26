'use server';

import AddNoteButton from '@/components/AddNoteButton';
import Nav from '@/components/Nav';
import { getUserNotes } from '@/data/getUserNotes';
import { truncateText } from '@/utils/text';

export default async function Page() {
  const notes = (await getUserNotes()) as any[];

  return (
    <div>
      <Nav />
      <div className="container">
        <AddNoteButton />
        <div>
          {notes.map(note => (
            <div>
              <a href={`/notes/${note.id}`} key={note.id}>
                <h2>{note.title}</h2>
              </a>
              <p>{truncateText(note.text, 500)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
