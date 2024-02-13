import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  // useEffect(() => {
  //   // Redirect to the home route ("/") for any invalid routes
  //   router.push("/");
  // }, []);

  return null; // This is an empty component, it won't be visible to the user
}
