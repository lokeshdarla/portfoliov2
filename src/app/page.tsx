'use client'
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { SelectedWorks } from "@/components/SelectedWorks";
import { Main } from "@/components/MainSection";
import Loading from "@/components/Loading";
import { ThemeProvider } from "@/context/ThemeContext";

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ThemeProvider>
        <div className="h-screen bg-white dark:bg-black flex items-center justify-center border-none">
          <Loading />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <Layout>
      <Main />
      <SelectedWorks />
    </Layout>
  );
}

export default Page;
