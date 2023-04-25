import { NextResponse } from 'next/server';
import { PlanetsServiceInstance } from '@/lib/db/service/PlanetsService';

export async function handler(req) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const planets = await PlanetsServiceInstance.read();

        return NextResponse.json({ success: true, data: planets });
      } catch (error) {
        console.log({ error });
        return NextResponse.json({ success: false });
      }
    case 'POST':
      try {
        const planet = await PlanetsServiceInstance.create(req.body);
        return NextResponse.json({ success: true, data: planet });
      } catch (error) {
        return NextResponse.json({ success: false });
      }
    default:
      return NextResponse.json({ success: false });
  }
}

export { handler as GET, handler as POST };
