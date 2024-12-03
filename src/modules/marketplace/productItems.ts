import ceramics1Image from './../../assets/product-images/ceramics/ceramics-1.jpg'
import ceramics2Image from './../../assets/product-images/ceramics/ceramics-2.png'
import ceramics3Image from './../../assets/product-images/ceramics/ceramics-3.png'

import sink1Image from './../../assets/product-images/plumbing/sink-1.png'
import sink2Image from './../../assets/product-images/plumbing/sink-2.png'
import shower1Image from './../../assets/product-images/plumbing/shower-1.png'
import towerDryer1Image from './../../assets/product-images/plumbing/tower-dryer-1.png'
import bathtub1Image from './../../assets/product-images/plumbing/bathtub-1.png'

import laminam1Image from './../../assets/product-images/laminams/laminam-1.png'
import laminam2Image from './../../assets/product-images/laminams/laminam-2.png'
import laminam3Image from './../../assets/product-images/laminams/laminam-3.png'
import laminam4Image from './../../assets/product-images/laminams/laminam-4.png'
import laminam5Image from './../../assets/product-images/laminams/laminam-5.png'

import bf1Image from './../../assets/product-images/bathroom-furnitures/bf-1.png'
import bf2Image from './../../assets/product-images/bathroom-furnitures/bf-2.png'
import bf3Image from './../../assets/product-images/bathroom-furnitures/bf-3.png'
import bf4Image from './../../assets/product-images/bathroom-furnitures/bf-3.png'
import bf5Image from './../../assets/product-images/bathroom-furnitures/bf-5.png'

import fc1Image from './../../assets/product-images/floor-coverings/fc-1.png'
import fc2Image from './../../assets/product-images/floor-coverings/fc-2.png'
import fc3Image from './../../assets/product-images/floor-coverings/fc-3.png'
import fc4Image from './../../assets/product-images/floor-coverings/fc-4.png'
import fc5Image from './../../assets/product-images/floor-coverings/fc-5.png'

import { IProduct } from './types/IProduct'

export const ceramicsItems: IProduct[] = [
    // 1.
    {
        title: 'RUSSELO CREMA ONYX 600*1200 керамогранит полированный',
        price: '17 490 тг/м2',
        image: ceramics1Image,   
        additionals: [
            { name: 'Цвет', value: 'бежевый, мрамор' },
            { name: 'Поверхность', value: 'глянцевая' },
            { name: 'Ректификат', value: 'да' }
        ]
    },
    // 2.
    {
        title: 'LERSUNDI BASALTO 600*1200 керамогранит полированный',
        price: '19 690 тг/м2',
        image: ceramics2Image,
        additionals: [
            { name: 'Цвет', value: 'синий, мрамор' },
            { name: 'Поверхность', value: 'глянцевая' },
            { name: 'Ректификат', value: 'да' }
        ]
    },
    // 3.
    {
        title: 'PAZIENZA COPER 600*1200 керамогранит полированный',
        price: '17 490 тг/м2',
        image: ceramics3Image,
        additionals: [
            { name: 'Цвет', value: 'бежевый, мрамор' },
            { name: 'Поверхность', value: 'глянцевая' },
            { name: 'Ректификат', value: 'да' }
        ]
    }
]

export const plumbingItems: IProduct[] = [
    // 1.
    {
        title: '32830001 GROHE Eurosmart Cosmopolitan Смеситель для раковины с высоким изливом',
        price: '76 000 тг',
        image: sink1Image,   
        additionals: [
            { name: 'Назначение', value: 'кухонные' },
            { name: 'Тип', value: 'однорычажный' }
        ]
    },
    // 2.
    {
        title: 'Смеситель для раковины на три отверстия Minotti Elegante Black',
        price: '87 488 тг',
        image: sink2Image,   
        additionals: []
    },
    // 3.
    {
        title: '27600001 Душевой гарнитур 600ММ GROHE NEWTEMPESTA 100 III в комплекте',
        price: '38 300 тг',
        image: shower1Image,   
        additionals: []
    },
    // 4.
    {
        title: 'Полотенцесушитель Электрический',
        price: '89 990 тг',
        image: towerDryer1Image,   
        additionals: [
            { name: 'Картридж', value: 'Нет' },
            { name: 'Материал', value: 'Латунь' },
            { name: 'Термостат', value: 'Нет' }
        ]
    },
    // 5.
    {
        title: 'Акриловая прямоугольная ванна LUSSO Light 170*70',
        price: '161 238 тг',
        image: bathtub1Image,   
        additionals: [
            { name: 'Размер', value: '170*70' },
            { name: 'Материал', value: 'Акрил' },
            { name: 'Антискользящее дно', value: 'Нет' }
        ]
    }
] 

export const laminamItems: IProduct[] = [
    // 1.
    {
        title: 'I NAT.CALACATTA VAGLI ORO LUCIDATO 1000x3000 LAMINAM5',
        price: '127 900 тг/м2',
        image: laminam1Image,   
        additionals: [
            { name: 'Цвет', value: 'бежевый, мрамор' },
            { name: 'Поверхность', value: 'глянцевая' },
            { name: 'Ректификат', value: 'да' }
        ]
    },
    // 2.
    {
        title: 'I NATURALI VERDE ALPI BOCC. 1200X3000 LAMINAM5+',
        price: '139 300 тг/м2',
        image: laminam2Image,   
        additionals: [
            { name: 'Цвет', value: 'зеленый' },
            { name: 'Поверхность', value: 'матовая' },
            { name: 'Ректификат', value: 'да' }
        ]
    },
    // 3.
    {
        title: 'BLEND GRIGIO 1000x3000 LAMINAM5',
        price: '42 900 тг/м2',
        image: laminam3Image,   
        additionals: [
            { name: 'Цвет', value: 'серый, бетон' },
            { name: 'Поверхность', value: 'матовая' },
            { name: 'Ректификат', value: 'да' }
        ]
    },
    // 4.
    {
        title: 'SAHARA NOIR EXTRA BOCC. 1200X3000 LAMINAM5+',
        price: '142 700 тг/м2',
        image: laminam4Image,   
        additionals: [
            { name: 'Цвет', value: 'черный' },
            { name: 'Поверхность', value: 'матовая' },
            { name: 'Ректификат', value: 'да' }
        ]
    },
    // 5.
    {
        title: 'I NAT.PIETRE CEPPO DI BRECCIOLA AVORIO BOCCIARDATO 1000x3000 LAMINAM5',
        price: '53 800 тг/м2',
        image: laminam5Image,   
        additionals: [
            { name: 'Цвет', value: 'бежевый, мрамор' },
            { name: 'Поверхность', value: 'матовая' },
            { name: 'Ректификат', value: 'да' }
        ]
    }
]

export const bathroomFurnitureItems: IProduct[] = [
    // 1.
    {
        title: 'Омега 60 Мебель Аквародос',
        price: '139 990 тг',
        image: bf1Image,   
        additionals: [
            { name: 'Ширина', value: '60 см' },
            { name: 'Тип тумбы', value: 'Напольная' },
            { name: 'Раковина в комплекте', value: 'Есть' }
        ]
    },
    // 2.
    {
        title: 'Столешница из искусственного камня',
        price: '139 990 тг',
        image: bf2Image,   
        additionals: [
            { name: 'Ширина', value: '120 см' },
            { name: 'Тип тумбы', value: 'подвесная' },
            { name: 'Раковина в комплекте', value: 'нет' }
        ]
    },
    // 3.
    {
        title: 'Зеркало с подсветкой Minotti Ronda Gold',
        price: '93 738 тг',
        image: bf3Image,   
        additionals: []
    },
    // 4.
    {
        title: 'Зеркало Minotti Ilana Silver 700*900',
        price: '99 988 тг',
        image: bf4Image,   
        additionals: [
            { name: 'Форма', value: 'Прямоугольная' },
            { name: 'Подсветка', value: 'Есть' },
            { name: 'Пенал', value: 'Нет' }
        ]
    },
    // 5.
    {
        title: 'HeadWay 100 Мебель Аквародос (Temnuy Mramor)',
        price: '339 790 тг',
        image: bf5Image,   
        additionals: [
            { name: 'Ширина', value: '100 см' },
            { name: 'Тип тумбы', value: 'Напольная' },
            { name: 'Раковина в комплекте', value: 'Есть' }
        ]
    }
]

export const floorCoveringsItems: IProduct[] = [
    // 1.
    {
        title: 'Ламинат SMART POL Luxury 345 Дуб Амстердам',
        price: '5 990 тг/м2',
        image: fc1Image,   
        additionals: [
            { name: 'Толщина', value: '8 мм' },
            { name: 'Замок', value: 'Uniclic' },
            { name: 'Класс износостойкости', value: '32' }
        ]
    },
    // 2.
    {
        title: 'Ламинат SMART POL Luxury 351 Дуб Ливерпуль',
        price: '5 990 тг/м2',
        image: fc2Image,   
        additionals: [
            { name: 'Толщина', value: '8 мм' },
            { name: 'Замок', value: 'Uniclic' },
            { name: 'Класс износостойкости', value: '32' }
        ]
    },
    // 3.
    {
        title: 'Ламинат SMART POL Luxury 356 Дуб Неаполь',
        price: '5 990 тг/м2',
        image: fc3Image,   
        additionals: [
            { name: 'Толщина', value: '8 мм' },
            { name: 'Замок', value: 'Uniclic' },
            { name: 'Класс износостойкости', value: '32' }
        ]
    },
    // 4.
    {
        title: 'Ламинат SMART POL Luxury 353 Дуб Мельбурн',
        price: '5 990 тг/м2',
        image: fc4Image,   
        additionals: [
            { name: 'Толщина', value: '8 мм' },
            { name: 'Замок', value: 'Uniclic' },
            { name: 'Класс износостойкости', value: '32' }
        ]
    },
    // 5.
    {
        title: 'Ламинат SMART POL Luxury 360 Дуб Тироль',
        price: '6 300 тг/м2',
        image: fc5Image,   
        additionals: [
            { name: 'Толщина', value: '8 мм' },
            { name: 'Замок', value: 'Uniclic' },
            { name: 'Класс износостойкости', value: '33' }
        ]
    }
]
