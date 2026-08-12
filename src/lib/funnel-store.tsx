"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"

export type InterestType = "buyer" | "seller" | "homeowner"

export interface FunnelState {
  interest: InterestType
  name: string
  email: string
  phone: string
  bestTimeToCall: string
  areaOfInterest: string
  propertyAddress: string
  reasonForSelling: string
  sellingTimeline: string
  propertyType: string
  contactMethod: "phone" | "email" | "whatsapp" | null
  submitted: boolean
}

type Action =
  | { type: "SET_INTEREST"; payload: InterestType }
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_BEST_TIME_TO_CALL"; payload: string }
  | { type: "SET_AREA_OF_INTEREST"; payload: string }
  | { type: "SET_PROPERTY_ADDRESS"; payload: string }
  | { type: "SET_REASON_FOR_SELLING"; payload: string }
  | { type: "SET_SELLING_TIMELINE"; payload: string }
  | { type: "SET_PROPERTY_TYPE"; payload: string }
  | { type: "SET_CONTACT_METHOD"; payload: "phone" | "email" | "whatsapp" | null }
  | { type: "SUBMIT" }
  | { type: "RESET" }

export const initialState: FunnelState = {
  interest: "homeowner",
  name: "",
  email: "",
  phone: "",
  bestTimeToCall: "",
  areaOfInterest: "",
  propertyAddress: "",
  reasonForSelling: "",
  sellingTimeline: "",
  propertyType: "",
  contactMethod: null,
  submitted: false,
}

function reducer(state: FunnelState, action: Action): FunnelState {
  switch (action.type) {
    case "SET_INTEREST":
      return { ...state, interest: action.payload }
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
    case "SET_PROPERTY_ADDRESS":
      return { ...state, propertyAddress: action.payload }
    case "SET_REASON_FOR_SELLING":
      return { ...state, reasonForSelling: action.payload }
    case "SET_SELLING_TIMELINE":
      return { ...state, sellingTimeline: action.payload }
    case "SET_PROPERTY_TYPE":
      return { ...state, propertyType: action.payload }
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

export function FunnelProvider({ children, initialInterest }: { children: ReactNode; initialInterest?: InterestType }) {
  const [state, dispatch] = useReducer(reducer, { ...initialState, interest: initialInterest ?? initialState.interest })

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
