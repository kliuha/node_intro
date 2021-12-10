import { readFileSync, writeFileSync } from "fs";

export const userService = {
    get: () => {
        const users = readFileSync('storage/users.json', 'utf-8')
        return JSON.parse(users)
    },
    put: (data) => {
        const users = readFileSync('storage/users.json', 'utf-8')
        let jdata = Object.assign(JSON.parse(users),data)
        writeFileSync('storage/users.json',JSON.stringify(jdata))
        return jdata
    }
}

export default {
    userService
}