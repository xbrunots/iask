require('dotenv/config');
import {
  createClient
} from '@supabase/supabase-js'

import setup from "./setup.json";

const supabase = () => createClient('setup.SUPABASE_URL', 'setup.SUPABASE_KEY');


exports.supabase = supabase;