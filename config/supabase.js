require('dotenv/config');
import {
    createClient
} from '@supabase/supabase-js'


const supabase = () => createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

/*let { user, error } = await supabase.auth.signIn({
    email: 'xbrunots@email.com',
    password: 'UilIBOKGfOQaAGTCffSh'
  })
*/

exports.supabase = supabase;