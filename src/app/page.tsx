import SignIn from "../Features/auth/components/templates/signin";
import AuthLayout from "../Features/auth/components/templates/authLayout";

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  );
}
