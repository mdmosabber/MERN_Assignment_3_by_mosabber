const {client} = require('./dbConfig');

const updateOneData = async ()=> {
    
    try{
        const studentCollection = client.db('school').collection('students');
        const searchQuery = {country: 'Italy'};
        const data = {$set: 
            {city: 'Rome'}
        };
        const result = await studentCollection.updateOne(searchQuery, data);

        if(result.acknowledged == true){
            console.log(`Update Your ${result.modifiedCount} Data Successfully`)
        }  
    }catch(err){
        console.log(err)
    }finally{
        await client.close()
    }
}
updateOneData()