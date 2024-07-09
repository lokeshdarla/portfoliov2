
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from 'react';

export default function BreadcrumbUtil() {
  const pathname = usePathname()
  const pathnames = pathname.split('/').filter((x) => x);


  if (pathnames.length == 0) {
    return <>
    </>
  }

  return (
    <div className='flex items-center justify-center dark:bg-black'>
      <Breadcrumb >
        <BreadcrumbList >
          <BreadcrumbItem>
            <Link href="/" passHref>
              <BreadcrumbLink className='dark:text-white'>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          {
            pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              return (
                <React.Fragment key={to}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {index === pathnames.length - 1 ? (
                      <BreadcrumbPage className='dark:text-gray-50'>{value.charAt(0).toUpperCase() + value.slice(1)}</BreadcrumbPage>
                    ) : (
                      <Link href={to} passHref>
                        <BreadcrumbLink className='dark:text-gray-50'>{value.charAt(0).toUpperCase() + value.slice(1)}</BreadcrumbLink>
                      </Link>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })
          }
        </BreadcrumbList>
      </Breadcrumb>
    </div>

  );
}
