
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
    {href: getHref("folder_1.png")},
    {href: getHref("folder_1.png")},
    {href: getHref("folder_1.png")},
    {href: getHref("folder_1.png")},
    {href: getHref("folder_1.png")},
    {href: getHref("folder_1.png")},
]