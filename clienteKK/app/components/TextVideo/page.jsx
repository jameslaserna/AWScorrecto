import React from 'react';

const TextVideo = () => {
  return (
    <div className="pt-5 bg-[#fdf7ef] px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
            {/* Sección izquierda: Encabezado */}
            <div className="flex-1 md:pr-8">
                <div className="uppercase">
                    <span className="text-orange-500 text-sm block mb-2">restaurant</span>
                    <h2 className="text-black text-3xl md:text-4xl font-extrabold leading-tight">
                        sushi  serenity,  brought to  your plate
                    </h2>
                </div>
            </div>

            {/* Sección derecha: Descripción */}
            <div className="flex-1 pt-5">
                <p className="text-black text-base md:text-lg leading-relaxed mb-4">
                    Indulge in the flavors of our signature rolls, expertly curated to harmonize tradition and innovation. From classic favorites to modern interpretations, each roll tells its own story through an exquisite fusion of ingredients and presentation.
                </p>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    Join us on a culinary journey that transcends taste and transcends time. Discover the artistry, tradition, and passion that go into every sushi creation. Experience the magic of sushi at its finest – where every roll is a masterpiece, and every dining experience is a poetic culinary adventure.
                </p>
            </div>
        </div>

        <div className="mt-10 md:mt-14">
            <div className="relative">
                <video
                    width={100}
                    height={250}
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    controls
                    className="md:h-[400px] object-cover shadow-lg"
                >
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>
        </div>

    </div>
  );
};

export default TextVideo;