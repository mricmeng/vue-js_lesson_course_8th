import { ref } from "vue";
export const itemList = ref(
    [
        {
            id : 1,
            name : 'Apple',
            sub : [
                'iPhone',
                'iMac',
                'iWatch'
            ],
            isShow : false,
            img : 'src/assets/img/1.jpg',
        },
        {
            id : 2,
            name : 'Meta',
            sub : [
                'Facebook',
                'Messager',
                'Instagram'
            ],
            isShow : false,
            img : 'src/assets/img/2.jpg',
        },
        {
            id : 3,
            name : 'Google',
            sub : [
                'Google search',
                'Google map',
                'Googel drive'
            ],
            isShow : false,
            img : 'src/assets/img/3.jpg',
        },
    ]
);
export const isDrawer = ref(false);
export const cityList = ref([
    {
        name : 'Phnom Penh',
        sub : [
            {
                name : 'TK',
                sub : [
                    'TK1', 'TK2', 'TK3'
                ]
            },
            {
                name : 'BKK',
                sub : [
                    'BKK1', 'BKK2', 'BKK3'
                ]
            },
            {
                name : 'TP',
                sub : [
                    'TP1', 'TP2', 'TP3'
                ]
            },
        ]
    },
    {
        name : 'Siem Reap',
        sub : [
            {
                name : 'SR1',
                sub : [
                    'SR1-1', 'SR1-2', 'SR1-3'
                ]
            },
            {
                name : 'SR2',
                sub : [
                    'SR2-1', 'SR2-2', 'SR2-3'
                ]
            },
            {
                name : 'SR1',
                sub : [
                    'SR3-1', 'SR3-2', 'SR3-3'
                ]
            },
        ]
    },
]);
export const productList = ref(
    [
        {
            id : 1,
            name : 'iMac',
            price : 2999,
            img2 : 'src/assets/img/001.jpg',
        },
        {
            id : 2,
            name : 'Ice latte',
            price : 3.49,
            img2 : 'src/assets/img/002.jpg',
        },
        {
            id : 3,
            name : 'Tesla',
            price : 59999,
            img2 : 'src/assets/img/003.jpg',
        },
        {
            id : 4,
            name : 'Mric TOWER',
            price : '390 Millions',
            img2 : 'src/assets/img/9.jpg',
        },
        {
            id : 5,
            name : 'Hermes',
            price : '25000',
            img2 : 'src/assets/img/005.jpg',
        },
        {
            id : 6,
            name : 'Hermes',
            price : '25x,xxx',
            img2 : 'src/assets/img/004.jpg',
        },
        {
            id : 7,
            name : 'Hermes',
            price : '39000',
            img2 : 'src/assets/img/007.jpg',
        },
        {
            id : 8,
            name : 'Hermes',
            price : '59000',
            img2 : 'src/assets/img/008.jpg',
        },
        {
            id : 9,
            name : 'Hermes',
            price : '59000',
            img2 : 'src/assets/img/009.jpg',
        },
        {
            id : 10,
            name : 'Hermes',
            price : '59000',
            img2 : 'src/assets/img/010.jpg',
        },
        {
            id : 11,
            name : 'Hermes',
            price : '59000',
            img2 : 'src/assets/img/011.jpg',
        },
        {
            id : 12,
            name : 'Hermes',
            price : '59000',
            img2 : 'src/assets/img/012.jpg',
        },
    ]
);
export const tmpItem = ref(
    [
        // {
        //     name : 'Mama',
        //     img2 : 'src/assets/img/001.jpg',
        // },
        // {
        //     name : 'Mama',
        //     img2 : 'src/assets/img/001.jpg',
        // },
    ]
)