import '../styles/globals.css'
import { useState } from "react"
import { useRouter } from "next/router"


function MyApp({ Component, pageProps }) {
const router = useRouter()
const [loading, setLoading] = useState(true)

  return (
    <>
      <Component loader={router.pathname == '/tasker_app' ? {loading, setLoading} : null} {...pageProps} />
    </>
  )
}

export default MyApp
