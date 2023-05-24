import { Navigate } from 'react-router';

export default function LogoutPage() {
  // useEffect로 액션 기록 가능
  return (
    <Navigate to="/" />
  );
}
