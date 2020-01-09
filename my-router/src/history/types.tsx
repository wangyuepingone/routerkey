
export type LocationState=any;
export interface Location<S = LocationState> {
    pathname: string;
    state?: S;
}

export type LocationDescritor = string | Location;

export interface History{
    push(to:LocationDescritor):void;
}