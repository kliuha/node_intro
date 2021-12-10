import { userService as userFileService } from "../services/fileService.js";

export const testGetAction = (req, res) => {
    res.send(userFileService.get())
}

export const testPostAction = (req, res) => {
    userFileService.put(req.body)
    res.send('Success')
}