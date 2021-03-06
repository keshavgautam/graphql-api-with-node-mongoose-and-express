import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeMongoose } from "graphql-compose-mongoose";
import { schemaComposer } from "../utils/schemaComposer";
export const TaskSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    task: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "tasks",
  }
);

TaskSchema.plugin(timestamps);

TaskSchema.index({ createdAt: 1, updatedAt: 1 });

export const Task = mongoose.model("Task", TaskSchema);
export const TaskTC = composeMongoose(Task, { schemaComposer });
