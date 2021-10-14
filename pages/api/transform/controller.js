const sql = require('../../../config/mysql');
require("dotenv").config();

export async function fetch(table, core) {

    var response = {
        statusCode: 501,
        data: null
    }

    try {

        var whereByRoute = null;

        if (table.length > 1 && table[1].indexOf("=") > -1) {
            if (table[1].indexOf(table[0]) > -1) {
                whereByRoute = table[1];
            } else {
                whereByRoute = table[0] + "." + table[1];
            }
        }

        if (core.getters.data_field == null && core.getters.data_field == undefined) {
            core.getters.data_field = "*";
        }

        if (core.getters.data_limit == null || core.getters.data_limit == undefined) {
            core.getters.data_limit = 500;
        }

        if (core.getters.data_order == null || core.getters.data_order == undefined) {
            core.getters.data_order = '';
        }

        if (core.getters.data_where == null || core.getters.data_where == undefined) {
            core.getters.data_where = '1 = 1';
        }

        var join;

        if (core.getters.data_join == null || core.getters.data_join == undefined || core.getters.data_join.indexOf(".") == -1 ||
            core.getters.data_join_on == null || core.getters.data_join_on == undefined) {
            core.getters.data_join = null;

        } else {
            const tableForJoin = core.getters.data_join.split(".")[0];
            const colForJoin = core.getters.data_join.split(".")[1];
            join = JSON.parse('{ "' + tableForJoin + '" : { ' +
                '"on" : {  "' + core.getters.data_join_on + '" : "' + colForJoin + '" } ' +
                ' }  }');
        }



        const data = await sql.connection()
            .table(table[0])
            .field(core.getters.data_field)
            .order(core.getters.data_order)
            .where(core.getters.data_where)
            .where(whereByRoute)
            .limit(core.getters.data_limit)
            .join(join)
            .select();


        console.log("  1  ====================================");

        response.statusCode = 200;
        response.data = data;
        return response;
    }
    catch (error) {
        response.statusCode = 403;
        response.data = error;
        return response;
    }
}

export async function add(table, json) {
    var response = {
        statusCode: 501,
        data: null
    }

    try {
        const data = await sql.connection().table(table[0]).add(json);
        response.statusCode = 200;
        response.data = data;
        return response;
    }
    catch (error) {
        response.statusCode = 403;
        response.data = error;
        return response;
    }
}


export async function update(table, core, json) {
    var response = {
        statusCode: 501,
        data: null
    }

    try {
        var whereByRoute = null;

        if (table.length > 1 && table[1].indexOf("=") > -1) {
            if (table[1].indexOf(table[0]) > -1) {
                whereByRoute = table[1];
            } else {
                whereByRoute = table[0] + "." + table[1];
            }
        }

        if (core.getters.data_where == null || core.getters.data_where == undefined) {
            core.getters.data_where = null;
        }

        if (core.getters.data_where == null && whereByRoute == null) {
            response.statusCode = 403;
            response.data = "Parâmetros inválidos!";
            return response;
        }

        whereByRoute = core.getters.data_where == null ? whereByRoute : whereByRoute != null ? core.getters.data_where + " AND " + whereByRoute : core.getters.data_where;


        const data = await sql.connection()
            .table(table[0])
            .update(json,
                whereByRoute);
        response.statusCode = 200;
        response.data = data;
        return response;
    }
    catch (error) {
        response.statusCode = 403;
        response.data = error;
        return response;
    }
}




export async function deleteItem(table, core) {
    var response = {
        statusCode: 501,
        data: null
    }

    try {
        var whereByRoute = null;

        if (table.length > 1 && table[1].indexOf("=") > -1) {
            if (table[1].indexOf(table[0]) > -1) {
                whereByRoute = table[1];
            } else {
                whereByRoute = table[0] + "." + table[1];
            }
        }

        if (core.getters.data_where == null || core.getters.data_where == undefined) {
            core.getters.data_where = null;
        }

        if (core.getters.data_where == null && whereByRoute == null) {
            response.statusCode = 403;
            response.data = "Parâmetros inválidos!";
            return response;
        }

        whereByRoute = core.getters.data_where == null ? whereByRoute : whereByRoute != null ? core.getters.data_where + " AND " + whereByRoute : core.getters.data_where;

        const data = await sql.connection()
            .table(table[0])
            .delete(whereByRoute);
        response.statusCode = 200;
        response.data = data;
        return response;
    }
    catch (error) {
        response.statusCode = 403;
        response.data = error;
        return response;
    }
}