'use client'

import { addToCart } from "@/utils/store/features/cartSlice"
import { AppStore, makeStore } from "@/utils/store/store"
import { ReactNode, useRef } from "react"
import { Provider } from "react-redux"

const StoreProvider = ({ children }: { children: ReactNode }) => {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = makeStore()
        // Add initial state
        // storeRef.current.dispatch(addToCart("testproductId"))
    }

    return (
        <Provider store={storeRef.current}>{children}</Provider>
    )
}

export default StoreProvider