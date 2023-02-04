
const getHref = (url:string) => {
    const image = require(`../../public/Icons/${url}`)
    return image.default.src
}

export const Icons = [
    {href: getHref("google.png")},
    {href: getHref("folder.png")},
]