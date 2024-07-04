import mongoose from "mongoose";
import 'dotenv/config'
const connectDB =async()=>{
  await  mongoose.connect(process.env.MongoDB_URI!).then(()=>{console.log('connected to mongo db')}).catch(()=>console.log('failed to connect'))

}
export const  base_route ='https://reciepe-n.vercel.app/'
export default  connectDB
