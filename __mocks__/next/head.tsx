import React from "react"

interface Props {
  children: React.ReactNode
}

export default function Head({ children }: Props) {
  return <div>{children}</div>
}
