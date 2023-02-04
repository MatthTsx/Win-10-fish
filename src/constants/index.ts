
const getHref = (url:string) => {
    const image = require(`../../public/Icons/${url}`)
    try {
        return image.default.src as string || ""
    } catch (error) {
        
    }
    return ""
}

export const Icons = [
    {href: getHref("google.png")},
    {href: getHref("folder.png")},
]