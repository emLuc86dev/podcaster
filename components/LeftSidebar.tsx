"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants/index";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const LeftSidebar = () => {
  const pathname = usePathname();
  const route = useRouter();
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image src="/icons/logo.svg" alt="Logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podcastr
          </h1>
        </Link>
        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);
          return (
            <Link
              key={`${route}-${label}`}
              href={route}
              className={cn(
                "flex gap-3 cursor-pointer items-center py-4 max-lg:px4 justify-center lg:justify-start",
                {
                   'bg-nav-focus border-r-4 border-orange-1' :isActive
                }
              )}
            >
              <Image src={imgURL} alt="Logo" width={23} height={27} />
              <h1 className="text-24 font-extrabold text-white max-lg:hidden">
                {label}
              </h1>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
