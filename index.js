import express from 'express'
import 'dotenv/config'
import loginRoute from './routes/login.js'
import registrationRoute from './routes/registration.js'
import profilRoute from './routes/profile.js'
import userRoute from './routes/user.js'
import usersRoute from './routes/users.js'

const app = express();
const port = Number(process.env.APP_PORT) || 3000;

app.use(express.json()); // a body tartalmát JSON formátummá alakítja

app.use('/api/login', loginRoute);
app.use('/api/registration', registrationRoute);
app.use('/api/profile', profilRoute);
app.use('/api/user', userRoute);
app.use('/api/users', usersRoute);

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
});