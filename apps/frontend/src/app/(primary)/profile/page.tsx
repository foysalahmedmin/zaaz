import AuthWrapper from "@/components/wrappers/AuthWrapper";
import ProfilePage from "@/views/(user)/ProfilePage";

export default function Page() {
  return (
    <AuthWrapper>
      <ProfilePage />
    </AuthWrapper>
  );
}
