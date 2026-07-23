"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"

export interface FunnelState {
  name: string
  email: string
  phone: string
  bestTimeToCall: string
  areaOfInterest: string
  contactMethod: "phone" | "email" | "whatsapp" | null
  submitted: boolean
}

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_BEST_TIME_TO_CALL"; payload: string }
  | { type: "SET_AREA_OF_INTEREST"; payload: string }
  | { type: "SET_CONTACT_METHOD"; payload: "phone" | "email" | "whatsapp" | null }
  | { type: "SUBMIT" }
  | { type: "RESET" }

const initialState: FunnelState = {
  name: "",
  email: "",
  phone: "",
  bestTimeToCall: "",
  areaOfInterest: "",
  contactMethod: null,
  submitted: false,
}

function reducer(state: FunnelState, action: Action): FunnelState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload }
    case "SET_EMAIL":
      return { ...state, email: action.payload }
    case "SET_PHONE":
      return { ...state, phone: action.payload }
    case "SET_BEST_TIME_TO_CALL":
      return { ...state, bestTimeToCall: action.payload }
    case "SET_AREA_OF_INTEREST":
      return { ...state, areaOfInterest: action.payload }
    case "SET_CONTACT_METHOD":
      return { ...state, contactMethod: action.payload }
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
  const [state, dispatch] = useReducer(reducer, initialState)

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
