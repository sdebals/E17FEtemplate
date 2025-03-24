'use client';

import React from 'react';
import NextError from 'next/error';
// Uncomment if using Sentry
// import * as Sentry from '@sentry/nextjs';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  // Uncomment if using Sentry
  // useEffect(() => {
  //   Sentry?.captureException(error);
  // }, [error]);
  console.error(error);

  return (
    <html lang="en">
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
