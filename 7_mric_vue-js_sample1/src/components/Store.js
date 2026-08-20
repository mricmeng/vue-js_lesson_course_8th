import { ref } from "vue";
export const itemList = ref(
    [
        {
            id : 1,
            name : 'Apple',
            price : '1199',
            sub : [
                'iPhone',
                'iMac',
                'iWatch'
            ],
            isShow : false,
            img : 'src/assets/img/1.jpg',
            img2 : 'src/assets/img/001.jpg',
        },
        {
            id : 2,
            name : 'Meta',
            price : '3.49',
            sub : [
                'Facebook',
                'Messager',
                'Instagram'
            ],
            isShow : false,
            img : 'src/assets/img/2.jpg',
            img2 : 'src/assets/img/002.jpg',
        },
        {
            id : 3,
            name : 'Google',
            price : '49999',
            sub : [
                'Google search',
                'Google map',
                'Googel drive'
            ],
            isShow : false,
            img : 'src/assets/img/3.jpg',
            img2 : 'src/assets/img/003.jpg',
        },
        {
            id : 4,
            name : 'SpaceX',
            price : '25999',
            sub : [
                'twister',
                'Starline',
                'Tesla'
            ],
            isShow : false,
            img : 'src/assets/img/4.jpg',
            img2 : 'src/assets/img/004.jpg',
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