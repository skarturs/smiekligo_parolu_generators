async function iegutVielasNoApi()
{
    let datiNoApi = await fetch('https://pytonc.eu.pythonanywhere.com/api/v1/vielas')
    let datiJson = await datiNoApi.json();
    return datiJson;
}


async function raditDatus()
{
    let vielasJson = await iegutVielasNoApi();
    
    let txt = '';
    for (let i = 0; i < vielasJson.length; i++)
    {
        //console.log( vielasJson[i]['nosaukums'] );
        txt += "<tr><td>" + vielasJson[i].apakstips + "</td>";
        txt += "<td>" + vielasJson[i].daudzums + "</td>";
        txt += "<td>" + vielasJson[i].id + "</td>";
        txt += "<td>" + vielasJson[i].mervienibas + "</td>";
        txt += "<td>" + vielasJson[i].nosaukums + "</td>";
        txt += "<td>" + vielasJson[i].skaits + "</td>";
        txt += "<td>" + vielasJson[i].tips + "</td></tr>";
        
    }
    document.getElementById("dati").innerHTML = txt;
    
}

raditDatus();