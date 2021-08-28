function home(request, response) {
    const testeDinamico = new Date();

    response.json({
        data: testeDinamico
    }) 
}


export default home;