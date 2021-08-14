import React, { FC } from "react";
import { connect } from "react-redux";
import { IState } from "../../store";
import { IUser } from "../../store";
import CustomSection from "../common/customSection";

export interface IHome {
  user: IUser | undefined;
}

const Home: FC<IHome> = ({ user }) => (
  <CustomSection title="Welcome to the Profiles Guide" titleId="idOfHomeTitle">
    <p className="text-center my-5">Hello {user?.email || "new user"}</p>
  </CustomSection>
);

const mapState = (state: IState) => ({
  user: state.user,
});

const connector = connect(mapState);

export default connector(Home);
