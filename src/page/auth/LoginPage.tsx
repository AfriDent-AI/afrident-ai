import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Mail,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from '@/components/ui/checkbox';
import { PasswordInput } from "@/component/auth/AuthPasswordInput";
import logo from '@/assets/logo (2).png'



export default function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Please enter your email and password.");
            return;
        }

        setLoading(true);

        // Replace this with your authentication API.
        await new Promise((resolve) => setTimeout(resolve, 800));

        setLoading(false);

        console.log({
            email,
            password,
            rememberMe,
        });

        // Temporary navigation until backend authentication is connected.
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-[#F8FCFD]">

            {/* <AuthHeader /> */}


            <div className="flex min-h-[calc(100vh-80px)]">

                {/* <AuthBranding /> */}

                {/* Login */}
                <main className="flex flex-1 items-center justify-center px-5 py-10 sm:px-10">

                    <div className="w-full max-w-[460px]">

                        {/* Mobile branding */}


                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(32,62,98,0.07)] sm:p-8">

                            <div className="mb-7">
                                <div className="flex items-center">
                                    <div className="flex">
                                        <img src={logo} alt="Logo" className="h-20 w-auto" />
                                    </div>


                                    <h2 className="text-2xl font-extrabold text-[#203E62]">
                                        Welcome back
                                    </h2>
                                </div>
                               
                                <p className="mt-2 text-[16px] leading-relaxed text-slate-800">
                                    Sign in to continue to your AfriDent-AI account.
                                </p>
                                 <h2 className="text-sm  text-slate-700">
                                        Not a member? <Link to='/auth/signup'><span className="text-[#3972b9]">Register</span></Link>
                                    </h2>
                            </div>

                            {error && (
                                <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                                    {error}
                                </div>
                            )}

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-[#203E62]"
                                    >
                                        Email address
                                    </label>

                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                                        <Input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            placeholder="you@example.com"
                                            className="h-11 border-slate-200 pl-10 focus-visible:border-[#078F9E] focus-visible:ring-[#078F9E]/20"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="text-sm font-semibold text-[#203E62]"
                                        >
                                            Password
                                        </label>

                                        <Link
                                            to="/forgot-password"
                                            className="text-xs font-semibold text-[#078F9E] hover:underline"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <PasswordInput
                                        value={password}
                                        onChange={setPassword}
                                    />
                                </div>

                                {/* Remember */}
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="remember"
                                        checked={rememberMe}
                                        onCheckedChange={(checked) =>
                                            setRememberMe(checked === true)
                                        }
                                        className="data-[state=checked]:border-[#078F9E] data-[state=checked]:bg-[#078F9E]"
                                    />

                                    <label
                                        htmlFor="remember"
                                        className="cursor-pointer text-xs text-slate-600"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="h-11 w-full rounded-lg bg-[#078F9E] font-bold text-white shadow-sm hover:bg-[#067984]"
                                >
                                    {loading ? (
                                        "Signing in..."
                                    ) : (
                                        <>
                                            Sign in
                                            <ArrowRight className="ml-2 size-4" />
                                        </>
                                    )}
                                </Button>
                            </form>

                            {/* Divider */}
                            <div className="my-6 flex items-center gap-3">
                                <div className="h-px flex-1 bg-slate-200" />
                                <span className="text-xs text-slate-400">
                                    OR
                                </span>
                                <div className="h-px flex-1 bg-slate-200" />
                            </div>

                            {/* Google */}
                            <Button
                                type="button"
                                variant="outline"
                                className="h-11 w-full border-slate-200 font-semibold text-[#203E62] hover:bg-slate-50"
                                onClick={() => console.log("Google login")}
                            >
                                <span className="mr-2 text-base font-bold">
                                    G
                                </span>
                                Continue with Google
                            </Button>

                            <p className="mt-6 text-center text-sm text-slate-500">
                                Don't have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="font-bold text-[#078F9E] hover:underline"
                                >
                                    Create one
                                </Link>
                            </p>
                        </div>

                        <p className="mt-6 text-center text-[11px] leading-relaxed text-slate-400">
                            By continuing, you agree to AfriDent-AI's{" "}
                            <Link
                                to="/terms"
                                className="text-[#078F9E] hover:underline"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                to="/privacy"
                                className="text-[#078F9E] hover:underline"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}