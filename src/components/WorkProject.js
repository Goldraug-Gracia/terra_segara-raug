const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const zeroify = (num)=>{
    if (num < 10){
        return `0${num}`
    } else {
        return num
    }
}

export default function WorkProject({ props }){
    const mon = monthNames[props.date.getMonth()]
    const dte = zeroify(props.date.getDate())
    const year = props.date.getFullYear()
    const title = props.title
    const article = props.article
    return(
        <div className="grid grid-cols-6 mx-auto py-8 border-b-2 border-secondary last:border-b-0 max-sm:gap-6 max-sm:translate-x-5">
            <div className="col-span-1 text-center text-primary leading-none">
                <p className="text-5xl max-sm:text-2xl max-sm:-mb-2">{mon}</p>
                <p className="text-6xl max-sm:text-3xl font-bold max-sm:-mb-2">{dte}</p>
                <p className="text-3xl max-sm:text-base">{year}</p>
            </div>
            <div className="col-span-5 max-sm:pr-12 text-secondary text-base max-sm:text-xs pr-10">
                <h1 className="text-3xl max-sm:text-xl mb-5 max-sm:mb-2">{title}</h1>
                <div className="leading-snug text-justify">{article}</div>
            </div>
        </div>
    )
}