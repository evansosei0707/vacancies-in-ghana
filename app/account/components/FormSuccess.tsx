import { GoCheckCircle } from "react-icons/go";

interface FormSuccessProps {
    message?: string;
};

export default function FormSuccess({
    message,
}: FormSuccessProps) {
    if (!message) return null;

  return (
    <div className=" bg-emerald-500/15 p-3 rounded-md w-full flex items-center gap-x-2  text-base text-emerald-500">
        <GoCheckCircle className="w-4 h-4 text-emerald"  />
        <p>{message}</p>
    </div>
  )
}
