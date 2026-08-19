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
            ]
        },
        {
            id : 2,
            name : 'Meta',
            sub : [
                'Facebook',
                'Messager',
                'Instagram'
            ]
        },
        {
            id : 3,
            name : 'Google',
            sub : [
                'Google search',
                'Google map',
                'Googel drive'
            ]
        },
    ]
);
export const isDrawer = ref(false);