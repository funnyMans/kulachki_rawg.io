import { NextResponse } from 'next/server';
import { PlanetsServiceInstance } from '@/lib/db/service/PlanetsService';

async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const planet = await PlanetsServiceInstance.findById(params.id);
        if (!planet) {
          return NextResponse.json({ success: false });
        }
        return NextResponse.json({ success: true, data: planet });
      } catch (error) {
        return NextResponse.json({ success: false });
      }

    case 'PUT':
      try {
        const planet = await PlanetsServiceInstance.update(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!planet) {
          return NextResponse.json({ success: false });
        }
        return NextResponse.json({ success: true, data: planet });
      } catch (error) {
        return NextResponse.json({ success: false });
      }
    case 'DELETE':
      try {
        const deletedPlanet = await PlanetsServiceInstance.delete({ _id: id });
        if (!deletedPlanet) {
          return NextResponse.json({ success: false });
        }
        return NextResponse.json({ success: true, data: deletedPlanet });
      } catch (error) {
        return NextResponse.json({ success: false });
      }

    default:
      return NextResponse.json({ success: false });
  }
}

export { handler as GET, handler as PUT, handler as DELETE };
