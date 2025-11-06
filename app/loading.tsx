export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-xl font-bold text-white">B</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">Blaze Academy</span>
        </div>

        {/* Loading Text */}
        <p className="text-lg text-gray-600 animate-pulse">جاري التحميل...</p>
      </div>
    </div>
  );
}