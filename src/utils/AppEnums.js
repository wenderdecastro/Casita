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
        name: "Tarefa 2",
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
