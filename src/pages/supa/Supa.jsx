import SupaInput from "./SupaInput";
import SupaList from "./SupaList";
import { createClient } from "@supabase/supabase-js";

export default function Supa() {
  const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
  console.log(supabase);

  return (
    <div>
      <SupaInput />
      <SupaList />
    </div>
  )
}
