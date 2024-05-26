'use client';

import React, { useState } from 'react';
import { Note } from '@/app/notes/types';
import Sidebar from '@/components/Sidebar';
import { saveNote } from '@/data/saveNote';
import { deleteNote } from '@/data/deleteNote';

export default function NotePage({ note }: { note: Note }) {
  if (!note) {
    return <div className="container">Note not found.</div>;
  }

  const [currentText, setCurrentText] = useState(note.text);
  const [userFeedbackMessage, setUserFeedbackMessage] = useState('');

  const handleSave = async () => {
    await saveNote(note.id, currentText);
    setUserFeedbackMessage('Note saved!');
    setTimeout(() => setUserFeedbackMessage(''), 1000);
  };

  const handleDelete = async () => {
    await deleteNote(note.id);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container">
        <textarea
          defaultValue={note.text}
          onChange={e => setCurrentText(e.target.value)}
        />
        <div className="flex">
          <button onClick={() => handleSave()}>Save</button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
        <p>{userFeedbackMessage}</p>
      </div>
    </div>
  );
}
