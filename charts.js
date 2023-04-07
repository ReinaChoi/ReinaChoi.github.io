const ctx1 = document.getElementById("websiteVisit");
const ctx2 = document.getElementById("currentVisit");
const ctx3 = document.getElementById("conversionRates");
const ctx4 = document.getElementById("currentSubject");

new Chart(ctx1, {
  type: "line",

  data: {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Team A",
        data: [
          64.1, 51.6, 56.4, 59.3, 53.8, 54, 54.9, 55.9, 52, 53.7, 54, 59.7,
          53.6, 52.9, 44.6, 46,
        ],
        borderWidth: 2,
        pointStyle: "rect",
        pointRadius: 0,
        tension: 0.4,
        backgroundColor: "rgba(77, 95, 255)",
        pointBackgroundColor: "rgba(62, 95, 255)",
        borderColor: "rgba(62, 95, 255)",
      },
      {
        label: "Team B",

        data: [
          20.9, 23.2, 23.5, 20.4, 25.1, 21.6, 21.5, 22.6, 24.6, 22.5, 24.5,
          24.2, 26.4, 22.4, 26, 27.9,
        ],
        backgroundColor: "rgba(252, 234, 91)",
        pointBackgroundColor: "rgba(252, 234, 91)",
        borderColor: "rgba(252,234,91)",
        borderWidth: 2,
        pointStyle: "circle",
        pointRadius: 0,
        tension: 0.4,
        // pointBackgroundColor: "rgba(233, 75, 33)",
        // borderColor: "rgba(233, 75, 33)",
      },
      {
        label: "Team C",
        data: [
          15, 25.2, 20.1, 20.4, 21.1, 21.4, 23.6, 21.6, 23.4, 23.8, 21.5, 16.1,
          20, 24.7, 29.4, 26.1,
        ],
        borderWidth: 0.1,
        type: "bar",
        barPercentage: 0.4,
        pointStyle: "rectRot",
        borderRadius: Number.MAX_VALUE,
        backgroundColor: "rgba(77, 167, 94)",
        pointBackgroundColor: "rgba(255, 0, 110)",
        borderColor: "rgba(255, 0, 110)",
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          color: "black",
          autoSkip: false,
        },
        grid: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "#white",
        },
        suggestedMax: 100,
        suggestedMin: 0,
        grid: {
          color: ["black"].concat(
            Array.from({ length: 16 }, (_, i) => "#292929")
          ),
        },
        border: {
          dash: [8, 4],
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          hidden: false,
        },
      },
      title: {
        display: true,
        text: ["Website Visits", "(+43%) than last year"],
        align: "start",
        color: "rgba(85,85,85)",
        font: {
          size: "24px",
        },
      },
    },
  },
});

//       new Chart(ctx2, {
//         type: "line",

//         data: {
//           labels: Array.from({ length: 16 }, (_, i) => i + 2007),
//           datasets: [
//             {
//               label: "필요하다",
//               data: [
//                 64.1, 51.6, 56.4, 59.3, 53.8, 54, 54.9, 55.9, 52, 53.7, 54,
//                 59.7, 53.6, 52.9, 44.6, 46,
//               ],
//               borderWidth: 3,
//               pointStyle: "rect",
//               pointRadius: 5,
//               backgroundColor: "rgba(62, 95, 255)",
//               pointBackgroundColor: "rgba(62, 95, 255)",
//               borderColor: "rgba(62, 95, 255)",
//             },
//             {
//               label: "반반/보통이다",
//               data: [
//                 20.9, 23.2, 23.5, 20.4, 25.1, 21.6, 21.5, 22.6, 24.6, 22.5,
//                 24.5, 24.2, 26.4, 22.4, 26, 27.9,
//               ],
//               borderWidth: 3,
//               pointStyle: "circle",
//               pointRadius: 5,
//               backgroundColor: "rgba(233, 75, 33)",
//               pointBackgroundColor: "rgba(233, 75, 33)",
//               borderColor: "rgba(233, 75, 33)",
//             },
//             {
//               label: "필요없다",
//               data: [
//                 15, 25.2, 20.1, 20.4, 21.1, 21.4, 23.6, 21.6, 23.4, 23.8, 21.5,
//                 16.1, 20, 24.7, 29.4, 26.1,
//               ],
//               borderWidth: 3,
//               pointStyle: "rectRot",
//               pointRadius: 5,
//               backgroundColor: "rgba(255, 0, 110)",
//               pointBackgroundColor: "rgba(255, 0, 110)",
//               borderColor: "rgba(255, 0, 110)",
//             },
//           ],
//         },
//         options: {
//           scales: {
//             x: {
//               ticks: {
//                 color: "white",
//                 autoSkip: false,
//                 maxRotation: 90,
//                 minRotation: 90,
//               },
//               grid: {
//                 color: ["white"].concat(
//                   Array.from({ length: 16 }, (_, i) => "black")
//                 ),
//               },
//             },
//             y: {
//               ticks: {
//                 color: "#FFFFFF",
//               },
//               suggestedMax: 80,
//               suggestedMin: 10,
//               grid: {
//                 color: ["white"].concat(
//                   Array.from({ length: 16 }, (_, i) => "#292929")
//                 ),
//               },
//             },
//           },
//           plugins: {
//             legend: {
//               position: "top",
//               labels: {
//                 usePointStyle: true,
//                 pointStyle: "circle",
//                 hidden: false,
//               },
//             },
//             title: {
//               display: true,
//               text: [
//                 "통일 필요성",
//                 "남북한 통일이 얼마나 필요하다고 생각하십니까",
//               ],
//               align: "start",
//               color: "white",
//               font: {
//                 size: "24px",
//               },
//             },
//           },
//         },
//       });
//       new Chart(ctx3, {
//         type: "line",

//         data: {
//           labels: Array.from({ length: 16 }, (_, i) => i + 2007),
//           datasets: [
//             {
//               label: "필요하다",
//               data: [
//                 64.1, 51.6, 56.4, 59.3, 53.8, 54, 54.9, 55.9, 52, 53.7, 54,
//                 59.7, 53.6, 52.9, 44.6, 46,
//               ],
//               borderWidth: 3,
//               pointStyle: "rect",
//               pointRadius: 5,
//               backgroundColor: "rgba(62, 95, 255)",
//               pointBackgroundColor: "rgba(62, 95, 255)",
//               borderColor: "rgba(62, 95, 255)",
//             },
//             {
//               label: "반반/보통이다",
//               data: [
//                 20.9, 23.2, 23.5, 20.4, 25.1, 21.6, 21.5, 22.6, 24.6, 22.5,
//                 24.5, 24.2, 26.4, 22.4, 26, 27.9,
//               ],
//               borderWidth: 3,
//               pointStyle: "circle",
//               pointRadius: 5,
//               backgroundColor: "rgba(233, 75, 33)",
//               pointBackgroundColor: "rgba(233, 75, 33)",
//               borderColor: "rgba(233, 75, 33)",
//             },
//             {
//               label: "필요없다",
//               data: [
//                 15, 25.2, 20.1, 20.4, 21.1, 21.4, 23.6, 21.6, 23.4, 23.8, 21.5,
//                 16.1, 20, 24.7, 29.4, 26.1,
//               ],
//               borderWidth: 3,
//               pointStyle: "rectRot",
//               pointRadius: 5,
//               backgroundColor: "rgba(255, 0, 110)",
//               pointBackgroundColor: "rgba(255, 0, 110)",
//               borderColor: "rgba(255, 0, 110)",
//             },
//           ],
//         },
//         options: {
//           scales: {
//             x: {
//               ticks: {
//                 color: "white",
//                 autoSkip: false,
//                 maxRotation: 90,
//                 minRotation: 90,
//               },
//               grid: {
//                 color: ["white"].concat(
//                   Array.from({ length: 16 }, (_, i) => "black")
//                 ),
//               },
//             },
//             y: {
//               ticks: {
//                 color: "#FFFFFF",
//               },
//               suggestedMax: 80,
//               suggestedMin: 10,
//               grid: {
//                 color: ["white"].concat(
//                   Array.from({ length: 16 }, (_, i) => "#292929")
//                 ),
//               },
//             },
//           },
//           plugins: {
//             legend: {
//               position: "right",
//               labels: {
//                 usePointStyle: true,
//                 pointStyle: "line",
//                 hidden: false,
//               },
//             },
//             title: {
//               display: true,
//               text: [
//                 "통일 필요성",
//                 "남북한 통일이 얼마나 필요하다고 생각하십니까",
//               ],
//               align: "start",
//               color: "white",
//               font: {
//                 size: "24px",
//               },
//             },
//           },
//         },
//       });
//       new Chart(ctx4, {
//         type: "line",

//         data: {
//           labels: Array.from({ length: 16 }, (_, i) => i + 2007),
//           datasets: [
//             {
//               label: "필요하다",
//               data: [
//                 64.1, 51.6, 56.4, 59.3, 53.8, 54, 54.9, 55.9, 52, 53.7, 54,
//                 59.7, 53.6, 52.9, 44.6, 46,
//               ],
//               borderWidth: 3,
//               pointStyle: "rect",
//               pointRadius: 5,
//               backgroundColor: "rgba(62, 95, 255)",
//               pointBackgroundColor: "rgba(62, 95, 255)",
//               borderColor: "rgba(62, 95, 255)",
//             },
//             {
//               label: "반반/보통이다",
//               data: [
//                 20.9, 23.2, 23.5, 20.4, 25.1, 21.6, 21.5, 22.6, 24.6, 22.5,
//                 24.5, 24.2, 26.4, 22.4, 26, 27.9,
//               ],
//               borderWidth: 3,
//               pointStyle: "circle",
//               pointRadius: 5,
//               backgroundColor: "rgba(233, 75, 33)",
//               pointBackgroundColor: "rgba(233, 75, 33)",
//               borderColor: "rgba(233, 75, 33)",
//             },
//             {
//               label: "필요없다",
//               data: [
//                 15, 25.2, 20.1, 20.4, 21.1, 21.4, 23.6, 21.6, 23.4, 23.8, 21.5,
//                 16.1, 20, 24.7, 29.4, 26.1,
//               ],
//               borderWidth: 3,
//               pointStyle: "rectRot",
//               pointRadius: 5,
//               backgroundColor: "rgba(255, 0, 110)",
//               pointBackgroundColor: "rgba(255, 0, 110)",
//               borderColor: "rgba(255, 0, 110)",
//             },
//           ],
//         },
//         options: {
//           scales: {
//             x: {
//               ticks: {
//                 color: "white",
//                 autoSkip: false,
//                 maxRotation: 90,
//                 minRotation: 90,
//               },
//               grid: {
//                 color: ["white"].concat(
//                   Array.from({ length: 16 }, (_, i) => "black")
//                 ),
//               },
//             },
//             y: {
//               ticks: {
//                 color: "#FFFFFF",
//               },
//               suggestedMax: 80,
//               suggestedMin: 10,
//               grid: {
//                 color: ["white"].concat(
//                   Array.from({ length: 16 }, (_, i) => "#292929")
//                 ),
//               },
//             },
//           },
//           plugins: {
//             legend: {
//               position: "right",
//               labels: {
//                 usePointStyle: true,
//                 pointStyle: "line",
//                 hidden: false,
//               },
//             },
//             title: {
//               display: true,
//               text: [
//                 "통일 필요성",
//                 "남북한 통일이 얼마나 필요하다고 생각하십니까",
//               ],
//               align: "start",
//               color: "white",
//               font: {
//                 size: "24px",
//               },
//             },
//           },
//         },
//       });
//
