import { useUser } from '@/app/auth/utils';
import SetupInstructions from '@/components/SetupInstructions';

export default async function Home() {
  const user = await useUser();
  return (
    <div className="container">
      <div className="setup">
        {user ? (
          <>
            <h1>Hello, {user.email}!</h1>
            <h4>
              <a href="/notes" className="mr-4 underline">
                See your your notes
              </a>
            </h4>
          </>
        ) : (
          <SetupInstructions />
        )}
      </div>
    </div>
  );
}
