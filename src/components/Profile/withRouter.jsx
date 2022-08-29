import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

export function withRouter(Component) {
    function WithUrlDataContainerComponent(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component {...props}
                params={params} />
        );
    }
    return WithUrlDataContainerComponent;
}