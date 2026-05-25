import rawData from "@/data/mock-data.json"
import type { MockData } from "./types"

const data = rawData as MockData

export function getHomeData() {
  return data.home
}

export function getCustomersData() {
  return data.customers
}

export function getAnalyticsData() {
  return data.analytics
}

export function getFinanceData() {
  return data.finance
}

export function getTicketsData() {
  return data.tickets
}

export function getEntities() {
  return data.entities
}

export type { MockData, Kpi, Trend } from "./types"
