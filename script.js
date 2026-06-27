const ctx = document.getElementById("trendChart").getContext("2d");

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

new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Osservazioni",
        data: dataPoints,
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
          title: (context) => {
            return context[0].raw.name;
          },
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
        },
      },
      y: {
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
        },
      },
    },
  },
});
