import { data } from "./data.js";
var seriesTbody = document.getElementById('vistaSeries');
var totalSeries = document.getElementById("Total");
renderSeriesTable(data);
totalSeries.innerHTML = "".concat(getTotalSeries(data));
function renderSeriesTable(series) {
    console.log('Despegar series');
    series.forEach(function (dato) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(dato.id, "</td>\n\n                                <td style='color: #900C3F;'>").concat(dato.name, "</td> \n\n                                <td>").concat(dato.channel, "</td>\n\n                                <td>").concat(dato.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getTotalSeries(series) {
    var totalSeries = 0;
    var average = 0;
    series.forEach(function (serie) { return totalSeries = serie.seasons + totalSeries; });
    average = totalSeries / series.length;
    return average;
}
