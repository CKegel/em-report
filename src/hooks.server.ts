import { connectToDB } from "$lib/server/db";
import type { Handle } from "@sveltejs/kit";

// makes database connection available in event
export const handle = (async ({ event, resolve }) => {
  const dbconn = await connectToDB();
  event.locals = { dbconn };

  const response = await resolve(event);
  dbconn.release();

  return response;
}) satisfies Handle;