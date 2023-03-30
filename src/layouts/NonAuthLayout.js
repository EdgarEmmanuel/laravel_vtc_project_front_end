import React from 'react';
import { withRouter } from 'react-router-dom';


const NonAuthLayout = ({ children }) => {
    // const {
    //     layoutModeType,
    // } = useSelector(state => ({
    //     layoutModeType: state.Layout.layoutModeType,
    // }));

    // useEffect(() => {
    //     if (layoutModeType === "dark") {
    //         document.body.setAttribute("data-layout-mode", "dark");
    //     } else {
    //         document.body.setAttribute("data-layout-mode", "light");
    //     }
    // }, [layoutModeType]);
    return (
        <div>
            {children}
        </div>
    );
};

export default withRouter(NonAuthLayout);