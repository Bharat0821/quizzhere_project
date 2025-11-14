import { Schema, model } from 'mongoose';

const questionSchema = new Schema({
    topic: { type: String, required: true },
    question: { type: String, required: true },
    options: [{ type: String }],
    answer: { type: String, required: true }
});

export default Question = mongoose.model('Question', questionSchema);
export const User = mongoose.model("User", userSchema);
