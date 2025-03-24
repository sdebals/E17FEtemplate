'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const Login = () => {
  const searchParams = useSearchParams();
  return (
    <div className="flex flex-col items-center gap-y-3">
      <h1 className="text-lg font-bold">Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn('credentials', {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            callbackUrl: searchParams.get('callbackUrl') || '/'
          });
        }}
        className="flex flex-col gap-y-3"
      >
        <label>
          E-mail:
          <input type="email" id="email" placeholder="Email" />
        </label>
        <label>
          Password:
          <input type="password" id="password" placeholder="Password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
