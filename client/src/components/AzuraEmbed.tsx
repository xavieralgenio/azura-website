export default function AzuraEmbed() {
  return (
    <section id="azura-embed" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Try Azura AI Now
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Chat with Azura AI directly to see how it works for your resort
          </p>
        </div>

        {/* Embed Space */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-blue-300 p-12 min-h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-slate-600 text-lg mb-4">
                Azura AI Chat Widget
              </p>
              <p className="text-slate-500 text-sm">
                Your Azura AI embed code will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
