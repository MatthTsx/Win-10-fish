
const getHref = (url:string) => {
    const image = require(`../../public/Icons/${url}`)
    try {
        return image.default.src as string || ""
    } catch (error) {
        
    }
    return ""
}

export const Icons = [
    {href: getHref("circle.png")},
    {href: getHref("table.png")},
    {href: getHref("google.png"),tab:"google"},
    {href: getHref("folder.png"),tab:"folder"},
]

export const folders = [
    {href: getHref("folder_1.png"), desc: "Desktop"},
    {href: getHref("folder_2.png"), desc: "Downloads"},
    {href: getHref("folder_3.png"), desc: "Documents"},
    {href: getHref("folder_4.png"), desc: "Pictures"},
    {href: getHref("folder_5.png"), desc: "Music"},
    {href: getHref("folder_6.png"), desc: "Videos"},
]

export const NodeTexts = [
    "Home","About","Downloads","Docs","Get Involved","Security","certification","news"
]

export const NodeTerms = [
    "The OpenJS Foundation","Terms of Use","Privacy Policy","Bylaws","Code of Conduct","Trademark Policy",
    "Trademark List","Cookie Policy","Edit On GitHub"
]