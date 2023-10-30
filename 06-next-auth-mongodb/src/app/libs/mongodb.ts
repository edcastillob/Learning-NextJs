import moongose from 'mongoose'
const {MONGODB_URI} = process.env

if(!MONGODB_URI){
    throw new Error ()
}
export const connectDB =async() => {
    moongose.connect(MONGODB_URI)
}