import React,{MouseEvent} from 'react';
import { RouteComponentProps } from '../react-router-dom';
import { withRouter } from '../react-router-dom/';
interface NavHeaderProps{
    title:string;
}
type Props =RouteComponentProps & NavHeaderProps;
class NavHeader extends React.Component<Props>{
    render(){
        return (
            <div className="navbar-header">
                <div 
                onClick={(event:MouseEvent)=> this.props.history.push('/')}
                className="navbar-brand">{this.props.title}</div>
            </div>
        )
    }
}
export default withRouter<NavHeaderProps>(NavHeader)