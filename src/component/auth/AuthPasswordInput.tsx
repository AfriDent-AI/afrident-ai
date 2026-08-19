import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
}

export function PasswordInput({
  value,
  onChange,
  placeholder = "Enter your password",
  id = "password",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <LockKeyhole className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 border-slate-200 bg-white pl-10 pr-11 text-sm focus-visible:border-[#078F9E] focus-visible:ring-[#078F9E]/20"
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#078F9E]"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <EyeOff className="size-4" />
        ) : (
          <Eye className="size-4" />
        )}
      </button>
    </div>
  );
}