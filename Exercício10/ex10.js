function checkCar() {
    const carType = document.getElementById('carType').value;
    let message = "";

    switch(carType) {
        case 'hatch':
            message = "Compra efetuada com sucesso.";
            break;
        case 'sedan':
        case 'moto':
        case 'caminhonete':
            message = "Tem certeza que não prefere este modelo?";
            break;
        default:
            message = "Não trabalhamos com este tipo de automóvel aqui.";
            break;
    }

    document.getElementById('message').innerText = message;
}
