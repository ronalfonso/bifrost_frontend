import { GridLoader } from 'react-spinners';
import styles from "../../../../styles/style.module.scss";

export const LoadingGlobalComponent = () => {
    return (
        <div className="loading-global">
            <GridLoader
                color={styles.colorPrimary}
                loading={true}
                cssOverride={{}}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}