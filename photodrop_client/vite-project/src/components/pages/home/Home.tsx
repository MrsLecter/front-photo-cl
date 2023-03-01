import { Link } from "react-router-dom";
import ButtonMenu from "./buttonMenu/ButtonMenu";
import mainLogoPNG from "@images/main_logo.png";
import { AppUrlsEnum, MAIN_MENU_BUTTONS } from "@const";
import {
  Wrapper,
  HomePage,
  HomePageLogo,
  HomePageHeader,
  HomePageBtnList,
  HomePageGreeting,
} from "./Home.styles";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import { userSlice } from "@/components/store/reducers/userSlice";

const Home: React.FC = () => {
  const { isLoggedIn } = useAppSelector((store) => store.userReducer);

  return (
    <Wrapper>
      <HomePage>
        <HomePageLogo>
          <img src={mainLogoPNG} alt="mainLogo.png" />
        </HomePageLogo>
        <HomePageHeader>Photographers</HomePageHeader>
        {isLoggedIn ? (
          <HomePageBtnList>
            {MAIN_MENU_BUTTONS &&
              MAIN_MENU_BUTTONS.map((item) => {
                return (
                  <li key={item.id + 20}>
                    <ButtonMenu
                      key={item.id}
                      label={item.label}
                      way={item.way}
                    />
                  </li>
                );
              })}
          </HomePageBtnList>
        ) : (
          <HomePageGreeting>
            <p>Welcome! 🤗 Good to see you!</p>
            <p>
              You need to <Link to={AppUrlsEnum.SIGNUP}>login/signup</Link> to
              use the service
            </p>
          </HomePageGreeting>
        )}
      </HomePage>
    </Wrapper>
  );
};

export default Home;
