import { NextResponse } from 'next/server';

export async function GET() {
  const records = [
    { id: 1, date: '2023-10-01', description: 'Routine Checkup' },
    { id: 2, date: '2023-09-15', description: 'Blood Test' },
  ];
  return NextResponse.json(records);
}