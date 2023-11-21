import mongoose from "mongoose";
// Create a Schema object from mongoose.
const Schema = mongoose.Schema;
const CommunitySchema = new Schema(
  {
    communityName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    members: {
      type: [String],
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

// Create a Mongoose Model for the 'community' collection
const CommunityModel = mongoose.model("Post", PostSchema);

// Export the community Model Schema for external use
export default CommunityModel;
