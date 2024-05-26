import { Note } from '@/app/notes/types';
import { useState } from 'react';
import { saveNote } from '@/data/saveNote';

function removeStyleTag(input: string) {
  return input.replace(/<style[^>]*>.*?<\/style>/gis, '');
}

export function useNoteSave(note: Note | null, markdown: string | null) {
  const [isSaving, setIsSaving] = useState(false);
  const [saveButtonText, setSaveButtonText] = useState('save');
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    if (!note || !markdown) return;

    const cleanedMarkdown = removeStyleTag(markdown);

    try {
      setIsSaving(true);
      setSaveButtonText('saving...');
      setError(null);
      await saveNote(note.id, cleanedMarkdown);
    } catch (error) {
      setError('Error saving note');
    } finally {
      setSaveButtonText('note saved');
      setTimeout(() => {
        setIsSaving(false);
        setSaveButtonText('save');
      }, 2500);
    }
  };

  return { handleSave, isSaving, saveButtonText, error };
}
