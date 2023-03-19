import {ClockLoader} from 'react-spinners';
import styles from "../../../../styles/style.module.scss";

export const LoadingComponent = () => {
    return (
        <div className="loading-components">
            <ClockLoader
                color={styles.colorPrimary}
                loading={true}
                cssOverride={{}}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}