export const prerender = false // Not needed in 'server' mode
import type { APIRoute } from "astro"

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const formId = "myzkeyen"
  const name = `${data.get("first-name")} ${data.get("last-name")}`
  const email = data.get("email")
  const message = data.get("message")

  console.log(data)
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    )
  }
  // Do something with the data, then return a success response
  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  })

  const response = await res.json()

  console.log(response)

  if (!response.ok) {
    return new Response(
      JSON.stringify({
        message: "Error submitting form",
      }),
      { status: 500 }
    )
  }

  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  )
}
