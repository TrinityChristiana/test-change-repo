// Context API Docs: https://beta.reactjs.org/learn/passing-data-deeply-with-context

'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import getCurrentUser from '../session';
// import getCurrentUser from '@/utils/session';

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext'; // Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context. https://reactjs.org/docs/context.html#contextdisplayname

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  // there are 3 states for the user:
  // null = application initial state, not yet loaded
  // false = user is not logged in, but the app has loaded
  // an object/value = user is logged in

  const updateUser = async (userCode) => {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: userCode }),
    });

    const { user: apiUser } = await res.json();
    setUser(apiUser);
  };
  useEffect(() => {
    const userCode = getCurrentUser();
    if (!userCode) {
      setUser(false);
    } else {
      updateUser(userCode);
    }
  }, []);

  const value = useMemo(
    // https://reactjs.org/docs/hooks-reference.html#usememo
    () => ({
      user,
      userLoading: user === null,
      setUser,
      // as long as user === null, will be true
      // As soon as the user value !== null, value will be false
    }),
    [user],
  );

  return <AuthContext.Provider value={value} {...props} />;
}
const AuthConsumer = AuthContext.Consumer;

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthConsumer, AuthProvider, useAuth };
