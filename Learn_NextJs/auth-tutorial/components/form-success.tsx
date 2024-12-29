interface FormSucessProps {
  massage?: string;
}

export const FormSucess = ({ massage }: FormSucessProps) => {
  if (!massage) return null;
  return (
    <div className="bg-green-200 rounded-md flex items-center gap-x-2 text-sm text-green-800 px-3 py-2">
      <p>SUCCESS : {massage}</p>
    </div>
  );
};
