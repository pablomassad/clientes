import React from "react"
import EventEmitter from 'events'

export const EventContext = React.createContext()

export const EventContextProvider = (props) =>
{
    console.log('[EVENTCONTEXTPROVIDER]')
    const evtManager = new EventEmitter()

    // useEffect(() =>
    // {
    //     console.log("[EVENTCONTEXTPROVIDER] => useEffect");
    //     // console.log('Cant de subscriptores: ', EventEmitter.listenerCount(client,'TODO_ADDED'))
    //     console.log('defaultMaxListeners: ',EventEmitter.defaultMaxListeners)
    // },[])

    return (
        <EventContext.Provider value={{evtManager}}>
            {props.children}
        </EventContext.Provider>
    );
};
