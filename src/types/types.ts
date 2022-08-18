import React from "react"

export interface Component {
    className?: string
    children?: React.ReactNode
    testId?: string
}