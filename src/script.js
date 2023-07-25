var list = [
{igisokozo:'Icutabonye', 
inyishu:'Ubugeni bwaso na nyoko',
 insiguro:'Ibi babivuga kubera bidakunda kubona ubugeni bwabavyeyi'
},
{igisokozo:'Abatama bakera baca imanza bunamye', 
inyishu:'Imigondoro yibiharage',
 insiguro:"Ibi babivuga kubera imigondoro y'ibiharage umengo irunamye"
},
{igisokozo:'Ndakibona nsigifata', 
inyishu:'Igitutu',
 insiguro:"Ibi babivuga kubera igitutu uguma ukibona ariko utari bugifate"
},
{igisokozo:'Karayengera', 
inyishu:'Akotsi k abungere',
 insiguro:"Ibi babivuga kubera abungere baragiye bacana igicaniro bigatuma ubona urikure akotsi kariko karayengera"
},
{igisokozo:'Umwana wanje yokunesha ari muto', 
inyishu:'Uruyuki',
 insiguro:"Ibi babivuga kubera uruyuki rushobora kukurya ukanakoma induru bititaye uko ungana kwose"
},
{igisokozo:'Abana banje bakubita ibiganza hirya no hino', 
inyishu:'Imitwe y Inzuzi',
 insiguro:"Ibi babivuga kubera inzuzi zirandaranda impande zose"
},
{igisokozo:'Ane meza', 
inyishu:'Amabere y Inka',
 insiguro:"Ibi babivuga kubera amabere y Inka akamwa amata kndi amata nikirumara mubuzima bw Abarundi"
},
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