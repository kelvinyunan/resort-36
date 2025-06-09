import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ejwyljgkvbqbkhjzjxra.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqd3lsamdrdmJxYmtoanpqeHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NjIyMTUsImV4cCI6MjA2MjUzODIxNX0.Nw6NU6RAXEyRs7pzi2tYIgzQVA0U-aNm_o2z5SMcXVs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
