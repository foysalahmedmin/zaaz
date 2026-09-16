import AuthWrapper from "@/components/wrappers/AuthWrapper";
import CheckoutCancelPage from "@/views/(client)/CheckoutCancelPage";

export default function Page() {
  return (
    <AuthWrapper>
      <CheckoutCancelPage />
    </AuthWrapper>
  );
}
