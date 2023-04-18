
export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            { feature: 'First Feature', available: true },
            { feature: 'Second Feature', available: true },
            { feature: 'Third Feature', available: true },
            { feature: 'Fourth Feature', available: true },
            { feature: 'Fifth Feature', available: true },
            { feature: 'Fifth Feature Plus', available: false },
            { feature: 'Sixth Feature', available: false },
            { feature: 'Seventh Feature', available: false },
            { feature: 'Seventh Feature Plus', available: false },
            { feature: 'Eighth Feature', available: false },
            { feature: 'Ninth Feature', available: false },
            { feature: 'Tenth Feature', available: false },
            { feature: 'Eleventh Feature', available: false }
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            { feature: 'First Feature', available: true },
            { feature: 'Second Feature', available: true },
            { feature: 'Third Feature', available: true },
            { feature: 'Fourth Feature', available: true },
            { feature: 'Fifth Feature', available: true },
            { feature: 'Fifth Feature Plus', available: true },
            { feature: 'Sixth Feature', available: true },
            { feature: 'Seventh Feature', available: true },
            { feature: 'Seventh Feature Plus', available: true },
            { feature: 'Eighth Feature', available: false },
            { feature: 'Ninth Feature', available: false },
            { feature: 'Tenth Feature', available: false },
            { feature: 'Eleventh Feature', available: false }
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            { feature: 'First Feature', available: true },
            { feature: 'Second Feature', available: true },
            { feature: 'Third Feature', available: true },
            { feature: 'Fourth Feature', available: true },
            { feature: 'Fifth Feature', available: true },
            { feature: 'Fifth Feature Plus', available: true },
            { feature: 'Sixth Feature', available: true },
            { feature: 'Seventh Feature', available: true },
            { feature: 'Seventh Feature Plus', available: true },
            { feature: 'Eighth Feature', available: true },
            { feature: 'Ninth Feature', available: true },
            { feature: 'Tenth Feature', available: true },
            { feature: 'Eleventh Feature', available: true }
        ]
    }
]


const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]