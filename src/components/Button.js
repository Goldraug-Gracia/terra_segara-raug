import Link from "next/link";

export default function ButtonDefault({ text, url, variant }) {
    let button = 'min-w-[25vw] min-h-[5vh] max-sm:min-h-fit h-fit w-fit px-10 max-sm:px-3 max-sm:py-1 max-sm:text-xs text-xl text-white text-center rounded-[2rem] transition-all mx-auto hover:scale-[90%] max-sm:hover:scale=[105%] focus:outline-0 flex justify-center'
    if (variant !== null){
        switch (variant) {
            case 1:
                button += ' bg-primary hover:bg-white hover:border-2 hover:border-secondary hover:text-secondary'
                break;
            case 2:
                button += ' bg-secondary text-white rounded-[2rem]'
                break;
            case 3:
                button += ' bg-white bg-opacity-50 border-[3px] border-white group-hover:bg-secondary group-hover:bg-opacity-50 group-hover:border-secondary'
                break;
            default:
                break;
        }
    }
    return(
        <Link href={`${url}`} className="mx-auto">
            <div className={button}>
                <p className="my-auto">{text !== null ? text : 'Button'}</p>
            </div>
        </Link>
    )
}