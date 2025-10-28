

import { db } from '@/lib/db/db';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const [rows] = await db.query('SELECT * FROM rates');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('DB error:', error);
    return NextResponse.json({ error: 'Failed to fetch tours' }, { status: 500 });
  }
}
