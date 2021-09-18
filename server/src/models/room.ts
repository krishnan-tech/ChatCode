import { model, Schema } from "mongoose";

export interface RoomSchema extends Document {
  roomName: StringConstructor;
  roomId: StringConstructor;
  password: StringConstructor;
  members: {
    type: ArrayConstructor;
    userId: {
      type: StringConstructor;
    };
    name: {
      type: StringConstructor;
    };
  };
  createdAt: StringConstructor;
  updatedAt: StringConstructor;
}

const roomSchema: Schema = new Schema(
  {
    roomName: {
      type: String,
      require: true,
    },
    roomId: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    code: {
      type: String,
      default: "",
    },
    members: {
      type: Array,
      userId: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

export default model<RoomSchema>("Room", roomSchema);
