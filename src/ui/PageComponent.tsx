import React , {forwardRef, ForwardRefRenderFunction } from 'react'

interface PageProps {
    number: number;
    children: React.ReactNode
}
  
const PageComponent:ForwardRefRenderFunction<HTMLDivElement, PageProps> = (props, ref) => {
    return (
        <div className="page h-full flex items-center" ref={ref}>
            <div className="page-content">
                {/* <h2 className="page-header">Page header - {props.number}</h2> */}
                {/* <div className="page-image"></div> */}
                <div className="page-text">{props.children}</div>
                {/* <div className="page-footer">{props.number + 1}</div> */}
            </div>
        </div>
    );
};
export default  forwardRef(PageComponent);
