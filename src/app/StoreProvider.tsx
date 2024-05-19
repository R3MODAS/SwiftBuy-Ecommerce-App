'use client'

import { makeStore, AppStore } from "@/utils/store/store";
import { ReactNode, useRef } from "react"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

const StoreProvider = ({ children }: { children: ReactNode }) => {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={storeRef.current.__persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default StoreProvider