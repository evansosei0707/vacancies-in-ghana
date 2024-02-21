import { BiError } from "react-icons/bi";

interface FormErrorProps {
    message?: string;
};

export default function FormError({
    message,
}: FormErrorProps) {
    if (!message) return null;

  return (
    <div className=" bg-destructive/15 p-3 rounded-md flex items-center w-full gap-x-2  text-base text-destructive">
        <BiError className="w-4 h-4 text-destructive"  />
        <p>{message}</p>
    </div>
  )
}
