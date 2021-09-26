interface IContactItem {
    id: number;
    name: string;
    position: string;
    mail: string;
    phone: string;
    imageSrc: string;
}

export const CONTACTS_LIST:IContactItem[] = [
    {
        id: 1,
        name: 'Jane Doe',
        position: 'Administrator',
        mail: 'mail@mail.com',
        phone: '+00 1515151515',
        imageSrc: '/media/contact.png'
    },
    {
        id: 2,
        name: 'John Doe',
        position: 'Administrator',
        mail: 'mail@mail.com',
        phone: '+00 1515151515',
        imageSrc: '/media/contact.png'
    },
    {
        id: 3,
        name: 'James Doe',
        position: 'Administrator',
        mail: 'mail@mail.com',
        phone: '+00 1515151515',
        imageSrc: '/media/contact.png'
    }
]