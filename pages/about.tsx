import React from 'react';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';

import PageHeader from 'components/PageElements/PageHeader';
import ContentWrapper from 'components/PageElements/ContentWrapper';
import contentImage from 'public/media/home/home1.svg';
import Title from 'components/PageElements/Title';

import { IMAGES } from 'constants/images';

const About = () => {
    return (
        <main>
            <Title subtitle={'About'}/>
            <PageHeader
                title={"About"}
                imgSrc={IMAGES.headers.about}
            />
            <ContentWrapper>
                <section>
                    <h2>First section</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam fermentum ipsum non justo tempus, eu hendrerit ex 
                        interdum.
                    </p>
                    <div style={{textAlign: "center"}}>
                        <ScrollAnimation animateIn={"fadeInLeft"} animateOnce={true}>
                            <Image 
                                src={contentImage} 
                                alt="About"
                                height={320}
                                width={320}
                            />
                        </ScrollAnimation>
                    </div>
                    <p>
                        Vivamus vitae magna tortor. Quisque porta dolor sed quam 
                        egestas volutpat. Duis scelerisque metus id luctus eleifend. 
                        Pellentesque ornare nunc eget ligula dapibus, vitae placerat 
                        neque eleifend.
                    </p>
                </section>
                <section>
                    <h2>Second section</h2>
                    <p>
                        Phasellus ac odio a ex tempor consequat. Quisque ultrices 
                        leo sed leo iaculis, id mattis felis efficitur. Cras vel 
                        eleifend enim, non viverra orci. Nam accumsan lorem in augue 
                        condimentum gravida. 
                    </p>
                    <hr/>
                    <p>
                        Aenean a nulla dui. Sed a porta erat. Donec egestas efficitur 
                        sollicitudin. Curabitur a eros quis justo luctus pharetra in 
                        nec ligula. Cras quis dictum est.
                    </p>
                </section>
                <section>
                    <h2>Final section</h2>
                    <p>
                        Sed egestas congue fringilla. Sed molestie lorem tortor, id 
                        vestibulum velit ullamcorper non. In felis est, sagittis 
                        interdum scelerisque quis, vehicula non nunc. Nam scelerisque 
                        malesuada venenatis. Maecenas lacinia arcu justo, nec pulvinar
                        lacus venenatis eu. 
                    </p>
                </section>
            </ContentWrapper>
        </main>
    );
};

export default About;