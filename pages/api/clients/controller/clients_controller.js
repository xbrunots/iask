import setup from "../../../../config/setup.json";

import {
    createClient
} from '@supabase/supabase-js'

const supabase = createClient(setup.SUPABASE_URL, setup.SUPABASE_KEY);

export async function custumers() {

    var response = {
        statusCode: 0,
        data: null
    }

    let {
        data,
        error
    } = await supabase
        .from('contacts');

    if (error == null && error == undefined) {
        var lst = data;

        response.statusCode = 200;
        response.data = lst;

        return response;
    } else {
        response.statusCode = 203;
        response.data = error;

        return response;
    }
}

export async function add(json) {
    var response = {
        statusCode: 0,
        data: null
    }

    var body = json;
    const {
        data,
        error
    } = await supabase
        .from('contacts')
        .insert([body, ])

    if (error == null && error == undefined) {
        response.statusCode = 200;
        response.data = data;

        return response;
    } else {
        response.statusCode = 203;
        response.data = error;

        return response;
    }
}