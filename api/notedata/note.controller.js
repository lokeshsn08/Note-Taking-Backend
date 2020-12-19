const {create,getNoteByid} = require('./note.service');


module.exports = {
    createNote:(req,res)=>{
        const body = req.body;
        create(body, (err , results)=>{
            if(err){
                console.log(err)
                return res.json({
                    success:0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data:results 
            })

        })
    },
    getNote:(req,res)=>{
        const id = req.params.id;
        getNoteByid(id, (err , results)=>{
            if(err){
                console.log(err)
                return res.json({
                    success:0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data:results 
            })

        })
    }
}