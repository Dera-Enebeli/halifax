"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"

export interface FunnelSpecs {
  city: string
  propertyType: string
  beds: string
  baths: string
  sqft: string
  budget: string
  address: string
  timeline: string
  minPrice: number
  maxPrice: number
  bedrooms: number
}

export interface FunnelState {
  interest: "homeowner" | "buyer" | "seller" | null
  name: string
  email: string
  specs: FunnelSpecs
  step: number
}

type Action =
  | { type: "SET_INTEREST"; payload: "homeowner" | "buyer" | "seller" }
  | { type: "SET_CONTACT"; payload: { name: string; email: string } }
  | { type: "SET_SPECS"; payload: Partial<FunnelSpecs> }
  | { type: "SET_STEP"; payload: number }
  | { type: "RESET" }

const initialState: FunnelState = {
  interest: null,
  name: "",
  email: "",
  specs: {
    city: "",
    propertyType: "",
    beds: "",
    baths: "",
    sqft: "",
    budget: "",
    address: "",
    timeline: "",
    minPrice: 0,
    maxPrice: 0,
    bedrooms: 0,
  },
  step: 1,
}

const STORAGE_KEY = "halifacts-funnel"

function reducer(state: FunnelState, action: Action): FunnelState {
  switch (action.type) {
    case "SET_INTEREST":
      return { ...state, interest: action.payload, step: 2 }
    case "SET_CONTACT":
      return { ...state, ...action.payload, step: 3 }
    case "SET_SPECS":
      return { ...state, specs: { ...state.specs, ...action.payload } }
    case "SET_STEP":
      return { ...state, step: action.payload }
    case "RESET":
      return initialState
    default:
      return state
  }
}

interface FunnelContextValue {
  state: FunnelState
  dispatch: React.Dispatch<Action>
}

const FunnelContext = createContext<FunnelContextValue | null>(null)

export function FunnelProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    if (typeof window === "undefined") return initialState
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : initialState
    } catch {
      return initialState
    }
  })

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  return (
    <FunnelContext.Provider value={{ state, dispatch }}>
      {children}
    </FunnelContext.Provider>
  )
}

export function useFunnel() {
  const ctx = useContext(FunnelContext)
  if (!ctx) throw new Error("useFunnel must be used within FunnelProvider")
  return ctx
}
