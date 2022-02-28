import { Dispatch } from "react";

export type PaginationType = { 
  currentPage: number
  setCurrentPage: Dispatch<number>
  count: string
}