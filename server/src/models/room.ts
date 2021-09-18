import { model, Schema } from "mongoose";

export interface RoomSchema extends Document {
  member: string[];
}

// ! todo room id 8 char
// ! room name
// ! room password required=false

const roomSchema: Schema = new Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default model<RoomSchema>("Room", roomSchema);
