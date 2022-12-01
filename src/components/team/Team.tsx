import styles from "./Team.module.css";
import { useCallback, useMemo, useState } from 'react';

type Props = {
  id: "blue" | "red";
};

const Team = (props: Props) => {
  const { id } = props;

  const [count, setCount] = useState(0);

  const handlePlus = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleMinus = useCallback(() => {
    setCount(prev => Math.max(0, prev - 1));
  }, []);

  const wrapperClasses = useMemo(() => {
    return [styles.team, styles[`team-${id}`]].join(" ");
  }, [id]);

  return (
    <div className={wrapperClasses}>
      <div className={styles.count}>{count}</div>
      <div className={styles.actions}>
        <div title={'Subtract a point'} onClick={handleMinus} className={`${styles.action} ${styles.actionMinus}`} />
        <div title={'Add a point'} onClick={handlePlus} className={`${styles.action} ${styles.actionPlus}`} />
      </div>
    </div>
  );
};

export default Team;
