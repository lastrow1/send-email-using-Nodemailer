import express from 'express'
import cron from 'node-cron';
import {mailController} from './controllers/email.js'
const app = express();

// Set Server Port
const PORT  = 2000;

app.post('/sendMail', mailController);



// Cron Job
const job  = cron.schedule('* */1 * * *', ()=>{
    console.log(`i am Node js Job iam running every minute okay`);
})


// Runn Server
app.listen(PORT, ()=>{
    console.log(`App is Running on Port: ${PORT}`);
})