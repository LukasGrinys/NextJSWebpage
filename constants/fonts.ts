import { Alata, Righteous, Montserrat } from '@next/font/google';

export const alata = Alata({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-alata"
});

export const righteus = Righteous({
    weight: "400",
    subsets: ['latin'],
    variable: "--font-righteus"
});

export const montserrat = Montserrat({
    weight: ["300", "400", "500"],
    subsets: ['latin'],
    variable: "--font-montserrat"
});

export const fontVariables = [alata.variable, righteus.variable, montserrat.variable].join(" ");