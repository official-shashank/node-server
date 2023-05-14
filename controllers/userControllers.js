exports.getAllUser=(req,res,next)=>{
    res.status(200).json({
        message:"working fine"
    })
}

exports.createUser=(req,res,next)=>{
    res.status(200).json({
        message:"user created successfully"
    })
}