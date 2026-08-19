import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    UserRound,
    Mail,
    Phone,
    ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from '@/components/ui/checkbox';
import { RoleSelector, type UserRole } from "@/component/auth/RoleSelector";
import { AuthHeader } from "@/component/auth/AuthHeader";
import { AuthBranding } from "@/component/auth/AuthBranding";
import { PasswordInput } from "@/component/auth/AuthPasswordInput";

import logo from '@/assets/logo (2).png'
export default function SignupPage() {
    const navigate = useNavigate();

    const [role, setRole] = useState<UserRole>("patient");

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [terms, setTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const updateField = (
        field: keyof typeof form,
        value: string
    ) => {
        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setError("");

        if (
            !form.firstName ||
            !form.lastName ||
            !form.email ||
            !form.password
        ) {
            setError("Please complete all required fields.");
            return;
        }

        if (form.password.length < 8) {
            setError(
                "Password must contain at least 8 characters."
            );
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!terms) {
            setError(
                "Please accept the Terms of Service and Privacy Policy."
            );
            return;
        }

        setLoading(true);

        // Replace this with your registration API.
        await new Promise((resolve) =>
            setTimeout(resolve, 900)
        );

        setLoading(false);

        console.log({
            ...form,
            role,
        });

        navigate("/");
    };

    return (
        <div className="min-h-screen bg-[#F8FCFD]">

            {/* <AuthHeader /> */}

            <div className="flex min-h-[calc(100vh-80px)]">

                {/* <AuthBranding /> */}

                <main className="flex flex-1 items-center justify-center px-5 py-8 sm:px-10">

                    <div className="w-full max-w-[520px]">

                        {/* Mobile branding */}


                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(32,62,98,0.07)] sm:p-8">

                            <div className="mb-6">
                             <div className="flex items-center">   <div className="flex">
                                    <img src={logo} alt="Logo" className="h-20 w-auto" />
                                </div>
                                <h2 className="text-2xl font-extrabold text-[#203E62]">
                                    Create your account
                                </h2>
</div>
                                <p className="mt-2 text-[14px] leading-relaxed text-slate-700">
                                    Join the AfriDent-AI ecosystem and access
                                    intelligent oral health services.
                                </p>
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

                                {/* Role */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#203E62]">
                                        I am registering as
                                    </label>

                                    <RoleSelector
                                        value={role}
                                        onChange={setRole}
                                    />
                                </div>

                                {/* Names */}
                                <div className="grid gap-4 sm:grid-cols-2">

                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="mb-2 block text-sm font-semibold text-[#203E62]"
                                        >
                                            First name
                                        </label>

                                        <div className="relative">
                                            <UserRound className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                                            <Input
                                                id="firstName"
                                                value={form.firstName}
                                                onChange={(event) =>
                                                    updateField(
                                                        "firstName",
                                                        event.target.value
                                                    )
                                                }
                                                placeholder="First name"
                                                className="h-11 pl-10 focus-visible:border-[#078F9E] focus-visible:ring-[#078F9E]/20"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="mb-2 block text-sm font-semibold text-[#203E62]"
                                        >
                                            Last name
                                        </label>

                                        <Input
                                            id="lastName"
                                            value={form.lastName}
                                            onChange={(event) =>
                                                updateField(
                                                    "lastName",
                                                    event.target.value
                                                )
                                            }
                                            placeholder="Last name"
                                            className="h-11 focus-visible:border-[#078F9E] focus-visible:ring-[#078F9E]/20"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="signup-email"
                                        className="mb-2 block text-sm font-semibold text-[#203E62]"
                                    >
                                        Email address
                                    </label>

                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                                        <Input
                                            id="signup-email"
                                            type="email"
                                            value={form.email}
                                            onChange={(event) =>
                                                updateField(
                                                    "email",
                                                    event.target.value
                                                )
                                            }
                                            placeholder="you@example.com"
                                            className="h-11 pl-10 focus-visible:border-[#078F9E] focus-visible:ring-[#078F9E]/20"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-semibold text-[#203E62]"
                                    >
                                        Phone number{" "}
                                        <span className="font-normal text-slate-400">
                                            (optional)
                                        </span>
                                    </label>

                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={(event) =>
                                                updateField(
                                                    "phone",
                                                    event.target.value
                                                )
                                            }
                                            placeholder="+251 9XX XXX XXX"
                                            className="h-11 pl-10 focus-visible:border-[#078F9E] focus-visible:ring-[#078F9E]/20"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <label
                                        htmlFor="signup-password"
                                        className="mb-2 block text-sm font-semibold text-[#203E62]"
                                    >
                                        Password
                                    </label>

                                    <PasswordInput
                                        id="signup-password"
                                        value={form.password}
                                        onChange={(value) =>
                                            updateField("password", value)
                                        }
                                        placeholder="At least 8 characters"
                                    />
                                </div>

                                {/* Confirm password */}
                                <div>
                                    <label
                                        htmlFor="confirm-password"
                                        className="mb-2 block text-sm font-semibold text-[#203E62]"
                                    >
                                        Confirm password
                                    </label>

                                    <PasswordInput
                                        id="confirm-password"
                                        value={form.confirmPassword}
                                        onChange={(value) =>
                                            updateField(
                                                "confirmPassword",
                                                value
                                            )
                                        }
                                        placeholder="Re-enter your password"
                                    />
                                </div>

                                {/* Terms */}
                                <div className="flex items-start gap-2">
                                    <Checkbox
                                        id="terms"
                                        checked={terms}
                                        onCheckedChange={(checked) =>
                                            setTerms(checked === true)
                                        }
                                        className="mt-0.5 data-[state=checked]:border-[#078F9E] data-[state=checked]:bg-[#078F9E]"
                                    />

                                    <label
                                        htmlFor="terms"
                                        className="cursor-pointer text-xs leading-relaxed text-slate-500"
                                    >
                                        I agree to the{" "}
                                        <Link
                                            to="/terms"
                                            className="font-semibold text-[#078F9E] hover:underline"
                                        >
                                            Terms of Service
                                        </Link>{" "}
                                        and{" "}
                                        <Link
                                            to="/privacy"
                                            className="font-semibold text-[#078F9E] hover:underline"
                                        >
                                            Privacy Policy
                                        </Link>
                                        .
                                    </label>
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="h-11 w-full rounded-lg bg-[#078F9E] font-bold text-white hover:bg-[#067984]"
                                >
                                    {loading ? (
                                        "Creating account..."
                                    ) : (
                                        <>
                                            Create account
                                            <ArrowRight className="ml-2 size-4" />
                                        </>
                                    )}
                                </Button>
                            </form>

                            <p className="mt-6 text-center text-sm text-slate-500">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-bold text-[#078F9E] hover:underline"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}