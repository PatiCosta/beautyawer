import { Route as ReactDOMRoute, Navigate } from 'react-router-dom'

// import { useAuth } from '../hooks/auth'

function Route({isPrivate = false, isAdmin = false, component: Component, ...rest}) {
    // const { user } = useAuth()

    // if(isAdmin && user.role.title === 'administrador') {
    //     return (
    //         <ReactDOMRoute 
    //             {...rest} 
    //             render={({ location }) => {
    //                 return isPrivate === (!!user) ? (
    //                     <Component />
    //                 ) : (
    //                     <Redirect to={{
    //                         pathname: isPrivate ? '/' : '/dashboard',
    //                         state: { from: location }
    //                     }}/>
    //                 )
    //             }}
    //         />
    //     ) 
    // }

    // if(isAdmin && user.role.title !== 'administrador') {
    //     return (
    //         <ReactDOMRoute 
    //             {...rest} 
    //             render={({ location }) => {
    //                 return (
    //                     <Redirect to={{
    //                         pathname: isPrivate ? '/' : '/dashboard',
    //                         state: { from: location }
    //                     }}/>
    //                 )
    //             }}
    //         />
    //     )       
    // }

    return (
        <ReactDOMRoute 
            {...rest} 
            render={({ location }) => {
                return isPrivate ? (
                    <Component />
                ) : (
                    <Navigate to={{
                        pathname: isPrivate ? '/' : '/dashboard',
                        state: { from: location }
                    }}/>
                )
            }}
        />
    )
}

export default Route