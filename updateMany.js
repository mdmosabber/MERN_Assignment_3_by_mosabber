const {client} = require('./dbConfig');

const updateManyData = async ()=> {
    try{

       const studentCollection = client.db('school').collection('students');

       const searchQuery = {country: "Bangladesh"};
       const data = {$set: 
            {nationality: 'Bangladeshi'}
       }
       const option = {upsert: true}

       const result = await studentCollection.updateMany(searchQuery,data,option);

       if(result.acknowledged == true){
        console.log(`Update Your ${result.modifiedCount} Data Successfully`);
       }       

    }catch(err){
        console.log(err)
    }finally{
        await client.close()
    }
}
updateManyData()