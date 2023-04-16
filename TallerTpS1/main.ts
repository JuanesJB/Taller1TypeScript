import { Serie } from "./Serie.js";

import { data } from "./data.js";

let seriesTbody: HTMLElement=document.getElementById('vistaSeries')!;

let totalSeries: HTMLElement = document.getElementById("Total")!;

renderSeriesTable(data);

totalSeries.innerHTML =`${getTotalSeries(data)}`

function renderSeriesTable(series :Serie[]): void 
{
    console.log('Despegar series');
    series.forEach((dato)=>
    {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${dato.id}</td>

                                <td style='color: #900C3F;'>${dato.name}</td> 

                                <td>${dato.channel}</td>

                                <td>${dato.seasons}</td>`;

        seriesTbody.appendChild(trElement);
    });
}

function getTotalSeries (series: Serie[]):number
{
    let totalSeries: number =0;

    let average: number= 0;

    series.forEach((serie)=> totalSeries=serie.seasons+totalSeries);

    average = totalSeries/series.length;

    return average;
}
