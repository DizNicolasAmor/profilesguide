import React, { FC } from "react";

export interface IHome {
  title: string;
}

const CustomSection: FC<IHome> = ({ title, children }) => (
  <section>
    <h1 className="text-center my-5">{title}</h1>
    {children}
  </section>
);

export default CustomSection;
