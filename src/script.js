var list = [
{igisokozo:'Icutabonye', 
inyishu:'Ubugeni bwaso na nyoko',
 insiguro:'Ibi babivuga kubera bidakunda kubona ubugeni bwabavyeyi'
},
{igisokozo:'Abatama bakera baca imanza bunamye', 
inyishu:'Imigondoro yibiharage',
 insiguro:"Ibi babivuga kubera imigondoro y'ibiharage umengo irunamye"
}
]

var table = document.querySelector('table');
var tr


for (var i = 0; i < list.length; i++) {
    var tr = document.createElement('tr');

    var tdNumber=document.createElement('td');
    tdNumber.textContent = i+1;
    tr.appendChild(tdNumber);


    var tdIgisokozo = document.createElement('td');
    tdIgisokozo.textContent = list[i].igisokozo;
    tr.appendChild(tdIgisokozo);

    var tdInyishu = document.createElement('td');
    tdInyishu.textContent = list[i].inyishu;
    tr.appendChild(tdInyishu);

    var tdInsiguro = document.createElement('td');
    tdInsiguro.textContent = list[i].insiguro;
    tr.appendChild(tdInsiguro);

    table.appendChild(tr);
}