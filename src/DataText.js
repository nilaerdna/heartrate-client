import { FaHeart } from 'react-icons/fa';

export default function DataText({ heartRates, epochArray }) {
    const difference = heartRates[heartRates.length - 1] - heartRates[heartRates.length - 2];
    return (
        <div className="w-full">
            <h3 className="text-lg font-semibold leading-tight text-gray-800">Andrea Lin</h3>
            <h6 className="text-sm leading-tight mb-2 text-gray-500">Last update - {new Date(epochArray[epochArray.length - 1]).toGMTString()}</h6>
            <div className="flex w-full items-end mb-6">
                <div className="flex items-baseline text-gray-800">
                    <FaHeart className="text-red-500 text-xl animate-pulse" />
                    <span className="block leading-none text-3xl">&nbsp;{heartRates[heartRates.length - 1]}</span>
                </div>
                {difference >= 0 ? <span className="block leading-5 text-sm ml-4 text-green-500">▲ {difference}</span> : <span className="block leading-5 text-sm ml-4 text-red-500">▼ {difference}</span>}
            </div>
            <div className="flex w-full text-xs text-gray-500">
                <div className="flex w-6/12">
                    <div className="flex-1 pr-3 text-left font-semibold">High</div>
                    <div className="px-3 text-right">{Math.max(...heartRates)}</div>
                </div>
                <div className="flex w-6/12">
                    <div className="flex-1 px-3 text-left font-semibold">Low</div>
                    <div className="pl-3 text-right">{Math.min(...heartRates)}</div>
                </div>
            </div>
            {/*
            <div className="flex w-full text-xs text-gray-500">
                <div className="flex w-6/12">
                    <div className="flex-1 pr-3 text-left font-semibold">Average</div>
                    <div className="px-3 text-right">{average}</div>
                </div>
            </div>
            */}
        </div>
    );
}
