var list = [
{
igisokozo:'Icutabonye', 
inyishu:'Ubugeni bwaso na nyoko',
insiguro:'Ibi babivuga kubera bidakunda kubona ubugeni bwabavyeyi'
},
{
igisokozo:'Abatama bakera baca imanza bunamye', 
inyishu:'Imigondoro yibiharage',
insiguro:"Ibi babivuga kubera imigondoro y'ibiharage umengo irunamye"
},
{
igisokozo:'Ndakibona nsigifata', 
inyishu:'Igitutu',
insiguro:"Ibi babivuga kubera igitutu uguma ukibona ariko utari bugifate"
},
{
igisokozo:'Karayengera', 
inyishu:'Akotsi k abungere',
insiguro:"Ibi babivuga kubera abungere baragiye bacana igicaniro bigatuma ubona urikure akotsi kariko karayengera"
},
{
igisokozo:'Umwana wanje yokunesha ari muto', 
inyishu:'Uruyuki',
insiguro:"Ibi babivuga kubera uruyuki rushobora kukurya ukanakoma induru bititaye uko ungana kwose"
},
{
igisokozo:'Abana banje bakubita ibiganza hirya no hino', 
inyishu:'Imitwe y Inzuzi',
insiguro:"Ibi babivuga kubera inzuzi zirandaranda impande zose"
},
{
igisokozo:'Ane meza', 
inyishu:'Amabere y Inka',
insiguro:"Ibi babivuga kubera amabere y Inka akamwa amata kndi amata nikirumara mubuzima bw Abarundi",
 igisokozo:'Icutabonye', 
 inyishu:'Ubugeni bwaso na nyoko',
 insiguro:'Ibi babivuga kubera bidakunda kubona ubugeni bwabavyeyi'
},
{
 igisokozo:'Abatama bakera baca imanza bunamye', 
 inyishu:'Imigondoro yibiharage',
 insiguro:"Ibi babivuga kubera imigondoro y'ibiharage umengo irunamye"
},
{
 igisokozo:'Ndakibona nsigifata', 
 inyishu:'Igitutu',
 insiguro:"Ibi babivuga kubera igitutu uguma ukibona ariko utari bugifate"
},
{
 igisokozo:'Karayengera', 
 inyishu:'Akotsi k abungere',
 insiguro:"Ibi babivuga kubera abungere baragiye bacana igicaniro bigatuma ubona urikure akotsi kariko karayengera"
},
{
 igisokozo:'Umwana wanje yokunesha ari muto', 
 inyishu:'Uruyuki',
 insiguro:"Ibi babivuga kubera uruyuki rushobora kukurya ukanakoma induru bititaye uko ungana kwose"
},

 {
  igisokozo:'Abana banje bakubita ibiganza hirya no hino', 
 inyishu:'Imitwe y Inzuzi',
 insiguro:"Ibi babivuga kubera inzuzi zirandaranda impande zose"
},
{
 igisokozo:'Ane meza', 
 inyishu:'Amabere y Inka',
 insiguro:"Ibi babivuga kubera amabere y Inka akamwa amata kndi amata nikirumara mubuzima bw Abarundi"
},
{
igisokozo:'Kira se katamobwa', 
inyishu:'Agahanga kimbwa',
insiguro:"Ibi babivuga kubera imbwa itigera imobwa"
},
{
igisokozo:'Uhhhmmm', 
inyishu:'Igikamiwe make',
insiguro:"...."
},
{
igisokozo:'Aha twese turaririye umwe', 
inyishu:'Inkono kuziko',
insiguro:"Ibi babivuga kubera ahohambere iyo batetse wasanga abo mumuryango bose bicaye barindiriye ko bisha"
},
{
igisokozo:'Aha twese turaririye umwe', 
inyishu:'Inkono kuziko',
insiguro:"Ibi babivuga kubera ahohambere iyo batetse wasanga abo mumuryango bose bicaye barindiriye ko bisha"
},
{
igisokozo:'Kararungera', 
inyishu:'Akotsi kabungere',
insiguro:"Ibi babivuga kubera ahohambere iyo angungere baragiye baracana rero akotsi kagaca kaduga hejuru gose kubera bari bari kumusozi"
},
{
igisokozo:'Aho hepfo haciye ingoma itavuga.', 
inyishu:'Umugore afise inda',
insiguro:"Ibi babivuga kubera umugore yibungenze abafise inda nini ingana ningoma, rero baca babigereranya ningoma ariko idashobora kuvuga nkizindi"
},
{
igisokozo:'Wigera mu Barembe wari Umurembe!', 
inyishu:'Impene muntama',
insiguro:"Ibi babivuga bashatse kuvuga umuntu canke ikintu kiri mubundi bitandukanye, cisa arikimwe"
},
{
igisokozo:'Abo kwa Ruringaniza bambariye imiringa mu kuzimu.', 
inyishu:'Ibijumbu',
insiguro:"Ibi babivuga kubera ibijumbu vyamira munsi yivu"
},
{
igisokozo:'Akavumu kanje mpungurura bunyoni..', 
inyishu:'Inkono yumurango niryumwe',
insiguro:"Ibi babivuga kubera aho hambere iyo bahishije abantu bose bomumuryango baca bakorana kugira bafungure, rero bavuga ko ari mpungurura kubera bose baca bahagarika ivyo bariko barakora hama bakaza gufungura"
},
{
igisokozo:'Karahinda iduri.', 
inyishu:'Akato mumpange',
insiguro:"..."
},
{
igisokozo:'Urabona ngo bitugu vya sogokuru ansimbira urugo!', 
inyishu:'Ikivumvuri',
insiguro:"Ibi babivuga kubera ikivumvuri gifise ibitugu bisumba izosi"
},


]

var table = document.querySelector('table');



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
