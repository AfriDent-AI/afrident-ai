import {
  UserRound,
  Stethoscope,
  FlaskConical,
} from "lucide-react";

export type UserRole =
  | "patient"
  | "dentist"
  | "researcher";

interface RoleSelectorProps {
  value: UserRole;
  onChange: (role: UserRole) => void;
}

const roles = [
  {
    id: "patient" as UserRole,
    title: "Patient",
    description: "Learn & manage oral health",
    icon: UserRound,
  },
  {
    id: "dentist" as UserRole,
    title: "Dentist",
    description: "Clinical tools & support",
    icon: Stethoscope,
  },
  {
    id: "researcher" as UserRole,
    title: "Researcher",
    description: "Research & policy resources",
    icon: FlaskConical,
  },
];

export function RoleSelector({
  value,
  onChange,
}: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {roles.map((role) => {
        const Icon = role.icon;
        const selected = value === role.id;

        return (
          <button
            key={role.id}
            type="button"
            onClick={() => onChange(role.id)}
            className={`rounded-xl border p-3 text-center transition ${
              selected
                ? "border-[#078F9E] bg-[#EAF9FB] shadow-sm"
                : "border-slate-200 bg-white hover:border-[#9EDDE4]"
            }`}
          >
            <div
              className={`mx-auto mb-2 flex size-9 items-center justify-center rounded-lg ${
                selected
                  ? "bg-[#078F9E] text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              <Icon className="size-4" />
            </div>

            <p
              className={`text-xs font-bold ${
                selected
                  ? "text-[#078F9E]"
                  : "text-[#203E62]"
              }`}
            >
              {role.title}
            </p>

            <p className="mt-1 text-[9px] leading-tight text-slate-500">
              {role.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}