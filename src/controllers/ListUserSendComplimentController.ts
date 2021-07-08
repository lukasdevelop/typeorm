import { Request, Response } from 'express'
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentService'

export class ListUserSendComplimentController {
    async handle(request: Request, response: Response) {
        const { user_id } = request

        const listUserSendComplimentsService = new ListUserReceiveComplimentsService()

        const compliments = await listUserSendComplimentsService.execute(user_id)

        return response.json(compliments)
    }
}