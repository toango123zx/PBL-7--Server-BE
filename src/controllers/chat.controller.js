import { chatService } from "../services";

export const test = async(req, res, next) => {
    return res.status(200).json({ message: 'Test successful' });
}

export const createRoom = async(req, res, next) => {
    const idUser = String(req.body.idUser);
    const chatRoom = await chatService.createRoom(idUser);
    return res.status(200).json({
        id: chatRoom.id,
        name: chatRoom.name
    });
}

export const createMessage = async(req, res, next) => {
    console.log("🚀 ~ createMessage ~ req.prams", req.params.idRoom)
    const idRoom = req.params.idRoom;
    const message = req.body.message;
    // if (await chatService.createMessage(idRoom, message)) {
    //     return res.status(400).json({
    //         message: 'Error creating message'
    //     });
    // }
    return res.status(200).json({
        idRoom,
        message
    });

}