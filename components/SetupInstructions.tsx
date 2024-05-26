export default async function SetupInstructions() {
  return (
    <div>
      <h1>Starter Template</h1>
      <ul>
        <li>Next.js App Router</li>
        <li>Supabase Postgres</li>
        <li>Supabase Auth</li>
        <li>Typescript</li>
      </ul>
      <h2>Setup</h2>
      <p>
        Sign up with <a href="https://supabase.com/">Supabase</a>.
      </p>
      <p>
        Duplicate `.env.example` and name it `.env`. Fill out the environment
        variables with those provided for your Supabase project.
      </p>
      <p>In the SQL editor, add a `notes` table</p>
      <pre>
        <code>
          CREATE TABLE notes (<br />
          id SERIAL PRIMARY KEY,
          <br />
          title VARCHAR(255),
          <br />
          text TEXT,
          <br />
          user_id INTEGER,
          <br />
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          <br />
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          <br />
          );
        </code>
      </pre>
      <p>
        <a href="/login">Create a User</a> from the app, or manually create a
        test user on the Supabase UI.
      </p>
      <p>Finally, insert mock notes, replacing the `user_id` with your own.</p>
      <pre>
        <code>
          INSERT INTO notes (title, text, user_id) VALUES
          <br />
          ('First Note', 'This is the first note.', 'your_supabase_user_id'),
          <br />
          ('Second Note', 'This is the second note.', 'your_supabase_user_id');
          <br />
        </code>
      </pre>
      <p>/api/notes should now provide data!</p>
    </div>
  );
}
