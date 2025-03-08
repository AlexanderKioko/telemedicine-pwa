import { NextResponse } from 'next/server';

export async function GET() {
  const appointments = [
    { id: 1, date: '2023-10-01', time: '10:00 AM', doctor: 'Dr. Smith', location: 'Online' },
    { id: 2, date: '2023-10-02', time: '11:00 AM', doctor: 'Dr. Jones', location: 'Clinic' },
  ];
  return NextResponse.json(appointments);
}