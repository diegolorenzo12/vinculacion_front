// app/providers.tsx

'use client'

import {NextUIProvider} from '@nextui-org/react'

import { createContext, useContext, useState } from 'react';

interface UserData {
    FirstName: string;
    LastNameP: string;
    LastNameM: string;
    Email: string;
    Cel: number;
    Mayor: string;
    Matricula: string;
}

interface UserContextType {
    userData: UserData | null;
    setUserData: (userData: UserData | null) => void;
}

const UserContext = createContext<UserContextType>({
    userData: null,
    setUserData: () => {},
});

export const useUserContext = () => useContext(UserContext);

export function Providers({children}: { children: React.ReactNode }) {
    const [userData, setUserData] = useState<UserData | null>(null);
    return (
      <NextUIProvider>
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
      </NextUIProvider>
    );
};
