const vardi = ['Jana Krūmiņa','Jānis Bērziņš','pēteris koks','līga priede', 'maija liepa'];
const balvas = ['Ledusskapis','fotoaparāts','Kafijas automāts','gludeklis','Personālais dators','Tosteris','televizors']
const naudaKopa = 1000000;
let alfMazie = 'abcdefghijklmnopqrstuvwxyz';
let alfLielie = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let cipari = '0123456789';
let simboli = '!@#$%^&*';

let uzvaretajuSkaits = 3;

let rindas = document.querySelector('.rindas');
//rindas.innerHTML = 'hello';
var e = document.getElementById("skaits");

alert(e);
function drosaParole(){
    var parole = '';
    var result = e.options[e.selectedIndex].value;
    var skaitsIzvelne = parseInt(result);
    for(let i=0; i<skaitsIzvelne;i++){
        let mR = randFunc(alfMazie.length);
        let lR = randFunc(alfLielie.length);
        let cR = randFunc(cipari.length);
        let sR = randFunc(simboli.length);
        let mazaisRand = alfMazie.substring(mR,mR+1);
        let lielaisRand = alfLielie.substring(lR,lR+1);
        let ciparsRand = cipari.substring(cR,cR+1);
        let simbolsRand = simboli.substring(sR,sR+1);
        parole += mazaisRand+lielaisRand+ciparsRand+simbolsRand;
        }
    rindas.innerHTML += `
        <tr>
        
        <td>${parole}</td>
        </tr>
        `;
    
}

function randFunc(maxCipars)
{
  return Math.floor( Math.random() * maxCipars );
  
}

