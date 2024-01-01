import { maileFeatures } from '../utils/email.js'

export const mailController = async (req, res) => {
    try {
        maileFeatures();
        return res.send('hiii')

    } catch (error) {
        res.send(error)
    }
}