// backend/models/User.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
}, { timestamps: true });

// Virtual for password handling
UserSchema.virtual('password')
  .set(function (pwd) {
    this._password = pwd;
  })
  .get(function () {
    return this._password;
  });

UserSchema.pre('save', async function (next) {
  if (!this.isModified('passwordHash') && !this._password) return next();
  if (this._password) {
    const hash = await bcrypt.hash(this._password, SALT_ROUNDS);
    this.passwordHash = hash;
  }
  next();
});

UserSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.passwordHash);
};

export default mongoose.model('User', UserSchema);
