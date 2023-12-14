document.addEventListener("DOMContentLoaded", async () => {
    fetch("/api/chart-data")
        .then(resp => resp.json())
        .then(chartData => {
            const months = chartData.month;
            const revenues = chartData.revenue;

            const ctx = document.getElementById("mixedChart").getContext("2d");
            const config = {
                type: 'scatter',
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };
            
            const mixedChart = new Chart(ctx, {
                data: {
                    datasets: [{
                        type: 'bar',
                        label: 'Revenue',
                        data: revenues,
                        borderWidth: 1
                    }, {
                        type: 'line',
                        label: 'Revenue',
                        data: revenues,
                    }],
                    labels: months
                },
                options: config
            });
        })
});