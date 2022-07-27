const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
        {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
            options: {
                responsive: false,
                plugins: {
                    legend: {
                        display: true,
                    },
                },
            },
        },
    ],
};

const config = {
    type: "doughnut",
    data: data,
};

const chartD = document.getElementById("chart");

const myChart = new Chart(chartD, config);
const createLegend = (data) => {
    if (!data) return;
    const legendArea = document.querySelector(".legend");

    console.log(myChart.config.type);
    data.labels.forEach((label, index) => {
        const div = document.createElement("div");
        const i = document.createElement("i");
        i.style.backgroundColor = data.datasets[0].backgroundColor[index];
        div.append(i, label);
        legendArea.append(div);
    });

    // const chartVisible = (value) => {
    //     const visible = myChart.datasets
    // }

    console.log(myChart.isDatasetVisible(1));
    myChart.hide(1);
};
createLegend(data);

// const getOrCreateLegendList = (chart, id) => {
//     const legendContainer = document.getElementById(id);
//     let listContainer = legendContainer.querySelector("ul");

//     if (!listContainer) {
//         listContainer = document.createElement("ul");
//         listContainer.style.display = "flex";
//         listContainer.style.flexDirection = "row";
//         listContainer.style.margin = 0;
//         listContainer.style.padding = 0;

//         legendContainer.appendChild(listContainer);
//     }

//     return listContainer;
// };

// const htmlLegendPlugin = {
//     id: "htmlLegend",
//     afterUpdate(chart, args, options) {
//         const ul = getOrCreateLegendList(chart, options.containerID);

//         // Remove old legend items
//         while (ul.firstChild) {
//             ul.firstChild.remove();
//         }

//         // Reuse the built-in legendItems generator
//         const items = chart.options.plugins.legend.labels.generateLabels(chart);

//         items.forEach((item) => {
//             const li = document.createElement("li");
//             li.style.alignItems = "center";
//             li.style.cursor = "pointer";
//             li.style.display = "flex";
//             li.style.flexDirection = "row";
//             li.style.marginLeft = "10px";

//             li.onclick = () => {
//                 const { type } = chart.config;
//                 if (type === "pie" || type === "doughnut") {
//                     // Pie and doughnut charts only have a single dataset and visibility is per item
//                     chart.toggleDataVisibility(item.index);
//                 } else {
//                     chart.setDatasetVisibility(
//                         item.datasetIndex,
//                         !chart.isDatasetVisible(item.datasetIndex)
//                     );
//                 }
//                 chart.update();
//             };

//             // Color box
//             const boxSpan = document.createElement("span");
//             boxSpan.style.background = item.fillStyle;
//             boxSpan.style.borderColor = item.strokeStyle;
//             boxSpan.style.borderWidth = item.lineWidth + "px";
//             boxSpan.style.display = "inline-block";
//             boxSpan.style.height = "20px";
//             boxSpan.style.marginRight = "10px";
//             boxSpan.style.width = "20px";

//             // Text
//             const textContainer = document.createElement("p");
//             textContainer.style.color = item.fontColor;
//             textContainer.style.margin = 0;
//             textContainer.style.padding = 0;
//             textContainer.style.textDecoration = item.hidden
//                 ? "line-through"
//                 : "";

//             const text = document.createTextNode(item.text);
//             textContainer.appendChild(text);

//             li.appendChild(boxSpan);
//             li.appendChild(textContainer);
//             ul.appendChild(li);
//         });
//     },
// };
