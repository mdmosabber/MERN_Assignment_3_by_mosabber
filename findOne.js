const {client} = require('./dbConfig');

const findOneData = async ()=> {
    try{

        const studentCollection =  client.db('school').collection('students');
        const findQuery = { phone: "01722233344" }
        const result = await studentCollection.findOne(findQuery);
        console.log(result)
        
    }catch(err){
        console.log(err)
    }finally{
        await client.close();
    }
}
findOneData()