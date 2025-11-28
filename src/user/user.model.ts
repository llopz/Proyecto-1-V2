import { model, Schema } from "mongoose";

export type UserType = {
  name: string;
  lastName?: string;
  email: string;
  password: string;
  permissions: string[];
  enabled: boolean;
};

const UserSchema = new Schema<UserType>({
  name: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  permissions: { type: [String], default: [] },
  enabled: { type: Boolean, default: true },
});

export const UserModel = model<UserType>("User", UserSchema);
