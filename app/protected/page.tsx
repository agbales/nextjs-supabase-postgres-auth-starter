import AuthButton from '@/components/AuthButton';
import Header from '@/components/Home';
import { useUserWithRedirect } from '@/app/auth/utils';

export default async function ProtectedPage() {
  const user = await useUserWithRedirect({ redirectUrl: '/login' });

  return (
    <>
      <div>
        <div>
          This is a protected page that you can only see as an authenticated
          user
        </div>
        <nav>
          <div>
            <div />
            <AuthButton />
          </div>
        </nav>
      </div>

      <div>
        <Header />
      </div>
    </>
  );
}
