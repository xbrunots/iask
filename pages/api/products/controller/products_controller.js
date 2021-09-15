require('dotenv/config');
import {
    createClient
} from '@supabase/supabase-js'


export async function products() {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    let {
        data,
        error
    } = await supabase
        .from('products');


    exports.products = data;

    return data;
}