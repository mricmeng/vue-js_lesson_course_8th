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