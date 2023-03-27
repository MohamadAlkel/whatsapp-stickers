import React, { FC, ReactElement } from "react";
import MainPage from "../../main-page";

const MainPageRoute: FC<any> = (props): ReactElement<void> => {
  return <MainPage {...props} />;
};

export default MainPageRoute;
