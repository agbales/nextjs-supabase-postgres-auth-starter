'use client';

import { createNote } from '@/data/createNote';

export default function AddNoteButton() {
  const handleCreateNote = async () => {
    await createNote();
    location.reload();
  };

  return (
    <button className="max-w-150" onClick={() => handleCreateNote()}>
      New
    </button>
  );
}
