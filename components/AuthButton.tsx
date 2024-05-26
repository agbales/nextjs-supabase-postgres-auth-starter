import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useUser } from '@/app/auth/utils';
import { createClient } from '@/data/supabase/server';

export default async function AuthButton() {
  const user = await useUser();

  const signOut = async () => {
    'use server';

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/login');
  };

  return user ? (
    <div className="flex">
      <a href="/notes">Notes</a>
      <span>{user.email}</span>
      <form action={signOut}>
        <button>Logout</button>
      </form>
    </div>
  ) : (
    <Link href="/login">Login</Link>
  );
}
