import mongoose from "mongoose";
import 'dotenv/config'
import { UrlLink } from "../Db/Utils";
const connectDB =async()=>{
  await  mongoose.connect(process.env.MongoDB_URI!).then(()=>{console.log('connected to mongo db')}).catch(()=>console.log('failed to connect'))

}
export const  base_route = UrlLink
export default  connectDB
