import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeartRateChart from './HeartRateChart';
import DataText from './DataText';

export default function App() {
    const tempHrArray = [];
    const tempDateArray = [];
    const tempEpochArray = [];

    const [hrArray, setHrArray] = useState([]);
    const [dateArray, setDateArray] = useState([]);
    const [epochArray, setEpochArray] = useState([]);

    const getDataFromServer = () => {
        axios
            .get('https://heartrate-server.andrealin3110.repl.co/get/25')
            .then((response) => {
                const responseJson = response['data'];
                responseJson['data'].forEach((element) => {
                    tempHrArray.push(element['hr']);
                    const currentDate = new Date(element['time']);
                    const hours = currentDate.getUTCHours().toString().padStart(2, '0');
                    const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
                    const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
                    tempDateArray.push(hours + ':' + minutes + ':' + seconds);
                    tempEpochArray.push(element['time']);
                });
                tempHrArray.reverse();
                tempDateArray.reverse();
                tempEpochArray.reverse();
                setEpochArray(tempEpochArray);
                setHrArray(tempHrArray);
                setDateArray(tempDateArray);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getDataFromServer();
    }, []);

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5 bg-gray-200 dark:bg-gray-800">
            <div className="rounded shadow-xl overflow-hidden w-full md:flex" style={{ maxWidth: 900 }} x-init="stockTicker.renderChart()">
                <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-red-400 text-white items-center">
                    <HeartRateChart heartRates={hrArray} timeStamps={dateArray} />
                </div>
                <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center">
                    <DataText heartRates={hrArray} epochArray={epochArray} />
                </div>
            </div>
        </div>
    );
}
