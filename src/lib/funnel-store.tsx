"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

export interface FunnelState {
  interest: "homeowner" | "buyer" | "seller" | null
  name: string
  email: string
  phone: string
  bestTimeToCall: string
  areaOfInterest: string
  message: string
  budget: string
  timeline: string
  consentEmail: boolean
  consentSMS: boolean
  contactMethod: "phone" | "email" | "whatsapp" | null
  submitted: boolean
}

type Action =
  | { type: "SET_INTEREST"; payload: "homeowner" | "buyer" | "seller" | null }
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_BEST_TIME_TO_CALL"; payload: string }
  | { type: "SET_AREA_OF_INTEREST"; payload: string }
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "SET_BUDGET"; payload: string }
  | { type: "SET_TIMELINE"; payload: string }
  | { type: "SET_CONSENT_EMAIL"; payload: boolean }
  | { type: "SET_CONSENT_SMS"; payload: boolean }
  | { type: "SET_CONTACT_METHOD"; payload: "phone" | "email" | "whatsapp" | null }
  | { type: "SUBMIT" }
  | { type: "RESET" }

const initialState: FunnelState = {
  interest: null,
  name: "",
  email: "",
  phone: "",
  bestTimeToCall: "",
  areaOfInterest: "",
  message: "",
  budget: "",
  timeline: "",
  consentEmail: false,
  consentSMS: false,
  contactMethod: null,
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
    case "SET_PHONE":
      return { ...state, phone: action.payload }
    case "SET_BEST_TIME_TO_CALL":
      return { ...state, bestTimeToCall: action.payload }
    case "SET_AREA_OF_INTEREST":
      return { ...state, areaOfInterest: action.payload }
    case "SET_MESSAGE":
      return { ...state, message: action.payload }
    case "SET_BUDGET":
      return { ...state, budget: action.payload }
    case "SET_TIMELINE":
      return { ...state, timeline: action.payload }
    case "SET_CONSENT_EMAIL":
      return { ...state, consentEmail: action.payload }
    case "SET_CONSENT_SMS":
      return { ...state, consentSMS: action.payload }
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
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(STORAGE_KEY)
    }
    return initialState
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    const interest = params.get("interest")
    if (interest === "buyer" || interest === "seller" || interest === "homeowner") {
      dispatch({ type: "SET_INTEREST", payload: interest })
    }
  }, [router])

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
