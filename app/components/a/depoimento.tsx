export default function Depoimento() {
  const videos = [
    "U-qqzVA-vOw",
    "Ex1MXOfdu8M",
  ];

  return (
    <section className="text-white py-12 px-6 font-montserrat">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          
          <h2 className="text-3xl lg:text-6xl font-bold">
            O que quem aplicou a <span className="gradient-text"> Metodologia Ari</span> fala:
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32">
          {videos.map((id) => (
            <div
              key={id}
              className="relative mx-auto w-full max-w-xs"
              style={{ aspectRatio: "9/16" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="Depoimento"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-16">
            Depoimentos em áudio
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <audio controls className="w-full" style={{ accentColor: "#ecce83" }}>
              <source src="/audio/audio.ogg" type="audio/ogg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <audio controls className="w-full" style={{ accentColor: "#ecce83" }}>
              <source src="/audio/audio2.mpeg" type="audio/mpeg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>

      </div>
    </section>
  );
}
