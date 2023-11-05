import type { PageServerLoad } from './$types';
import { connectToDB } from '$lib/server/db';

export const load = (async () => {
    const dbconn = await connectToDB()
    const db_query = {text: 'select * from cases' };
    let result;
    try {
    result = await dbconn.query(db_query);
    }
    catch(err){
    dbconn.release()
    console.log(err)
    }
    console.log(result.rows);
    return { rows: result.rows, length: result.rows.length };
}) satisfies PageServerLoad;