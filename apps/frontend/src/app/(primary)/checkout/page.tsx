import AuthWrapper from "@/components/wrappers/AuthWrapper";
import CheckoutPage from "@/views/(client)/CheckoutPage";

export default function Page() {
  return (
    <AuthWrapper>
      <CheckoutPage />
    </AuthWrapper>
  );
}
