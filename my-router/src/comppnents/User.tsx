import React from 'react';
import { RouteComponentProps } from '../react-router-dom';
type Props = RouteComponentProps&{

}
export default class Home extends React.Component<Props>{
    render(){
        return (
            <div>User</div>
        )
    }
}