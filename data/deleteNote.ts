'use server';

import { useUser } from '@/app/auth/utils';
import { createClient } from '@/data/supabase/server';

export const deleteNote = async (noteId: number) => {
  const user = await useUser();

  if (!user) {
    throw new Error('User not found');
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from('notes')
    .delete()
    .eq('user_id', user.id)
    .eq('id', noteId);

  if (error) {
    throw new Error('Error deleting note');
  }

  return data;
};
