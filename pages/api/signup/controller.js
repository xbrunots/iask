const sql = require('../../../config/mysql');
require("dotenv").config();
const jwt = require('jsonwebtoken');

export async function set(json) {
    var response = {
        statusCode: 501,
        data: null
    }
    console.log("1");
    try {
        const data = await sql.connection().table("users").add(json);
        console.log("2");
        if (data.length == 0) {
            console.log("3");
            response.statusCode = 401;
            response.data = { message: "Dados inválidos" };
            return response;

        } else {
            console.log("4"); 
            response.statusCode = 200;
            response.data = { success: true, data };
            return response;
        }
    } catch (error) {
        response.statusCode = 401;
        response.data = error;
        return response;
    }
}
