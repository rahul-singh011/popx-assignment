export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-4">

      <div className="w-[375px] h-[812px] bg-white shadow-2xl rounded-[32px] overflow-hidden border border-gray-200 flex flex-col">
        {children}
      </div>

    </div>
  );
}