import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
            <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
            <p className="text-gray-600 mb-8">
            We&apos;re sorry, but that page doesn&apos;t exist.
            </p>
            <Link href="/">
            <Button>Return Home</Button>
            </Link>
        </div>
    );
}