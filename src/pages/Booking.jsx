import { useEffect } from 'react'

export default function Booking() {
  useEffect(() => {
    // Send guests to the standalone booking app on our own subdomain.
    // (Server-side redirect in vercel.json handles direct hits without a flash;
    // this covers in-app client-side navigation to /book.)
    window.location.replace('https://booking.hawaiipanoramatours.com/')
  }, [])

  return null
}
