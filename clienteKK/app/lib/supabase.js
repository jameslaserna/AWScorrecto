// supabase.js
import { createClient } from '@supabase/supabase-js';

// Asegúrate de reemplazar estos valores con los de tu proyecto Supabase
const SUPABASE_URL = 'https://trxobfjrgbfcubjbzjph.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyeG9iZmpyZ2JmY3ViamJ6anBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1OTcyNDYsImV4cCI6MjA0ODE3MzI0Nn0.7TmvHYQxrtV53P_lWjVYRcK5jALiYz_8nYUCMb1h1cs';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
