import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './SectionCard.module.scss';

export enum ColorScheme {
    'white',
    'purple',
    'dark'
}

type TColorSchemeParameters = {
    backgroundColor?: string;
    textColor?: string;
    headlineColor?: string;
}

const getColorScheme = (color:ColorScheme):TColorSchemeParameters => {
    switch(color) {
        case ColorScheme.white:
            return {
                backgroundColor: '#f0e6ff',
                textColor: '#0a001a',
                headlineColor: '#6633ff'
            };
        case ColorScheme.purple: 
            return {
                backgroundColor: '#6633ff',
                textColor: '#f1f1f1',
                headlineColor: '#f1f1f1'
            }
        case ColorScheme.dark:
            return {
                backgroundColor: '#0a001a',
                textColor: '#f0e6ff',
                headlineColor: '#6633ff'
            }
        default:
            return {}
    }
}

interface ISectionCardProps {
    flexDirection?: 'row' | 'row-reverse';
    showButton: boolean;
    buttonLink?: string;
    buttonText?: string;
    isAnimated: boolean;
    headlineText: string;
    mainText: string;
    children?: any;
    colorScheme?: ColorScheme;
}

const SectionCard:FunctionComponent<ISectionCardProps> = ({
    flexDirection = 'row',
    showButton,
    buttonLink,
    buttonText,
    isAnimated = false,
    headlineText,
    mainText,
    children,
    colorScheme = ColorScheme.purple
}) => {
    const {
        backgroundColor,
        textColor,
        headlineColor
    } = getColorScheme(colorScheme);

    return (
        <section 
            className={styles.sectionCard}
            style={{
                backgroundColor,
                flexDirection
            }}
        >
            <div className={styles.sectionInfo}>
                <h1 
                    className={isAnimated ? styles.animated : ''} 
                    style={{
                        color: headlineColor
                    }}
                >
                    {headlineText}
                </h1>
                <p className={isAnimated ? styles.animated : ''} style={{color: textColor}}>
                    {mainText}
                </p>
                {showButton && (
                    <Link href={buttonLink}>
                        <button className={isAnimated ? styles.animated : ''}>{buttonText}</button>
                    </Link>
                )}
            </div>
            <div className={styles.graphicBox}>
                {children}
            </div>
        </section>
    );
};

export default SectionCard;