import { createClient, type Session, type User } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";
const isSupabaseConfigured = supabaseUrl.length > 0 && supabaseAnonKey.length > 0;

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

function requireSupabase() {
  if (!supabase) {
    throw new Error(
      "Supabase client is not initialized. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set during the Vite build."
    );
  }

  return supabase;
}

export function getSupabaseClient() {
  return supabase;
}

export async function signUpWithEmail(email: string, password: string) {
  return requireSupabase().auth.signUp({ email, password });
}

export async function signInWithEmail(email: string, password: string) {
  return requireSupabase().auth.signInWithPassword({ email, password });
}

export async function signOut() {
  return requireSupabase().auth.signOut();
}

export async function getSession(): Promise<Session | null> {
  return requireSupabase().auth.getSession().then((result) => result.data.session);
}

export async function getUser(): Promise<User | null> {
  return requireSupabase().auth.getUser().then((result) => result.data.user);
}
