import mongoose from 'mongoose';
const { Schema } = mongoose;

const teamSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
});

const Team = mongoose.model('team', teamSchema);
export default Team;
