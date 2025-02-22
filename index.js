import express from 'express';
import {PORT} from './src/config/index.js'
import {connectDb} from './src/config/index.js'
import cors from 'cors';
import bodyParser from 'body-parser';
// import appRouter from './src/routes/index.js';

const app=express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());


connectDb();

// app.use('/api',appRouter);
app.get('/',(req,res)=>{
    res.send('server started');
})


app.listen( 8000,()=>{
    console.log(`server started on port ${PORT}`)
})

