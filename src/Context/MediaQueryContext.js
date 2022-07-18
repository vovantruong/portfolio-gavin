import {createContext} from 'react'
import {useMediaQuery} from 'react-responsive'

const MediaQueryContext = createContext();

function MediaProvider ({children}) {

    const isMobile = useMediaQuery({query: `(max-width: 739px)`});

    return(
        <MediaQueryContext.Provider value={isMobile}>
            {children}
        </MediaQueryContext.Provider>
    )
}

export {MediaQueryContext, MediaProvider};