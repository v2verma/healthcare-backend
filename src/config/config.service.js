import dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve('.env') });
//  console.log(DB_URL,"ttt");
 
export const  {
    PORT,
    DB_URL,
    JWT_SECRETE
} = {...process.env}

