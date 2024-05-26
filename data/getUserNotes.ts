'use server';

import { useUser } from '@/app/auth/utils';
import { createClient } from '@/data/supabase/server';
import { redirect } from 'next/navigation';

export async function getUserNotes() {
  // TODO: This uses supabase twice, may be possible to combine
  // user lookup + resources lookup into a single query
  const user = await useUser();

  if (!user) {
    redirect('/login');
  }

  const supabase = createClient();

  const { data: notes, error } = await supabase
    .from('notes')
    .select()
    .eq('user_id', user.id);

  if (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }

  return notes;
}
