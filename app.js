import { customers } from './data.js';
import { makePurchaseFrequencyCountMap, makeCoolFactorCountMap, makeGenderMap } from './data-utils.js';

const countMap = makePurchaseFrequencyCountMap(customers);

const freqLabels = Object.keys(countMap);

const data = {
    labels: freqLabels,
    datasets: [{
        label: 'Purchase Frequencies',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(countMap),
    }]
    
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

// eslint-disable-next-line
const chartOne = new Chart(
    document.getElementById('char1'),
    config
);

const coolMap = makeCoolFactorCountMap(customers);

const coolLabels = Object.keys(coolMap);

const dataTwo = {
    labels: coolLabels,
    datasets: [{
        label: 'Cool Factor',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(coolMap),
    }]
    
};

const configTwo = {
    type: 'line',
    data: dataTwo,
    options: {}
};

// eslint-disable-next-line
const chartTwo = new Chart(
    document.getElementById('char2'),
    configTwo
);

const genderMap = makeGenderMap(customers);

const genderLabels = Object.keys(genderMap);

const dataThree = {
    labels: genderLabels,
    datasets: [{
        label: 'Gender Spread',
        backgroundColor: [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'indigo',
            'violet',
            'brown',
        ],
        borderColor: 'rgb(0, 0, 0)',
        data: Object.values(genderMap),
    }]
    
};

const configThree = {
    type: 'pie',
    data: dataThree,
    options: {}
};

// eslint-disable-next-line
const chartThree = new Chart(
    document.getElementById('char3'),
    configThree
);
