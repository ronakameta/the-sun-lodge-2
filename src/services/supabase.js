import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://woyslkfutjragxlsfkma.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndveXNsa2Z1dGpyYWd4bHNma21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2MjczNzgsImV4cCI6MjAzNTIwMzM3OH0.ANxsYer-f-lRgAeW8poV_WAtmLZL_zTYZXkpKo_-sZ4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
