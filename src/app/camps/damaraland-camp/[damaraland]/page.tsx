import { notFound } from 'next/navigation'

export default function DynamicDamaralandPage() {
  // This dynamic route is not currently implemented
  // Redirect to the main damaraland camp page
  notFound()
}

export function generateStaticParams() {
  return []
}
