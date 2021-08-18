export const Example1 = props => {
    const { user } = props;

    if(user) {
        return <button>Logout</button>
    }
    return <button>Login</button>
};

export const Example2 = props => {
    const { user } = props;

    let button = <button>Login</button>

    if(user){
        button = <button>Logout</button>
    }
    return (
        <>
            <h1>Hello there!</h1>
            {button}
        </>
    )

};

export const Example3 = props => {
    const newEmails = 2;

    return (
        <>
            <h1>Hello, there!</h1>
            {newEmails > 0 && 
                <h2>
                    You have {newEmails} new emails in your box.
                </h2>
            }
        </>
    )
}

export const Example4 = props => {
    const { user } = props;
    return (
        <>
            <h1>Hello there</h1>
            { user ? <button>Logout</button> : <button>Login</button>}
        </>
    )
}