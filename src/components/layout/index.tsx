import Header from "./header";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default LayoutWrapper;
