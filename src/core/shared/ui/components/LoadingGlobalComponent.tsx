import { GridLoader } from 'react-spinners';

export const LoadingGlobalComponent = () => {
    return (
        <div className="loading-global">
            <GridLoader
                color={'rgb(44, 188, 218)'}
                loading={true}
                cssOverride={{}}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}