import express from 'express'

const route = express.Router();

route.post('/', async (req, res) => {
    return res.status(200).json({
        message: "Profil megtekintés"
    });
});

export default route;