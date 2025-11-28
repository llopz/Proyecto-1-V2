import { Schema, model } from "mongoose";

export type PermissionType = {
  name: string;
  description?: string;
  deleted?: boolean;
};

const PermissionSchema = new Schema<PermissionType>({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  deleted: { type: Boolean, default: false },
});

export const PermissionModel = model<PermissionType>(
  "Permission",
  PermissionSchema
);
