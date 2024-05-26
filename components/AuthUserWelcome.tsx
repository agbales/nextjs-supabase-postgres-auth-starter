export default function AuthUserWelcome({ user }: { user: { email: string } }) {
  return (
    <>
      <h1>Hello, {user.email}!</h1>
      <h4>
        <a href="/notes" className="mr-4 underline">
          See your your notes
        </a>
      </h4>
    </>
  );
}
