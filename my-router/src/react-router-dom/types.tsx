import { Location,History,LocationState } from '../history'
export interface ContextValue{
    location?:Location;
    history?: History;
}
export interface match<Params = {}> {
    params: Params;
    isExact: boolean;
    path: string;
    url: string;
}

export interface RouteComponentProps<
    Params= {},
    C=any,
    S = any
> {
    history: History;
    location: Location<S>;
    match?: match<Params>;
}

export interface RouteChildrenProps<Params extends { [K in keyof Params]?: string } = {}, S = LocationState> {
    history: History;
    location: Location<S>;
    match: match<Params> | null;
}

export interface Message{
    (location:Location):string;
}