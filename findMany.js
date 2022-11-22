const {client} = require('./dbConfig');

const findManyData = async ()=> {
    try{

      const studentCollection =  client.db('school').collection('students');
      const findQuery = {
        country: 'Bangladesh'
      }
      const result = await studentCollection.find(findQuery).sort({_id: -1}).toArray();
      console.log(result)

    }catch(err){
        console.log(err)
    }finally{
        await client.close()
    }
}
findManyData()