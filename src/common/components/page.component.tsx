import React from "react"

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page">
      {children}
    </div>
  )
}
