import SliderFounder from "@/components/SliderFounder";
import TSImg from "@/components/TSImg";
import Image from "next/image";
import AboutUsHero from '../../../public/images/about-us-hero.png';

const Founder = [
    {
        name: "Pascal Sebastian",
        desc: 'A distinguished Scuba Diving Instructor certified by PADI and ADSI, renowned marine biologist, and esteemed coral restoration expert. With a notable track record, he has spearheaded numerous research initiatives and coral restoration projects within the Nusa Penida Marine Protected Area (MPA). His dedication to environmental conservation is encapsulated in his favorite quote: "There is no such thing as a free lunch."',
        img: 'DOS03602.JPG'
    },
    {
        name: "Prisilia Resolute",
        desc: 'An accomplished Scuba Diving Instructor certified by PADI, as well as a distinguished sociologist, Participatory Action Research learner and development practitioner. She has played a pivotal role in numerous action research endeavors focusing on waste management and community development across various regions in Indonesia. Her dedication to her work is epitomized by her favorite quote from Bradbury & Reason, 2001: "We must create a living interest in our work."',
        img: 'BG.png'
    },
    {
        name: "Daniel Sakidin",
        desc: 'A highly esteemed PADI Staff Instructor renowned for his dedication to training and certifying numerous locals from Nusa Penida, enabling him to pursue rewarding careers within the diving industry. With a fervent commitment to fostering inclusivity, he is passionate about affording local communities the opportunity to engage with and explore the diving sector. Reflecting his profound respect for learning, one of his cherished quotes comes from Socrates: "To know, is to know that you know nothing. That is the meaning of true knowledge."',
        img: 'DOS03601.JPG'
    },
    {
        name: "Ali Rohmat and Rudi",
        desc: 'Seasoned entrepreneurs who have successfully managed Nusa Penida Dive Center (NPDC) for over a decade. Through their business, they have not only cultivated a thriving diving enterprise but have also played a significant role in empowering locals to enter the diving industry in Nusa Penida. Their commitment to excellence is encapsulated in the words of Maya Angelou: "Do the best you can until you know better. Then when you know better, do better."',
        img: 'DOS03604.JPG'
    },
    {
        name: "Dimas P. Ratnakusumah",
        desc: 'A distinguished Scuba Diving Instructor certified by both PADI and SSI, boasting nearly a decade of extensive experience in the diving industry. He has operated in various renowned dive sites across Indonesia, including Labuan Bajo, Derawan, and presently, Nusa Penida. His dedication extends beyond professional expertise; he harbors a fervent passion for imparting scuba diving skills to the younger generation. Reflecting his commitment to sustainability and altruism, Dimas embraces the mantra: "Live simply so others can simply live."',
        img: 'DOS03597.JPG'
    },
]

export default function AboutUs() {
    return(
        <>
        <Image
            src={'/Object-graphic4 1.png'}
            width={120}
            height={120}
            className="absolute left-0 top-full z-10 hidden"
        />
        <Image
            src={'/Object-graphic3 1.png'}
            width={200}
            height={200}
            className="absolute right-0 top-full z-10 -translate-y-8 hidden"
        />
        <div className="w-screen h-screen max-sm:h-fit aspect-video relative">
            <TSImg
                src={'about-us-hero.png'}
                alt="About us hero image"
                fill={true}
                className={'object-cover object-center'}
            />
            <div className="relative w-full h-full max-sm:max-h-64 bg-gradient-to-t from-white from-20% to-80% text-center text-secondary text-8xl max-sm:text-4xl font-bold grid content-end top-24 max-sm:top-8">
                About Us
        </div>
        </div>
        
        <div className="mt-24 max-sm:mt-0 max-w-full h-fit py-12 max-sm:py-8 mx-auto w-2/3 max-sm:text-xs max-sm:w-4/5 text-justify text-secondary text-xl max-sm:leading-snug">
            <h1 className="text-4xl max-sm:text-lg font-bold text-center">Who Are We?</h1>
            <br className="max-sm:invisible"/>
            Yayasan Terra Segara Indonesia (YTSI) is a non-profit organization based in Nusa Penida, Bali. Its name is derived from the Sanskrit words "Terra'' which means land and "Segara'' which means sea. Our first point of departure is we believe that the dynamics of land, sea, and the people—all constituent parts of the earth—impact one another as a single, interconnected whole. Thus, as a responsible human being we have the prominent responsibility to maintain the balance between the two. The founders of YTSI are all diving instructors whom have been living and working in Nusa Penida Marine Protected Area (MPA) for more than five years.
        </div>
        <div className="w-screen h-fit py-12 text-center text-secondary text-2xl">
            <h1 className="text-4xl max-sm:text-lg font-bold">Founder</h1>
            <SliderFounder content={Founder} />
        </div>
        <div className="w-2/3 h-fit mt-10 text-justify text-secondary text-xl max-sm:text-xs max-sm:leading-snug max-sm:w-4/5">
            <h1 className="text-4xl font-bold text-center max-sm:text-lg">What we do?</h1>
            <TSImg 
                src={'4.png'}
                width={1280}
                height={720}
                className="my-12 max-sm:my-6 object-fill"
            />
            <p className="">
            We are committed to addressing the challenges of coral degradation and ocean plastic pollution prevalent across the island. However, our primary aim extends beyond mere problem-solving; we are dedicated to instilling a shared sense of urgency and mobilizing collective efforts toward resolution. While these issues may not directly contribute to climate action, our overarching goal is to anchor the discourse of climate change and action in a substantive yet practical manner. Recognizing the global scope of climate change, we emphasize the importance of local engagement, advocating for solutions tailored to our immediate surroundings. To this end, we integrate the concept of cultural preservation, fostering a culturally relevant and accessible approach to climate action.
            </p>
        </div>
        <div className="w-2/3 h-fit my-10 text-justify text-secondary text-xl max-sm:text-xs max-sm:leading-snug max-sm:w-4/5">
            <h1 className="text-4xl max-sm:text-lg font-bold text-center">How do we work?</h1>
            <TSImg
                src={'5.jpg'}
                width={1280}
                height={720}
                className="my-12 max-sm:my-6"
            />
            To effectively advance our overarching objective, we have identified three key focal points:<br /><br />
            <ol className="list-decimal list-outside text-secondary w-fit flex flex-col mx-auto -translate-x-16 max-sm:-translate-x-4">
                <li className="text-left ml-36 max-sm:ml-10">
                    <b>Educate</b>: Climate change awareness must be disseminated through various educational avenues, including formal, informal, and non-formal channels. For instance, integrating climate change education into scuba dive training offers a hands-on approach and fosters engagement through experiential learning.                   
                </li>
                <li className="text-left ml-36 max-sm:ml-10">
                    <b>Preserve</b>: While climate change predominantly impacts the environment, its adaptation necessitates addressing social and cultural dimensions. Therefore, efforts toward climate change adaptation should prioritize the preservation of local culture by honoring indigenous knowledge and traditional practices.

                </li>
                <li className="text-left ml-36 max-sm:ml-10">
                    <b>Conserve</b>: By fostering education and cultural preservation, individuals become more cognizant of climate change and its implications, motivating them to actively participate in conservation efforts aimed at safeguarding both natural and cultural heritage.

                </li>
            </ol><br />
            It is imperative to note that these agendas are dynamic and adaptable, evolving through participatory research methodologies. Operating on a collaborative basis with the community of Nusa Penida, we recognize their invaluable expertise and local wisdom as paramount. Hence, our approach is rooted in acknowledging and integrating their indigenous knowledge into our initiatives, placing their insights at the forefront of our endeavors.
        </div>
        </>
    )
}