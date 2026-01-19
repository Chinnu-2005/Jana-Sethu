const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config({ path: '../.env' });

// Hardcoded URI as fallback if .env fails, based on user context
const DB_URI = process.env.DB_URI || "mongodb+srv://gkrvkoushik:koushik@odoo.exdmdwh.mongodb.net";
const DB_NAME = "CivicResponses";

const createAdmin = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(`${DB_URI}/${DB_NAME}`);
    console.log("Connected.");

    const email = "admin@ac.in";
    const password = "admin";

    // Check if admin exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log(`Admin ${email} already exists. Updating password...`);
      existingAdmin.password = password; // Pre-save hook will hash this
      await existingAdmin.save({ validateBeforeSave: false });
      console.log("Admin password updated successfully.");
    } else {
      console.log(`Creating new admin ${email}...`);
      const newAdmin = new Admin({
        email,
        password
      });
      await newAdmin.save({ validateBeforeSave: false }); // Pre-save hook hashes password
      console.log("Admin created successfully.");
    }

    mongoose.disconnect();
    console.log("Done.");
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
