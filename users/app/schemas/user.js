const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now }
})

userSchema.pre('save', async (next) => {
   if(this.isModified('password')) {
       this.password = await bcrypt.hash(this.password, 8);
   }

   next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;
