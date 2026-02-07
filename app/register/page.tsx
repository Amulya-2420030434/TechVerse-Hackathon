"use client"

import React, { useState } from "react"

const domains = ["Web Development", "AI / ML", "Cyber Security", "Cloud Computing"]

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false) // Added loading state

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    // Collect data from the form
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      domain: formData.get("domain"),
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Failed to connect to the server.")
    } finally {
      setIsLoading(false)
    }
  }

  // ... (Keep the "if (submitted)" success UI exactly as you had it)

  return (
    // ... (Keep your layout exactly as it was, just update the button below)
    <button
      type="submit"
      disabled={isLoading}s
      className="mt-2 h-12 rounded-lg bg-primary text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      {isLoading ? "Processing..." : "Submit Registration"}
    </button>
  )
}