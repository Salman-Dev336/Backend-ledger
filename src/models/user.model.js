const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:[true, "Email is required"],
        trim:true,
        unique:true,
        lowercase:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid Email Address"
        ]

    }
})