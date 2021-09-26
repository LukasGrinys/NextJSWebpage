import { ICONS } from 'constants/icons';

interface ISocialLink {
    id: number;
    title: string;
    imageSrc: string;
    url: string;
}

export const SOCIAL_LINKS:ISocialLink[] = [
    {
        id: 1,
        title: 'Facebook',
        imageSrc: ICONS.facebook,
        url: '/'
    },
    {
        id: 2,
        title: 'Instagram',
        imageSrc: ICONS.instagram,
        url: '/'
    },
    {
        id: 3,
        title: 'Twitter',
        imageSrc: ICONS.twitter,
        url: '/'
    },
]