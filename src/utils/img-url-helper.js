import { DEV } from "../environnements/environnement";

export function getImgUrl(filename) {
    return `${process.env.PUBLIC_URL}/img/${filename}`;
}