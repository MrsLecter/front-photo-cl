import { createBrowserRouter, Navigate } from "react-router-dom";
import AccountSettings from "../pages/accountSetting/AccoundSetting";
import AddSelfie from "../pages/addSelfie/AddSelfie";
import AlbumView from "../pages/albumView/AlbumView";
import ApproveSelfie from "../../components/pages/approveSelfie/ApproveSelfie";
import ChangePhone from "../pages/changePhone/ChangePhone";
import { ChooseLanguage } from "../pages/chooseLanguage/ChooseLanguage";
import CodeConfirm from "../pages/codeConfirm/CodeConfirm";
import Dashboard from "../pages/dashboard/Dashboard";
import DeterminateEmail from "../pages/determinateEmail/DeterminateEmail";
import DeterminateUser from "../pages/determinateUser/DeterminateUser";
import EmptyAlbumsPage from "../pages/emptyAlbumPage/EmptyAlbumsPage";
import Frame from "../pages/frame/Frame";
import Home from "../pages/home/Home";
import Info from "../pages/info/Info";
import { Policy } from "../pages/legalInfo/Policy";
import { Terms } from "../pages/legalInfo/Terms";
import NotFound from "../pages/notFound/NotFound";
import NotificationSetting from "../pages/notificationSetting/NotificationSetting";
import Payment from "../pages/payment/Payment";
import PaymentComplete from "../pages/paymentComplete/PaymentComplete";
import PhotoView from "../pages/photoView/PhotoView";
import Signup from "../pages/signup/Signup";
import TakeSelfie from "../pages/takeSelfie/TakeSelfie";
import { UserProfilePage } from "../pages/userProfile/UserProfile";
import { useAppSelector } from "@hooks/reducers.hook";

const RequireAuth = ({
  children,
  redirectTo,
}: {
  redirectTo: string;
  children: JSX.Element;
}) => {
  const { isLoggedIn } = useAppSelector((store) => store.userReducer);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

const edit_route_group = [
  {
    path: "/framed",
    element: (
      <RequireAuth redirectTo="/">
        <Frame />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/determinate_email",
    element: (
      <RequireAuth redirectTo="/">
        <DeterminateEmail />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/determinate_user",
    element: (
      <RequireAuth redirectTo="/">
        <DeterminateUser />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/change_phone",
    element: (
      <RequireAuth redirectTo="/">
        <ChangePhone />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
];

const profile_setting_route_group = [
  {
    path: "/approve_selfie",
    element: (
      <RequireAuth redirectTo="/">
        <ApproveSelfie />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/take_selfie",
    element: (
      <RequireAuth redirectTo="/">
        <TakeSelfie />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/add_selfie",
    element: (
      <RequireAuth redirectTo="/">
        <AddSelfie />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/user_profile",
    element: (
      <RequireAuth redirectTo="/">
        <UserProfilePage />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/account_settings",
    element: (
      <RequireAuth redirectTo="/">
        <AccountSettings />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/notification",
    element: (
      <RequireAuth redirectTo="/">
        <NotificationSetting />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
];

const view_content_route_group = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Info />,
  },
  {
    path: "/albums_empty",
    element: <EmptyAlbumsPage />,
    errorElement: <Info />,
  },
  {
    path: "/photo_view",
    element: (
      <RequireAuth redirectTo="/">
        <PhotoView />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth redirectTo="/">
        <Dashboard />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/album_view/:albumName",
    element: (
      <RequireAuth redirectTo="/">
        <AlbumView />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
];

const signup_route_group = [
  {
    path: "/confirm",
    element: <CodeConfirm />,
    errorElement: <Info />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Info />,
  },
  {
    path: "/signup/lang",
    element: <ChooseLanguage />,
    errorElement: <Info />,
  },
];

const payment_route_group = [
  {
    path: "/payment",
    element: (
      <RequireAuth redirectTo="/">
        <Payment />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
  {
    path: "/payment_complete",
    element: (
      <RequireAuth redirectTo="/">
        <PaymentComplete />
      </RequireAuth>
    ),
    errorElement: <Info />,
  },
];

const policy_route_group = [
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
];

const service_route_group = [
  {
    path: "/info/:message",
    element: <Info />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter([
  ...profile_setting_route_group,
  ...view_content_route_group,
  ...signup_route_group,
  ...service_route_group,
  ...edit_route_group,
  ...payment_route_group,
  ...policy_route_group,
]);

export default router;
