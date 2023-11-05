import { connectToDB } from '$lib/server/db.js';

export async function _notify(first, last, birthdate, age, gender, cc, destination){
	const dbconn = await connectToDB();
    let result;
    try { result = await dbconn.query('INSERT INTO cases (id, first, last, birthdate, age, gender, cc, destination VALUES (first, last, birthdate, age, gender, cc, destination)'); 
    console.log(result);}
	catch(err) {console.log(err)}
    finally{dbconn.release()};
    return result;
};