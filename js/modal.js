function model() {
    document.getElementById('okno').style.display = 'block';
}
function model_exit() {
    document.getElementById('okno').style.display = 'none';
}


var kol = [0,0,0,0,0,0,0,0,0,0,0,0]; //кол-во препаратов

var summa = [800,750,600,850,770,830,780,850,670,560,840,700]; // сумма каждого товара

var itog = 0;

function tovar(id) {
   

    id = id.slice((5)); //последний элемент id

//проверка для создания
    if (kol[id - 1] < 1) {

        kol[id - 1] += 1;
        var div = document.createElement("div"); //создал массив
        div.id = 'div'+ id; //id массива
        var p_name = document.createElement("p");
        p_name.innerHTML = document.getElementById('name'+ id).textContent; //p название


        var p_kol = document.createElement('p'); //создал счетчик
        p_kol.id = 'kol'+ id; //позиция счетчика
        p_kol.innerHTML = '1'; //начальный счетчик


        var p_summa = document.createElement('p');
        p_summa.innerHTML = document.getElementById('summa' + id).textContent; // сумма
        p_summa.id = 'chet' + id;
      

        var p_del = document.createElement('p');
        p_del.innerHTML = 'x';
        p_del.id = 'del'+ id;
        p_del.onclick = function () {
            document.getElementById('div'+ id).remove(); //удалить div
            itog -= kol[id - 1] * summa[id - 1];
            kol[id - 1] = 0; //убрал счетчик
            document.getElementById('itog_summa').innerHTML = itog;
        };
        
    

        div.appendChild(p_name); //добавил название

        div.appendChild(p_kol); //добавил счетчик

        div.appendChild(p_summa); //добавил сумму

        div.appendChild(p_del); //добавил x



        p_name.style.display = 'inline-block'; //св-ва p_name
        p_name.style.margin = '0';
        p_name.style.padding = '0';
        p_name.style.width = '120px';
        p_name.style.height = '25px';
     

        p_kol.style.display = 'inline-block'; //св-ва счетчика
        p_kol.style.margin = '0';
        p_kol.style.padding = '0';
        p_kol.style.width = '15px';
        p_kol.style.height = '30px';


        p_summa.style.width = '60px'; //св-ва суммы
        p_summa.style.height = '25px';
        p_summa.style.padding = '0px';
        p_summa.style.margin = '0px';
        p_summa.style.display = 'inline-block';
        p_summa.style.fontWeight = 'normal';

        p_del.style.display = 'inline-block'; //св-ва крестика
        p_del.style.width = '30';
        p_del.style.height = '25';
        p_del.style.padding = '0';
        p_del.style.margin = '0';


        //свойства div
        div.style.display = 'flex';
        div.style.flexDirection = 'row';
        div.style.flexWrap = 'wrap';
        div.style.justifyContent = 'space-around';
        div.style.color = '#000000';
        div.style.fontFamily = '"Poppins", sans-serif';
        div.style.fontSize = '1.2rem';
        div.style.backgroundColor ='#ffffff';
        div.style.width = '100%';
        div.style.height = '30px';
        div.style.border = '1px solid black';
        div.style.marginTop = '10px';


        document.getElementById("content_korzina").appendChild(div); //добавить div 




    } else {
        kol[id - 1] += 1; // +1 к счетчику
        document.getElementById('kol'+id).innerHTML =  kol[id - 1]; //поменять счетчик
    
 
    }
    
    document.getElementById('chet' + id).innerHTML = (summa[id - 1] * kol[id - 1]); // поменять сумму

    itog += summa[id-1];
    document.getElementById('itog_summa').innerHTML = itog;
    

}


function all_del() {

    kol = [0,0,0,0,0,0,0,0,0,0,0,0]; //кол-во препаратов
    itog = 0;
    document.getElementById('content_korzina').innerHTML = ''; //очистить корзину

    document.getElementById('itog_summa').innerHTML = itog;
}