import {createContext, useContext} from "react";
import {HUE_BRIDGE_IP, USERNAME, LIGHT_ID} from "../env.js";

const AppContext = createContext(null);

const getLightState = async () => {
    const res = await fetch(`http://${HUE_BRIDGE_IP}/api/${USERNAME}/lights/${LIGHT_ID}`);
    const data = await res.json();
    return {
        on: data.state.on,
        bri: data.state.bri,
    }
}

const turnOn = async () => {
    const res = await fetch(`http://${HUE_BRIDGE_IP}/api/${USERNAME}/lights/${LIGHT_ID}/state`, {
        method: 'PUT',
        body: JSON.stringify({
            on: true,
            bri: 254,
        }),
    })
    const data = await res.json();
    if(data[0].success) {
        console.log('Light turned on');
    }
}

const turnDark = async () => {
    const {on, bri} = await getLightState();
    if(!on) return;
    const newBri = bri - 100 > 0? bri - 100 : 0;

    const res = await fetch(`http://${HUE_BRIDGE_IP}/api/${USERNAME}/lights/${LIGHT_ID}/state`, {
        method: 'PUT',
        body: JSON.stringify({"bri":newBri}),
    })
    const data = await res.json();
    if(data[0].success) {
        console.log('Light turned dark');
    }
}

const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={{HUE_BRIDGE_IP, USERNAME, turnOn,turnDark}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
export const useAppContext = () => useContext(AppContext);