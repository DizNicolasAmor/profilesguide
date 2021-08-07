import React, { FC } from "react";
import { connect } from "react-redux";
import { IState } from "../store";
import { IUser } from "../store";

export interface IHome {
  user: IUser | undefined;
}

const Home: FC<IHome> = ({ user }) => {
  const idOfHomeTitle = "idOfHomeTitle";

  return (
    <section aria-labelledby={idOfHomeTitle}>
      <h1 className="text-center my-5" id={idOfHomeTitle}>
        Welcome to the Home section
      </h1>
      <p className="text-center my-5">Hello {user?.email || "new user"}</p>
    </section>
  );
};

const mapState = (state: IState) => ({
  isLoading: state.isLoading,
});

const connector = connect(mapState);

export default connector(Home);
