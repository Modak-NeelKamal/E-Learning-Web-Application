"use client";
import {
  SignInButton,
  SignOutButton,
  useUser,
  useClerk,
  UserButton,
} from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { user } = useUser(); // Clerk hook to get user info
  const clerk = useClerk(); // Clerk hook to get Clerk methods
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  // Handle sign out and redirect
  const handleSignOut = async () => {
    await clerk.signOut(); // Call sign out method
    router.push("/"); // Redirect to homepage
  };
  const handleExit = () => {
    if (isTeacherPage || isCoursePage) {
      // If on a teacher or player page, navigate back to a safe page (e.g., homepage)
      router.push("/");
    } else {
      // Sign out if not on teacher/player page (or if user clicks Sign Out)
      handleSignOut();
    }
  };

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block text-black">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {user ? (
          <>
            <h3 className="mt-2 text-black">Welcome {user.firstName} ! </h3>
            {isTeacherPage || isCoursePage ? (
              <Button onClick={handleExit}>
                <LogOut className="h-4 w-4 mr-2" />
                Exit
              </Button>
            ) : (
              <Link href="/teacher/courses">
                <Button size="sm">Teacher Mode</Button>
              </Link>
            )}
            <UserButton />
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </>
  );
};
