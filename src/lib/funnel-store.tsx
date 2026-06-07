"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"

export interface FunnelState {
  interest: "homeowner" | "buyer" | "seller" | null
  name: string
  email: string
  city: string
  address: string
  propertyType: string
  sqft: string
  minPrice: number
  maxPrice: number
  bedrooms: number
  baths: number
  submitted: boolean
}

type Action =
  | { type: "SET_INTEREST"; payload: "homeowner" | "buyer" | "seller" | null }
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_CITY"; payload: string }
  | { type: "SET_ADDRESS"; payload: string }
  | { type: "SET_PROPERTY_TYPE"; payload: string }
  | { type: "SET_SQFT"; payload: string }
  | { type: "SET_MIN_PRICE"; payload: number }
  | { type: "SET_MAX_PRICE"; payload: number }
  | { type: "SET_BEDROOMS"; payload: number }
  | { type: "SET_BATHS"; payload: number }
  | { type: "SUBMIT" }
  | { type: "RESET" }

const initialState: FunnelState = {
  interest: null,
  name: "",
  email: "",
  city: "",
  address: "",
  propertyType: "",
  sqft: "",
  minPrice: 0,
  maxPrice: 0,
  bedrooms: 0,
  baths: 0,
  submitted: false,
}

const STORAGE_KEY = "halifax-funnel"

function reducer(state: FunnelState, action: Action): FunnelState {
  switch (action.type) {
    case "SET_INTEREST":
      return { ...state, interest: action.payload }
    case "SET_NAME":
      return { ...state, name: action.payload }
    case "SET_EMAIL":
      return { ...state, email: action.payload }
    case "SET_CITY":
      return { ...state, city: action.payload }
    case "SET_ADDRESS":
      return { ...state, address: action.payload }
    case "SET_PROPERTY_TYPE":
      return { ...state, propertyType: action.payload }
    case "SET_SQFT":
      return { ...state, sqft: action.payload }
    case "SET_MIN_PRICE":
      return { ...state, minPrice: action.payload }
    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.payload }
    case "SET_BEDROOMS":
      return { ...state, bedrooms: action.payload }
    case "SET_BATHS":
      return { ...state, baths: action.payload }
    case "SUBMIT":
      return { ...state, submitted: true }
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
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    const interest = params.get("interest")
    if (interest === "buyer" || interest === "seller" || interest === "homeowner") {
      dispatch({ type: "SET_INTEREST", payload: interest })
    }
  }, [])

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
