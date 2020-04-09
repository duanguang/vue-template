import observablePromise,{IObservablePromise} from 'hoolinks/observable-promise';
import { MockContainerEntity } from '../../model/mockEntity';
export interface IUserState{
    userInfo: IObservablePromise.PramsResult<MockContainerEntity>,
    token:string
}
export interface IActionTokenPrams{
    name:string,
    title:string
}