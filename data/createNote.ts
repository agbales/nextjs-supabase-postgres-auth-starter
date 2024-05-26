'use server';

import { useUser } from '@/app/auth/utils';
import { createClient } from '@/data/supabase/server';
import { redirect } from 'next/navigation';

export async function createNote() {
  const user = await useUser();

  if (!user) {
    redirect('/login');
  }

  const supabase = createClient();

  const { error: noteError } = await supabase
    .from('notes')
    .insert({ user_id: user.id, title: 'New note', text: '' })
    .single();

  if (noteError) {
    console.error('Error creating note:', noteError);
    throw noteError;
  }

  return null;
}
