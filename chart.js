let salary = 0;

function catFunction(){
    salary = document.getElementById("num_value").value;
    console.log(salary);
    barChart.data.datasets[0].data[0] = salary;
    barChart.update();
}

function addCatFunction(){
    let text = document.getElementById("new_cat").value;
    console.log(text);
    let node = document.createElement("OPTION");
    let textNode = document.createTextNode(text);
    node.appendChild(textNode);
    document.getElementById("categories").appendChild(node);
}

console.log(salary);


const chart = document.getElementById("pie_chart").getContext('2d');

let pieChart = new Chart(chart, {
    type: 'doughnut',
    data: {
        labels: ["Food","Bills","Entertainment"],
        datasets: [{
            backgroundColor:['#2ecc71','#e74c3c','#f1c40f'],
            borderWidth: 0,
            data : [360,230,150]
        }]
    },
    options : {
        responsive: false,
    }
});

const chart2 = document.getElementById("bar_chart").getContext('2d');

let gradientRed = chart2.createLinearGradient(0, 0, 0, 500);
gradientRed.addColorStop(0, 'rgba(212,20,90)');   
gradientRed.addColorStop(1, 'rgba(251,176,59)');

let gradientBlue = chart2.createLinearGradient(0, 0, 0, 500);
gradientBlue.addColorStop(0, 'rgba(46,49,146)');   
gradientBlue.addColorStop(1, '#1BFFFF');

let barChart = new Chart(chart2, {
    type: 'bar',
    data: {
        datasets: [{
            label: "Salary",
            backgroundColor: gradientBlue,
            data : [0],
        },{
        label: "Expenses",
            backgroundColor: gradientRed,
            data : [740],
        }]
    },
    options : {
        responsive: false,
        labels: {
            fontColor: "white"
        },
        scales: {
            xAxes: [{display: true,}],
            yAxes: [{
                display: true,
                ticks: {
                    fontColor: "white",
                    beginAtZero: true
                }
            }]
        }
    }
});

