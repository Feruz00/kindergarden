import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface Props{
    url:string
}
const PDFViewer:React.FC<Props> = ({url}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '750px' }} >
            <Viewer
                fileUrl={`${process.env.SERVER}/${url}`}
                plugins={[defaultLayoutPluginInstance]}
                
            />
        </div>
    );
}

export default PDFViewer