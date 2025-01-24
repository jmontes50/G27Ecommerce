// npm install @supabase/supabase-js @supabase/auth-ui-react @supabase/auth-ui-shared
import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseApiKey = import.meta.env.VITE_SUPABASE_APIKEY;

console.log(supabaseURL, supabaseApiKey);

const supabase = createClient(supabaseURL, supabaseApiKey);

export default supabase;