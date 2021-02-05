import { Line } from 'react-chartjs-2';

export default function HeartRateChart({ heartRates, timeStamps }) {
    const data = {
        labels: timeStamps,
        datasets: [
            {
                label: 'Heart Rate',
                data: heartRates,
                fill: false,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            },
        ],
    };

    const options = {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: 'rgba(255, 255, 255, 1)',
                    },
                    gridLines: {
                        display: false,
                    },
                },
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: 'rgba(255, 255, 255, 1)',
                    },
                    gridLines: {
                        color: 'rgba(255, 255, 255, .2)',
                        borderDash: [5, 5],
                        zeroLineColor: 'rgba(255, 255, 255, .2)',
                        zeroLineBorderDash: [5, 5],
                    },
                },
            ],
        },
    };
    return (
        <>
            <Line data={data} options={options} />
        </>
    );
}
