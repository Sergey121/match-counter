import React from "react";
import styles from './Field.module.css';

type Props = {
  children: React.ReactNode;
};

const Field = ({ children }: Props) => {
  return <div className={styles.field}>{children}</div>;
};

export default Field;
