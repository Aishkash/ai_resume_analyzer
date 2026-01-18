import {usePuterStore} from "~/lib/puter";
import {useEffect, useMemo, useRef} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => ([
    { title: 'Resmagic | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const navigate = useNavigate();
    const hasRedirected = useRef(false);


    const next = useMemo(() => {
        const params = new URLSearchParams(location.search);
        return params.get('next') || '/';
    }, [location.search]);

    useEffect(() => {
        const hasNextParam = new URLSearchParams(location.search).has('next');

        if (auth.isAuthenticated && !isLoading && !hasRedirected.current && hasNextParam) {
            hasRedirected.current = true;
            console.log('Redirecting after login to:', next);
            navigate(next, { replace: true });
        }
    }, [auth.isAuthenticated, isLoading, next, navigate, location.search]);

    //  sign out
    const handleSignOut = async () => {
        try {
            await auth.signOut();

            navigate('/', { replace: true });
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2>
                            {auth.isAuthenticated
                                ? "Manage Your Account"
                                : "Log In to Continue Your Job Journey"}
                        </h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse" disabled>
                                <p>Processing...</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={handleSignOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth