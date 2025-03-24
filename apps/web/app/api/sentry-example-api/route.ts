import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// A faulty API route to test Sentry's error monitoring
export function GET(request: NextRequest) {
  if (!request.cookies.get('authenticated')) {
    // return a 401 if the user is not authenticated
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ data: 'Testing ...' });
}
