import {ClockLoader} from 'react-spinners';

export const LoadingComponent = () => {
    return (
        <div className="loading-components">
            <ClockLoader
                color={'rgb(44, 188, 218)'}
                loading={true}
                cssOverride={{}}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}