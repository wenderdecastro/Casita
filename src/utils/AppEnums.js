export const KeyboardType = {
    default: 'default',
    numberPad: 'number-pad',
    decimalPad: 'decimal-pad',
    numeric: 'numeric',
    emailAddress: 'email-address',
    phonePad: 'phone-pad',
    url: 'url'
}

export const Flex = {
    auto: 'auto',
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
    spaceEvenly: 'space-evenly',
}

export const TextDecoration = {
    none: 'none',
    underline: 'underline',
    overline: 'overline',
    lineThrough: 'line-through',
    blink: 'blink',
};

export const TextAlign = {
    left: 'left',
    right: 'right',
    center: 'center',
    justify: 'justify',
    initial: 'initial',
    inherit: 'inherit',
};

export const TasksButtons = [
    {
        text: 'Próximas',
        type: 0
    },
    {
        text: 'Semanais',
        type: 1
    },
    {
        text: 'Mensais',
        type: 2
    },
]
export const NewTaskButtons = [
    {
        text: 'vez única',
        type: 1
    },
    {
        text: 'diária',
        type: 2
    },
    {
        text: 'semanal',
        type: 3
    },
    {
        text: 'mensal',
        type: 4
    },
]

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


export const TasksListMock = [
    {
        name: "Tarefa 1",
        priority: getRandomInt(1, 3),
        date: '25-05-2024T13:00:00',
        type: getRandomInt(0, 3),
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Tarefa 2 com nome muito grande mesmo mesmo mesmo",
        priority: getRandomInt(1, 3),
        date: '25-05-2024T13:00:00',
        type: getRandomInt(0, 3),
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Tarefa 3",
        priority: getRandomInt(1, 3),
        date: '25-05-2024T13:00:00',
        type: getRandomInt(0, 3),
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Tarefa 4",
        priority: getRandomInt(1, 3),
        date: '25-05-2024T13:00:00',
        type: getRandomInt(0, 3),
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Tarefa 5",
        priority: getRandomInt(1, 3),
        date: '25-05-2024T13:00:00',
        type: getRandomInt(0, 3),
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Tarefa 6",
        priority: getRandomInt(1, 3),
        date: '25-05-2024T13:00:00',
        type: getRandomInt(0, 3),
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Tarefa 7",
        priority: getRandomInt(1, 3),
        date: '25-05-2024T13:00:00',
        type: getRandomInt(0, 3),
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Tarefa 8",
        priority: getRandomInt(1, 3),
        date: '25-05-2024T13:00:00',
        type: getRandomInt(0, 3),
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Tarefa 9",
        priority: getRandomInt(1, 3),
        date: '25-05-2024T13:00:00',
        type: getRandomInt(0, 3),
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Tarefa 10",
        priority: getRandomInt(1, 3),
        date: '25-05-2024T13:00:00',
        type: getRandomInt(0, 3),
        isChecked: Math.random() < 0.5,
    }
];

export const BuyListMock = [
    {
        name: "Abacaxi",
        priority: getRandomInt(1, 3),
        price: '300,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Maçã",
        priority: getRandomInt(1, 3),
        price: '150,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Banana",
        priority: getRandomInt(1, 3),
        price: '100,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Uva",
        priority: getRandomInt(1, 3),
        price: '200,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Laranja",
        priority: getRandomInt(1, 3),
        price: '120,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Pera",
        priority: getRandomInt(1, 3),
        price: '180,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Melancia",
        priority: getRandomInt(1, 3),
        price: '250,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Morango",
        priority: getRandomInt(1, 3),
        price: '280,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Manga",
        priority: getRandomInt(1, 3),
        price: '200,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Cereja",
        priority: getRandomInt(1, 3),
        price: '400,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Kiwi",
        priority: getRandomInt(1, 3),
        price: '150,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Limão",
        priority: getRandomInt(1, 3),
        price: '80,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Ameixa",
        priority: getRandomInt(1, 3),
        price: '120,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Framboesa",
        priority: getRandomInt(1, 3),
        price: '300,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Pêssego",
        priority: getRandomInt(1, 3),
        price: '180,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Abacate",
        priority: getRandomInt(1, 3),
        price: '220,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Açaí",
        priority: getRandomInt(1, 3),
        price: '350,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Jabuticaba",
        priority: getRandomInt(1, 3),
        price: '160,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Tangerina",
        priority: getRandomInt(1, 3),
        price: '100,00',
        isChecked: Math.random() < 0.5,
    },
    {
        name: "Caju",
        priority: getRandomInt(1, 3),
        price: '200,00',
        isChecked: Math.random() < 0.5,
    }
];
