'use server';

import { useUser } from '@/app/auth/utils';
import { Note } from '@/app/notes/types';
import { createClient } from '@/data/supabase/server';
import { redirect } from 'next/navigation';

export async function getNote(id: number) {
  const user = await useUser();

  if (!user) {
    redirect('/login');
  }

  const supabase = createClient();

  const { data: note, error } = await supabase
    .from('notes')
    .select()
    .eq('user_id', user.id)
    .eq('id', id);

  if (error) {
    console.error('Error fetching note:', error);
    throw error;
  }

  return note[0] as Note;
}
