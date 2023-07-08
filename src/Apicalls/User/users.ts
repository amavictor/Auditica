import { type } from "os"
import { requests } from "../../utils"

export const getCurrentUSer =()=>{
    return requests({
        url:`/me`
    })
}

export const getUsersTopItems = (type:string) => {
    return requests({
        url: `/me/top/${type}`,
        method:'GET'
    })
}

export const getUsersRecentlyPlayed = () => {
    return requests({
        url: `/me/player/recently-played`,
        method:'GET'
    })
}