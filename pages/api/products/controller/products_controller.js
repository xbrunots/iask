import setup from "../../../../config/setup.json";

import {
    createClient
} from '@supabase/supabase-js'


export async function products() {
    const supabase = createClient(setup.SUPABASE_URL, setup.SUPABASE_KEY);

    let {
        data,
        error
    } = await supabase
        .from('products');


    exports.products = data;

    return data;
}