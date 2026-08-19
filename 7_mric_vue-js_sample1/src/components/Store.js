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
            isShow : false
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
        },
    ]
);
export const isDrawer = ref(false);