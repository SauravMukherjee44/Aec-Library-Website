const { createClient } = supabase
const supabaseUrl = `https://cvhyilfsattdglfdmvcu.supabase.co`
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2aHlpbGZzYXR0ZGdsZmRtdmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1NTE5MTksImV4cCI6MTk2MDEyNzkxOX0.wvKZxYcBbeUy9aJTw3XzbySmBJ8PkxVGXeopoucQpGY`

const _supabase = createClient(supabaseUrl, supabaseAnonKey)

//console.log(_supabase);