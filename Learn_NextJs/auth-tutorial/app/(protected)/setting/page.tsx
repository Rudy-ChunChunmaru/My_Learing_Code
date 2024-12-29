import React from "react";
import { auth, signOut } from "@/auth";

type Props = {};

const SettingPage = async (props: Props) => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default SettingPage;
