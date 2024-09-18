import Image from "next/image"
// import { getPlaiceholder } from "plaiceholder";

async function getBase64(img){
    try {
        const res = await fetch(img)

        if(!res.ok) {
            throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
        }

        const buffer = await res.arrayBuffer()

        const { base64 } = await getPlaiceholder(Buffer.from(buffer))

        console.log(`base64: ${base64}`);

        return base64
    } catch (e) {
        if (e instanceof Error) console.log(e.stack);
    }
}

export default function TSImg({ src, width, height, alt, className, fill }){
    const link = `https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/images/${src}`
    // console.log(link)
    const srcSmall = src.substring(0, src.length-4).concat('_small').concat(src.slice(-4))
    // console.log(srcSmall)
    const linkSmall = `https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/images/small/${srcSmall}`

    // const small = await getBase64(linkSmall)
    
    // const small = await getBase64(link)
    if (fill != undefined){
        return(
            <Image
                src={link}
                placeholder="blur"
                blurDataURL={linkSmall}
                alt={alt}
                className={className}
                fill
            />
        )
    } else{
        return(
            <Image
                src={link}
                placeholder="blur"
                blurDataURL={linkSmall}
                width={width}
                height={height}
                alt={alt}
                className={className}
            />
        )
    }
}