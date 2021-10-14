const sql = require('../../../config/mysql');
require("dotenv").config();
const jwt = require('jsonwebtoken');

export async function auth(json) {
    var response = {
        statusCode: 501,
        data: null
    }
    console.log("1");
    try {
        const data = await sql.connection().table("users").select(json);
        console.log("2");
        if (data.length == 0) {
            console.log("3");
            response.statusCode = 401;
            response.data = { message: "Usuário ou senha incorretos" };
            return response;

        } else {
            console.log("4");
            var uid = data[0].uid;

            const token = jwt.sign({ uid: uid }, process.env.SECRET, {
                expiresIn: 60000
            });
            response.statusCode = 200;
            response.data = { token: token };
            return response;
        }
    } catch (error) {
        response.statusCode = 401;
        response.data = error;
        return response;
    }
}
