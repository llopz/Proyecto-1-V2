import { model, Schema } from "mongoose";

export type UserType = {
  name: string;
  email: string;
  enabled: boolean;
};

const UserSchema = new Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  enabled: { type: Boolean, default: true },
});

export const UserModel = model<UserType>("User", UserSchema);
