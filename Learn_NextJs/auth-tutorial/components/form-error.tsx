interface FormErrorProps {
  massage?: string;
}

export const FormError = ({ massage }: FormErrorProps) => {
  if (!massage) return null;
  return (
    <div className="bg-destructive/15 rounded-md flex items-center gap-x-2 text-sm text-destructive px-3 py-2">
      <p>FAIL : {massage}</p>
    </div>
  );
};
