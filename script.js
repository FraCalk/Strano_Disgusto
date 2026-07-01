// Contiene i dati esempio usati per popolare il grafico e le classifiche.
const dataPoints = [
  { x: 2.1, y: 8.3, name: "Persona 1" },
  { x: 3.5, y: 6.1, name: "Persona 2" },
  { x: 4.2, y: 7.8, name: "Persona 3" },
  { x: 5.0, y: 4.6, name: "Persona 4" },
  { x: 5.8, y: 6.9, name: "Persona 5" },
  { x: 6.4, y: 9.2, name: "Persona 6" },
  { x: 7.1, y: 8.8, name: "Persona 7" },
  { x: 8.0, y: 5.3, name: "Persona 8" },
  { x: 8.7, y: 7.7, name: "Persona 9" },
  { x: 9.3, y: 9.5, name: "Persona 10" },
];

// Crea il grafico a dispersione con Chart.js usando i punti di dati forniti.
function createScatterChart(points) {
  const ctx = document.getElementById("trendChart").getContext("2d");

  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Osservazioni",
          data: points,
          backgroundColor: "rgba(56, 189, 248, 0.85)",
          borderColor: "#38bdf8",
          borderWidth: 2,
          pointRadius: 7,
          pointHoverRadius: 10,
          pointBorderWidth: 2,
          pointStyle: "circle",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.94)",
          titleColor: "#ffffff",
          bodyColor: "#d1d5db",
          borderColor: "rgba(148, 163, 184, 0.24)",
          borderWidth: 1,
          callbacks: {
            title: (context) => context[0].raw.name,
            label: (context) => {
              const xValue = context.parsed.x;
              const yValue = context.parsed.y;
              return `Stranezza: ${xValue}, Disgustosità: ${yValue}`;
            },
          },
        },
      },
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          min: 0,
          max: 10,
          title: {
            display: true,
            text: "Stranezza",
            color: "#cbd5e1",
            font: {
              weight: "600",
            },
          },
          grid: {
            color: "rgba(148, 163, 184, 0.16)",
          },
          ticks: {
            color: "#cbd5e1",
            stepSize: 1,
          },
        },
        y: {
          min: 0,
          max: 10,
          title: {
            display: true,
            text: "Disgustosità",
            color: "#cbd5e1",
            font: {
              weight: "600",
            },
          },
          grid: {
            color: "rgba(148, 163, 184, 0.16)",
            drawBorder: false,
          },
          ticks: {
            color: "#cbd5e1",
            stepSize: 1,
          },
        },
      },
    },
  });
}

// Ordina i punti in base al valore richiesto per costruire una classifica ordinata.
function getRankingData(points, valueKey) {
  return [...points].sort((a, b) => b[valueKey] - a[valueKey]);
}

// Inserisce nella pagina la lista HTML con i valori ordinati per ogni classifica.
function renderRanking(listId, items, metricLabel, valueKey) {
  const list = document.getElementById(listId);

  if (!list) return;

  list.innerHTML = items
    .map(
      (point) =>
        `<li><span>${point.name}</span><strong>${metricLabel} ${point[valueKey]}</strong></li>`
    )
    .join("");
}

// Avvia l'intera dashboard inizializzando grafico e classifiche.
function initDashboard() {
  createScatterChart(dataPoints);

  const topStrange = getRankingData(dataPoints, "x");
  const topDisgusting = getRankingData(dataPoints, "y");

  renderRanking("mostStrangeList", topStrange, "Stranezza", "x");
  renderRanking("mostDisgustingList", topDisgusting, "Disgustosità", "y");
}

initDashboard();
