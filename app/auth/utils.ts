import { createClient } from '@/data/supabase/server';
import { redirect } from 'next/navigation';

export async function useUser() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

type RedirectOptions = {
  redirectUrl?: string;
};

export async function useUserWithRedirect({
  redirectUrl = '/login',
}: RedirectOptions) {
  const user = await useUser();

  if (!user) {
    return redirect(redirectUrl);
  }

  return user;
}
