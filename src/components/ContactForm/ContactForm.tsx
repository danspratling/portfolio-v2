import { useState, type FormEvent } from "react"
import { Input } from "@/Input"
import { TextArea } from "@/TextArea"
import { Button } from "@/Button"

export const ContactForm = ({ title, description }) => {
  const [responseMessage, setResponseMessage] = useState("")

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const body = Object.fromEntries(formData.entries())

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    })
    const data = await response.json()

    console.log(body, data)

    // if (data.message) {
    //   setResponseMessage(data.message)
    // }
  }

  return (
    <section className="container max-w-xl">
      <div className="flex flex-col gap-2 mb-16 text-center">
        <h2>{title}</h2>
        <p className="font-light text-gray-400">{description}</p>
      </div>
      <form className="space-y-4" onSubmit={submit} method="POST">
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="First name" placeholder="" autoComplete="given-name" />
          <Input label="Last name" placeholder="" autoComplete="family-name" />
        </div>
        <div>
          <Input
            label="Email"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>
        <div>
          <TextArea label="Message" placeholder="Leave me a message" />
        </div>
        <Button variant="primary" className="w-full">
          Submit
        </Button>
        {responseMessage && (
          <p className="text-center text-gray-400">{responseMessage}</p>
        )}
      </form>
    </section>
  )
}
