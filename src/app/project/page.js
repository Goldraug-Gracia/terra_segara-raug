import Image from "next/image";
import WorkProject from "@/components/WorkProject";
import SearchBar from "@/components/SearchBar";
import TSImg from "@/components/TSImg";

const example = [
    {
    title: 'Empowering Local Youth through SCUBA Dive Training Scholarship - Batch 1/2024',
    article: 
        <>
            <p>
            <b>Background</b>: Nusa Penida, situated in the southeastern part of Bali island, comprises three islands: Nusa Penida, Nusa Lembongan, and Nusa Ceningan. Renowned internationally for its unique local currents and location within the coral triangle, the area is frequented by megafauna such as manta rays and sunfish, known as Mola-mola. In 2020, Nusa Penida alone boasted 22 registered scuba diving businesses, with approximately 30 more in Nusa Ceningan and Lembongan. Despite the thriving diving industry, the recruitment of local individuals, especially females, remains limited, with most dive operators relying on foreign instructors or divemasters due to the scarcity of local talent.
            <br/><br/>
            Among the local population, female participation in diving and snorkeling is notably sparse, with many hailing from Java or Lombok. Moreover, while Nusa Penida hosts a burgeoning number of conservation communities, local involvement, particularly by women, in conservation activities is minimal. These observations suggest a direct correlation between local engagement in scuba diving and participation in conservation efforts.
            <br/><br/>
            <Image
                src={'/Untitled design (4)ja 1.png'}
                placeholder="blur"
                blurDataURL="/Untitled design (4)ja 1 (1).png"
                width={1280}
                height={720}
                className="object-cover rounded-3xl mx-auto"
            />
            <br/>
            <b>Objective</b>: We contend that locals are integral to the education, preservation, and conservation of their homeland. Therefore, equipping them with requisite knowledge and skills is paramount. However, current skill sets necessitate further capacity building, particularly in diving proficiency and ecological understanding. The training initiative aims not only to facilitate entry into the diving industry but also to foster engagement in conservation endeavors.
            <br /><br />
            <b>Methods</b>: We presently administer Corporate Social Responsibility funds from two companies to facilitate scuba dive training for a minimum of 11 locals. The project timeline is as follows:
            <br /><br />
            <b>December 2023</b>:<br />
            Week 4 - Disbursement of funds
            <br /><br />
            <b>January 2024</b>:<br />
            Week 1 - Project initiation<br />
            Week 2 - Recruitment of volunteer instructors and logistical preparation<br />
            Week 3 - Participant selection process<br />
            Week 4 - Commencement of training for selected participants
            <br /><br />
            <b>February 2024</b>:<br />
            Week 1 - Continuation and conclusion of training<br />
            Week 2 - Program impact assessment and evaluation<br />
            Week 3 - Program closure and certification
            <br /><br />
            <b>Participants</b>: The selection process was facilitated with the assistance of the local Nuansa Pulau group and SMAN 1 Nusa Penida. From a pool of 15 prospective candidates, 11 were shortlisted, consisting of seven males and four females. Particular effort was made to ensure gender equity among the participants, with a focus on increasing female representation in the certification program.
            <br /><br />
            <b>Monitoring and Evaluation (M&E) Results</b>: As advocates of continuous learning and qualitative assessment, we refrain from drawing conclusive insights at this stage. Emphasizing quality over quantity, our participatory evaluation approach considers input from participants, volunteer instructors, and internal stakeholders. Preliminary findings highlight various insights gleaned from these stakeholders.
            <br /><br />
            </p>
            <table className="border-2 border-secondary align-top">
                <thead>
                    <th scope="col" className="border-2 border-secondary">
                    </th>
                    <th scope="col" className="border-2 border-secondary">
                        Findings
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="border-2 border-secondary align-top">
                            Relevance
                        </th>
                        <td className="border-2 border-secondary align-top">
                        Our initial aim with this program was to equip local youths for potential careers within the diving industry. However, upon conducting our Monitoring and Evaluation (M&E) process, we revisited and reassessed this objective. Surprisingly, we discovered that none of the participants enrolled with aspirations solely confined to becoming Divemasters or Diving Instructors. Their aspirations transcended our initial expectations; they expressed ambitions to pursue diverse career paths such as law enforcement, healthcare, and military service, viewing these professions as avenues for serving their country. This revelation underscored that dive training served as a means to an expansive end, extending far beyond our initial assumptions. In response, we adapted our approach and formulated a revised objective: to prepare local youths for their chosen careers by providing them with additional opportunities through diving skills and certification.
                        </td>
                    </tr>
                    <tr>
                        <th className="border-2 border-secondary align-top">
                        Effectiveness
                        </th>
                        <td className="border-2 border-secondary align-top">
                        Through a participatory approach, we firmly believe that our program has proven its effectiveness by affording participants a broader spectrum of opportunities and career pathways for their future endeavors.
                        </td>
                    </tr>
                    <tr>
                        <th className="border-2 border-secondary align-top">
                        Efficiency
                        </th>
                        <td className="border-2 border-secondary align-top">
                        With the exception of timing adjustments, all resources allocated to the program are efficiently utilized. We extended the duration of the training to accommodate participants' academic commitments, ensuring minimal disruption to their schooling. Future programs of a similar nature should account for participants' academic schedules and home obligations when planning program timelines.
                        <br /><br />
                        Furthermore, the extended program duration was necessitated by the additional time required to translate training materials from English into localized Indonesian-Balinese language.
                        </td>
                    </tr>
                    <tr>
                        <th className="border-2 border-secondary align-top">
                        Impact
                        </th>
                        <td className="border-2 border-secondary align-top">
                        Participants are introduced to the captivating world beneath the waves, an experience entirely novel to many.
                        <br /><br />
                        As their familiarity with the ocean deepens, participants begin to regard it as a newfound sanctuary.
                        <br /><br />
                        Participants exhibit a newfound enthusiasm for enhancing their swimming and diving proficiency, alongside a heightened interest in refining their English language abilities.
                        <br /><br />
                        Many participants contemplate pursuing a career in the diving industry, viewing it as both a vocation and a means of livelihood.
                        <br /><br />
                        Volunteer instructors undertake a reflective process, revisiting and reassessing their teaching methodologies based on feedback garnered from participant evaluations.
                        <br /><br />
                        The internal team adopts a learner-centric approach, prioritizing the assessment of participants' knowledge and addressing any identified gaps, thereby deviating from relying solely on experts' assumptions.
                        </td>
                    </tr>
                    <tr>
                        <th className="border-2 border-secondary align-top">
                        Sustainability
                        </th>
                        <td className="border-2 border-secondary align-top">
                        Participants and the internal team have unanimously resolved to perpetuate the cycle of learning, re-learning, and unlearning as an ongoing endeavor. It has been mutually agreed upon to convene as a group at least bi-weekly to deliberate on potential courses of action aimed at fostering a more substantial impact on the island community.
                        <br/><br/>
                        Furthermore, the internal team is exploring avenues to secure additional resources to facilitate participants' progression to the next tier of diving certification. This initiative is aimed at enhancing their diving proficiency through increased practical experience, as well as bolstering their English language proficiency through structured language classes.
                        </td>
                    </tr>
                </tbody>
            </table>
        </>,
    date: new Date('01-07-2024')
    },
    {
        title: 'Beach Cleaning - August 2023',
        article: 
            <>
                <p>
                On August 6th, 2023, in commemoration of our organization's establishment, we orchestrated a beach cleaning initiative along the northern coast of Nusa Penida Island. Engaging fifteen children, aged five to thirteen, from neighboring villages, we endeavored to instill a sense of environmental stewardship and combat ocean pollution.
                <br /><br />
                The event commenced in the afternoon with a guided 700-meter beach walk, led by our volunteers, who supervised and assisted the children in collecting litter strewn across the shoreline. Equipped with waste bags, gloves, and an educational narrative elucidating the significance of beach cleanliness, the children enthusiastically embarked on their cleanup mission.
                <br /><br />
                Upon reaching the culmination point, participants were greeted with refreshing juice and partook in engaging "waste" games designed to impart knowledge about various ocean and land pollutants. Among these activities, one entailed distinguishing between organic and inorganic waste, serving as an introductory lesson on waste classification and recycling possibilities.
                <br /><br />
                Following the games' conclusion, each child received a small token of appreciation, emphasizing their integral role in revitalizing their coastal environment. This event signifies the inaugural step in our commitment to fostering environmental responsibility within the local community, embarking on a journey towards a cleaner, healthier ecosystem.
                <br /><br />
                For both organizers and participants alike, this event symbolizes a collective aspiration for a cleaner beach, ocean, and ultimately, a better world.
                </p>
            </>,
        date: new Date('08-06-2023')
        },
]
export default function Project() {
    return(
        <>
        <div className="max-w-full max-h-full w-screen h-screen bg-no-repeat bg-cover max-sm:max-h-64">
            <TSImg
                src={'projects-hero.png'}
                fill={true}
                alt="hero project"
                className="object-cover object-center max-sm:max-h-64"
            />
            <div className="absolute left-28 bottom-16 max-sm:top-0 max-sm:left-10 w-full h-full text-white flex flex-row font-bold items-end max-sm:max-h-64 pb-5">
                <div className="relative flex flex-col">
                    <div className="text-6xl max-sm:text-2xl font-normal inline-flex items-center gap-x-10">
                        Projects <div className="w-[170px] max-sm:w-16 max-sm:-translate-x-8 h-1 max-sm:h-1 bg-white"/>
                    </div>
                    <div className="text-8xl max-sm:text-4xl">
                        Our Work.
                    </div>
                </div>
            </div>
        </div>
        <div className="w-screen h-fit py-24 pl-20 pr-24 max-sm:px-8">
            <SearchBar className="pl-4"/>
            {example.map((e,i)=>{
                return(
                    <WorkProject key={i} props={e}/>
                )
            })}
        </div>
        </>
    )
}