import { db } from "../../db";
import { tours } from "../../db/schema";
import { sql } from "drizzle-orm";

export async function GET() {
  const results = await db.execute(
    sql`SELECT DISTINCT destination FROM tours`
  );

  return Response.json(results.rows);
}