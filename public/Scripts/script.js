const url = 'http://localhost:5000/getfrases'

let frase_do_dia = {
    data:{
        dia:0,
        mes:0,
        ano:0
    },
    frase:null
} 

PutContent();

const btn = document.getElementById('button');

btn.addEventListener('click' ,GetFrase)


async function GetFrase(){

    const response = await fetch(url)

    const frase =   await response.json()

    frase_do_dia.data = frase.date;
    frase_do_dia.frase = frase.frase;

    const data = JSON.stringify(frase_do_dia.frase);

    localStorage.setItem('fraseDoDia' , data)
    
    PutContent()
    
}


function PutContent(){

    const main = document.getElementById('main');

    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();


    const obj = {
        date:{
            day,
            month,
            year
        },
        frase:frase_do_dia.frase
    }
    const actualMonth = FormatDate(month)

    const local =  localStorage.getItem('fraseDoDia')

    if(!local){
        main.innerHTML = `
        <div class="content">
        <p>Click No Botão Para receber uma frase inspiradora Para o Seu Dia!!!</p>
        <time></time>
        <Button id="button">Pegue a sua Frase Para Hoje!!</Button>
        </div>
        `
    }else{
         main.innerHTML = `
    <div class="content">
    <p>${local}</p>
    <time>${day} de ${actualMonth} de ${year}</time>
    <Button id="button">Pegue a sua Frase Para Hoje!!</Button>
    </div>
    `


    }
   

}



function FormatDate(value){

    const months = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro',
    ]


    return months[value - 1]
}