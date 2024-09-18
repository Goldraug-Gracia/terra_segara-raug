import ButtonDefault from "@/components/Button";
import Image from "next/image";

const dummy = {
    avatar: 'https://ui-avatars.com/api/?name=Terra+Segara',
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. quis nostrud exercitation ullamco.'
}

const Partners = ({ partner })=>{
    return(
    <div className="min-w-[400px] max-sm:min-w-[100px] min-h-[50px] w-fit h-fit rounded-[45px] shadow-2xl bg-white p-10 max-sm:p-3">
        <div className="my-5 flex items-start justify-center gap-x-9 max-sm:gap-x-2">
            <Image
                src={partner.avatar}
                width={450}
                height={450}
                alt={partner.name}
                className="rounded-full aspect-square max-sm:scale-50 object-center"
            />
            <div className="text-secondary">
                <h1 className="text-2xl max-sm:text-base font-bold mb-4">{partner.name}</h1>
                <p className="text-lg max-sm:text-[8px] leading-tight">{partner.description}</p>
            </div>
        </div>
    </div>
    )
}

export default function JoinUs() {
    return(
        <>
        <div className="max-w-full max-h-fit bg-white grid grid-flow-cols text-secondary text-xl max-sm:text-sm mt-28 mb-10 max-sm:mx-8 mx-20 gap-y-2 items-center">
            <h1 className="text-6xl max-sm:text-3xl font-bold flex-grow">Join Us</h1>
            <p className="w-full">
            In relation to our project, aside from financial contributions, we welcome assistance in logistics, provisions, and communication channels. We encourage interested parties to reach out to us via the contact information provided at the bottom of this webpage. Every form of support is highly valued, as we aim to execute our project over an extended period in a cohort-based approach, with the goal of engaging as many local participants as possible.
            </p>
            <div className="leading-tight my-3 max-sm:my-1">
                <p className="font-bold">Email</p>
                hello@terrasegara.org
            </div>
            <div className="leading-tight my-3 max-sm:my-1">
                <p className="font-bold">WhatsApp</p>
                +62 812 1818 7421
            </div>
            <div className="leading-tight my-3 max-sm:my-1">
                <p className="font-bold">Instagram</p>
                @terrasegaraindonesia
            </div>
        </div>
        <div className="max-w-full w-full h-fit max-sm:px-8 px-20 flex flex-col gap-2 mb-8">
            <h1 className="text-secondary text-6xl max-sm:text-3xl font-bold">Let's Get in Touch!</h1>
            <p className="text-xl max-sm:text-sm text-secondary leading-tight">We are dedicated to engaging a wide array of stakeholders, including institutions, organizations, and individuals who share our vision and ethos. We welcome any insights, opportunities, or recommendations you may have to offer. Kindly share your name, email address, and any valuable messages you wish to convey in the space provided below.</p>
            <div className="flex flex-col gap-4">
            <a 
            href="https://wa.me/6281218187421" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <button 
                type="button" 
                className="bg-secondary min-w-[220px] max-h-[60px] h-fit w-fit px-10 py-1 text-lg text-white text-center rounded-[32px] transition-all mt-2 shadow-md max-sm:mx-auto"
            >
                Chat Now!
            </button>
            </a>
        </div>
        </div>
        </>
    )
}