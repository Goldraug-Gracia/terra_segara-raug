import TSImg from "@/components/TSImg";
import Image from "next/image";

export default function Donate(){
    return(
        <>
            <Image
                src={'/Object-graphic3 2.png'}
                width={300}
                height={150}
                className="absolute left-0 top-1/2 -translate-y-8 invisible"
            />
            <div className="max-w-full w-screen h-fit bg-white flex flex-col text-secondary text-xl max-sm:text-xs mt-44 max-sm:mt-20 justify-center gap-y-2 px-28 max-sm:px-10">
                <h1 className="text-5xl max-sm:text-xl">We can make <span className="font-bold text-7xl max-sm:text-2xl">A Difference,</span></h1>
                <div className="relative w-full h-[30vh] max-sm:h-[10vh]">
                    <TSImg
                        src={'crystal bay.png'}
                        fill={true}
                        className="rounded-3xl max-sm:rounded-xl object-center object-cover"
                    />
                </div>
                <p className="font-bold text-7xl text-right max-sm:text-2xl">Together.</p>
                <p className="mb-5 mt-28 max-sm:mt-10 text-justify">
                Welcome to our donation page! Your support is invaluable in helping us achieve our mission and make a meaningful impact in the lives of those we serve. With your generous contributions, we can continue to provide essential resources, support, and opportunities to those in need. Whether you choose to donate once or become a recurring donor, every contribution brings us closer to creating positive change and building a better future for all. 
                <br/><br/>
                Thank you for joining us in our journey to make a difference! Your generosity today is a beacon of hope for a brighter tomorrow.
                </p>
            </div>
            <div className="max-w-screen w-screen h-fit py-12 max-sm:inline flex max-lg:flex-col gap-1 justify-evenly items-center text-secondary px-32 max-sm:px-10">
                <div className="text-2xl max-sm:text-lg w-1/2 max-sm:w-full max-m:w-full max-lg:w-full mb-4">
                    If you want to support us you can also donate through our coral adoption or scholarship scheme
                    {/* <div className="w-fit h-fit bg-white mt-9 rounded-3xl shadow-xl px-12 py-16 max-sm:px-4 max-sm:py-6">
                        <form className="flex flex-col gap-2">
                            <label className="text-xl">Make a Donation</label>
                            <div className="grid grid-cols-2 gap-2 max-sm:grid-flow-cols max-sm:grid-cols-1">
                                <input type="text" name="name" className="border-[3px] border-secondary shadow-md rounded-2xl max-sm:rounded-lg h-fit w-50 py-2 px-5 max-sm:px-3 placeholder:text-secondary text-secondary text-base max-sm:text-xs" placeholder="Your Name"/> 
                                <input type="email" name="email" className="border-[3px] border-secondary shadow-md rounded-2xl max-sm:rounded-lg h-fit w-50 py-2 px-5 max-sm:px-3 placeholder:text-secondary text-secondary text-base max-sm:text-xs" placeholder="Your Email"/> 
                            </div>
                            <label className="text-xl">Donation Amount</label>
                            <select name="amount" defaultValue={""} className="border-[3px] border-secondary shadow-md rounded-2xl max-sm:rounded-lg h-fit w-36 py-2 px-5 max-sm:px-2 placeholder:text-secondary text-secondary text-base max-sm:text-xs">
                                <option value="" disabled>Click here</option>
                                <option value={5}>5$</option>
                                <option value={10}>10$</option>
                                <option value={15}>15$</option>
                                <option value={20}>20$</option>
                            </select>
                            <div className="flex items-center gap-3 max-sm:gap-2 my-5">
                                <input type="radio" id="check" name="emailUpdate" className="w-5 h-5 max-sm:size-3 accent-secondary" />
                                <label className="text-secondary text-xl max-sm:text-sm">I would like to receive updates via email</label>
                            </div>
                            <button type="submit" className="bg-secondary min-w-[220px] max-h-[60px] h-fit w-fit px-10 py-1 text-lg text-white text-center rounded-[32px] transition-all mt-2 shadow-md max-sm:mx-auto">Submit Donation</button>
                            <p className="text-xs pt-3 font-thin">*If you have trouble with donation kindly contact us by Whatsapp or email</p>
                        </form>
                    </div> */}
                    <div className="w-full h-fit bg-white mt-9 rounded-3xl shadow-xl px-12 py-16 max-sm:px-4 max-sm:py-6">
                        <div className="flex flex-row justify-center mb-4">
                            <text className="text-xl">Donate Now!</text>
                        </div>
                        <div className="flex flex-row gap-4 flex-col">
                            {/* Midtrans Gateway */}
                            <a 
                                href="https://app.midtrans.com/payment-links/1722997680304" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <button 
                                type="button" 
                                className="bg-secondary w-full h-fit px-10 py-1 text-lg text-white text-center rounded-[32px] transition-all mt-2 shadow-md max-sm:mx-auto"
                                >
                                Donation
                                </button>
                            </a>
                            {/* QRIS Gateway */}
                            <a 
                                href="https://app.midtrans.com/payment-links/1722998300661" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <button 
                                type="button" 
                                className="bg-secondary w-full h-fit px-10 py-1 text-lg text-white text-center rounded-[32px] transition-all mt-2 shadow-md max-sm:mx-auto"
                                >
                                Donation By QRIS
                                </button>
                            </a>
                        </div>   
                    </div>
                </div>
                <TSImg
                    src={'11.png'}
                    width={450}
                    height={450}
                    className="rounded-[45px] max-lg:w-fill mx-auto translate-x-6 max-sm:hidden max-m:hidden max-lg:translate-x-0 object-cover"
                />
            </div>
        </>
    )
}