import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://prnyckkpngvdhmvrsacd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBybnlja2twbmd2ZGhtdnJzYWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNTUyMTksImV4cCI6MjAwNjgzMTIxOX0.VK7btRaCoK8e2joB4XuhbkxgiL5isZuinK3ZzcLxqG4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;