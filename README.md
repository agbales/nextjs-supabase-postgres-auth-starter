# Starter template

This app is a bare bones scaffold for your next project with Next.js App Router, Supabase postgres + Supabase auth!

## Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Postgres + Auth setup

Sign up with [Supabase](https://supabase.com/).

Duplicate `.env.example` and name it `.env`. Fill out the environment variables with those provided for your Supabase project.

In the SQL editor, add a `notes` table

```
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    text TEXT,
    user_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

[Create a User]('/login') from the app, or manually create a test
user on the Supabase UI.

Finally, insert mock notes, replacing the `user_id` with your own.

```
INSERT INTO notes (title, text, user_id) VALUES
('First Note', 'This is the first note.', 'your_supabase_user_id'),
('Second Note', 'This is the second note.', 'your_supabase_user_id');
```

`/api/notes` should now provide data!
