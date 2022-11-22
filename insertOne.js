const {client} = require('./dbConfig');

const insertOneData = async ()=> {
    try{

        const studentCollection = client.db('school').collection('students');
        const data = {
            'name'      : 'Md. Mosabber',
            'lastName'  : 'Hossen',
            'email'     : 'mosabber@gmail.com',
            'phone'     : '01722233344',
            'city'      : 'Dhaka',
            'country'   : 'Bangladesh'
        }
        const result = await studentCollection.insertOne(data);
        
        if(result.acknowledged == true){
            console.log('Save Your Data Successfully');
        }        

    }catch(err){
        console.log(err)
    }finally{
        await client.close()
    }
};
insertOneData()