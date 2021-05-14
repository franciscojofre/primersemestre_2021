let continuar = confirm('Queres iniciar sesion?')

if(continuar == false){
    alert('Gracias por haber venido');
    window.location.href = 'https://netflix.com'
}

else{
    let integrantes = Number(prompt('Cuantas personas viven en tu casa?'));

    if(typeof(integrantes) == 'number' && integrantes>2){
        let familia = [];
        for (i=0; i<integrantes; i++){
            let persona = {}
            let nombre = prompt('Inserte un nombre de un integrante de la familia');
            let gasto = Number(prompt('Ingrese un valor de gastos'));
            
            persona.nombre = nombre;
            persona.gasto = gasto;

            familia.push(persona);
        }

        console.log(familia);

        for(let i=0; i<familia.length; i++){
            console.log(`nombre: ${familia[i].nombre}; gasto: ${familia[i].gasto}`);
        }

        let totalGastos = 0;
        for(let i=0; i<familia.length; i++){
            totalGastos = familia[i].gasto + totalGastos
        }

        console.log(`Total de gastos: ${totalGastos}`);
    }
    
    else{
        alert('Por favor ingresa unicamente un numero mayor a 2')
        window.location.reload();
    }
}