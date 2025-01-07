
import Welcome from '../Features/auth/components/templates/welcome'
import AuthLayout from '../Features/auth/components/templates/authLayout'

export default function WelcomePage() {
  return (
    <AuthLayout>
        <Welcome />
    </AuthLayout>
  )
}
