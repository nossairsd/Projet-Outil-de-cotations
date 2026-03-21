import { redirect } from 'next/navigation'

// Redirect to admin dashboard by default
// In production, this would check user role and redirect accordingly
export default function DashboardPage() {
  redirect('/dashboard/admin')
}
