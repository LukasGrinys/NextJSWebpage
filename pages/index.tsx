import Image from "next/image";

import Cloud from "../components/Home/Cloud";
import SectionCard from "../components/Home/SectionCard";
import { ColorScheme } from "../components/Home/SectionCard/SectionCard";
import PartnersCard from "../components/Home/PartnersCard";
import ContactsCard from "../components/Home/ContactsCard";
import { IMAGES } from "constants/images";

const Homepage = () => {
    return (
        <main>
            <Cloud/>
            <SectionCard
                colorScheme={ColorScheme.purple}
                flexDirection={"row-reverse"}
                headlineText={"Welcome!"}
                mainText={"Here is the short info about our site."}
                showButton={true}
                buttonText="Get Started"
                buttonLink="/"
                isAnimated={true}
            >
                <Image 
                    src={IMAGES.homeContent}
                    width={400}
                    height={400}
                    alt={"Home"}
                />
            </SectionCard>
            <SectionCard
                colorScheme={ColorScheme.white}
                flexDirection={'row'}
                headlineText={'About us'}
                mainText={'This is a text explaining what we can offer'}
                showButton={true}
                buttonText={'Learn more'}
                buttonLink={'/about'}
                isAnimated={false}
            >
                <Image 
                    src={IMAGES.homeContent2}
                    width={400}
                    height={400}
                    alt={"Home"}
                />
            </SectionCard>
            <SectionCard
                colorScheme={ColorScheme.dark}
                flexDirection={'row-reverse'}
                headlineText={'Our options'}
                mainText={'Short text to present our offers and options'}
                showButton={true}
                buttonText={'Learn more'}
                buttonLink={'/service'}
                isAnimated={false}
            >
                <Image 
                    src={IMAGES.homeContent2}
                    width={400}
                    height={400}
                    alt={"Home"}
                />
            </SectionCard>
            <PartnersCard/>
            <ContactsCard/>
        </main>
    )
};

export default Homepage