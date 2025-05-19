"use client";

import { Suspense } from "react";
import UpdatePrompt from "@components/shared/UpdatePrompt";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
};

export default Page;