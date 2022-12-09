import mongoose, { Document, ObjectId } from 'mongoose'

interface CartItem {
  productId: ObjectId
  count: number
}

export type UserDocument = Document & {
  username: string
  email: string
  password: string
  avatar: string
  cart: CartItem[]
}

const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  count: {
    type: Number,
    required: true,
  },
})

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  cart: [cartSchema],
})

export default mongoose.model<UserDocument>('User', userSchema)