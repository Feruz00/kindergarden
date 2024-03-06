import {Triangle} from 'react-loader-spinner'

const Loader = () => {
    
    return <Triangle
    visible={true}
    height="80"
    width="80"
    color="green"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClass="bg-transparent"
    />
}

export default Loader