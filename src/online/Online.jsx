import {useOnline} from "./OnlineHook"

export default function Online(){
    const online = useOnline();
    return(
        <div>
            <h1>Online Status</h1>
            <p>{online ? "You are online" : "You are offline"}</p>
        </div>
    )
}   