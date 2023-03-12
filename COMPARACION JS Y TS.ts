
const nombre: string = "Sergie Code"
const edad: number = 32
const programador: boolean = true
const skills: string[] = ['Angular', 'React', 'Javascript']

function suma (a: number, b: number): number{
    return a + b
}

interface redSocial {
    nombre: string,
    nickName?: string, // opcional
    enlace: string
}

const redesSociales: redSocial[] = [
    {
        nombre: "Instagram",
        nickName: "@sergiecode",
        enlace: "www.instagram.com/sergiecode"
    },
    {
        nombre: "Linked In",
        enlace: "www.linkedin.com/in/sergiecode/"
    }
]

