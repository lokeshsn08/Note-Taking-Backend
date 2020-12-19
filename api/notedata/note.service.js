const pool = require('../../config/database');
const date = require('date-and-time');
module.exports = {
    create: (data , callback) => {
        const now = new Date();
          var creation_date = date.format(now, 'YYYY/MM/DD HH:mm:ss');  
            pool.query(
                `insert into user_notes (note_title ,note_content, note_url,	creation_date )
                values(?,?,?,?)`,
                [
                    data.note,
                    data.note_content,
                    data.note_url,
                    creation_date
                ], (error, results , fields) =>{
                    if(error){
                        callback(error);
                    }
                    return callback(null ,results)

                }
            )
    },
    getNoteByid: (id , callback) => {
        const now = new Date();
          var creation_date = date.format(now, 'YYYY/MM/DD HH:mm:ss');  
        pool.query(
            `SELECT * FROM user_notes where note_url=? `,
            [
               id,
            ], (error, results , fields) =>{
                if(error){
                    callback(error);
                }
                return callback(null ,results[0])
            }
        )
    }
}