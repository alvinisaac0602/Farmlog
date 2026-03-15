import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mjcdgxfbtxscvbawbbpt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2RneGZidHhzY3ZiYXdiYnB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MDI3MzksImV4cCI6MjA4OTA3ODczOX0.cZFIMAvhL8jTtEb_rntAeNCKjoYbzmCIPOvpHvKuNz0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);