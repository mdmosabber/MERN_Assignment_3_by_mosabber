const {client} = require('./dbConfig');

const deleteOneData = async ()=> {
    try{

       const studentCollection = client.db('school').collection('students');
       const data = {phone: "01299887766"}
       const result = await studentCollection.deleteOne(data);

       if(result.acknowledged == true){
        console.log(`Delete Your ${result.deletedCount} Data Successfully`)
       }   

    }catch(err){
        console.log(err)
    }finally{
        await client.close()
    }
}
deleteOneData()
