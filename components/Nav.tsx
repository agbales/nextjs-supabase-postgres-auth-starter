import AuthButton from '@/components/AuthButton';

export default function Nav() {
  return (
    <nav className="navbar">
      <a href="/">
        <span>App</span>
      </a>
      <AuthButton />
    </nav>
  );
}
