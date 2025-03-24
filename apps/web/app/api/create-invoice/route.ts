import { NextResponse, NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export function POST(request: NextRequest) {
  // check user session from request to see if user is logged in / has the right permissions
  // should be made more specific for the different projects (with nextauth/...)
  if (!request.cookies.get('authenticated')) {
    // return a 401 if the user is not authenticated
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ data: 'Testing ...' });
}
