import React from 'react'
import { createContext } from 'react'

export const UserContext = createContext(null);

export function UserProvider({children}) {
    const data = {
        name:"jana",
        age:20,
        email:"test.gmail.com"
    };
  return (
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
  );
}
