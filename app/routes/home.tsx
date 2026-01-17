import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Resmagic" },
        {
            name: "description",
            content: "Smart feedback for your dream job!",
        },
    ];
};

export default function Home() {
    const { auth, kv } = usePuterStore();
    const navigate = useNavigate();
    // const [resumes, setResumes] = useState<Resume[]>([]);
    // const [loadingResumes, setLoadingResumes] = useState(false);

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

    return (
        <main className="min-h-screen bg-[url('/images/bg-main.svg')] bg-cover bg-center">
            <Navbar />

            <section className="main-section">
                <div className="page-heading py-12">
                    <h1>Track your application and Resume Ratings</h1>
                    <h2>Review your submission and check AI powered feedback</h2>
                </div>


                {resumes.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-10 max-w-7xl mx-auto">
                        {resumes.map((resume) => (
                            <ResumeCard key={resume.id} resume={resume} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}