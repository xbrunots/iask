require('dotenv/config');
import {
    createClient
} from '@supabase/supabase-js'


export async function custumers() {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    let {
        data: profiles,
        error
    } = await supabase
        .from('contacts');

    console.log(profiles);

    exports.custumers = profiles;

    return profiles;
}