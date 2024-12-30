import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export const ErrorCard = () => {
  return (
    <Card className="w-[100%] shadow-md">
      <CardHeader>
        <Header lable="ops some thing went wrong !!!" />
      </CardHeader>
      <CardFooter>
        <BackButton lable="back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};
