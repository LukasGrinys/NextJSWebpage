interface IPlanItem {
    title: string;
    price: number;
    featuresToOffer: number;
}

export const PLANS_LIST:IPlanItem[] = [
    {
        title: 'Minimal',
        price: 25,
        featuresToOffer: 1
    },
    {
        title: 'Standart',
        price: 35,
        featuresToOffer: 3
    },
    {
        title: 'Maximal',
        price: 55,
        featuresToOffer: 5
    }
]