'use client';

import { actionSubmitSecret } from './action';
import { usePathname } from 'next/navigation';
import { useFormState } from 'react-dom';

export default function Page() {
  const pathname = usePathname();
  const [state, action] = useFormState(actionSubmitSecret, {
    status: 'stale'
  });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Protected site
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action={action} className="space-y-6">
          <input type="hidden" name="currpath" value={pathname || '/'} />
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="secret"
                className="block px-1 py-0.5 font-medium leading-6 text-gray-900"
              >
                Secret
              </label>
            </div>
            <div className="mt-2">
              <input
                id="secret"
                name="secret"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-xs hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Sign in
            </button>
          </div>
          <div>
            {state?.status === 'error' && (
              <p className="w-full rounded-md bg-red-50 px-3 py-2 text-red-700">
                <strong>Invalid secret!</strong>
                <br />
                Please check the value and try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
