import AuthWrapper from "@/components/wrappers/AuthWrapper";
import CheckoutSuccessPage from "@/views/(client)/CheckoutSuccessPage";

export default function Page() {
  return (
    <AuthWrapper>
      <CheckoutSuccessPage />
    </AuthWrapper>
  );
}
