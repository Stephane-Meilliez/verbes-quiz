import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = 'https://rplwyzfyaomxrjqurkqu.supabase.co';
   const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwbHd5emZ5YW9teHJqcXVya3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5MTA4MjksImV4cCI6MjA4MDQ4NjgyOX0.HS2sS4E2Ex2WdJJ3tCh39nBrW0qj8iGxkXCXQAC5nSU';

   export const supabase = createClient(supabaseUrl, supabaseKey);
