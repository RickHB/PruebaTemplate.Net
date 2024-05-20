import React from 'react';

export default function Principal() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Daimler Truck
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Impulsando el Futuro del Transporte
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Daimler Truck es líder mundial en el sector de vehículos comerciales. Nuestros innovadores camiones, autobuses y servicios marcan la pauta en la movilidad sostenible y eficiente.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-100">
                  Innovación Tecnológica
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  Impulsamos el desarrollo de tecnologías punteras como la conducción autónoma, la electromovilidad y la conectividad para mejorar la eficiencia y la sostenibilidad en el transporte.
                </dd>
              </div>
            </div>
            {/* Añadir más características */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-2a5 5 0 110 10 5 5 0 010-10zm0 2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-100">
                  Sostenibilidad
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  Nos comprometemos con la reducción de emisiones y la creación de un futuro más verde mediante la innovación en tecnologías sostenibles.
                </dd>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-100">
                  Conectividad
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  Implementamos soluciones conectadas que mejoran la seguridad y la eficiencia operativa a través de la telemetría avanzada y la gestión de flotas.
                </dd>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-2a5 5 0 110 10 5 5 0 010-10zm0 2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-100">
                  Valores
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  Implementamos soluciones conectadas que mejoran la seguridad y la eficiencia operativa a través de la telemetría avanzada y la gestión de flotas.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-10">
      <div className="mt-10 flex justify-center">
  <img
    src="https://th.bing.com/th/id/R.b55fb843df9230a5820c8c0c85b316d2?rik=f%2fgiVYyk%2bjg3cA&riu=http%3a%2f%2fs1.cdn.autoevolution.com%2fimages%2fnews%2fdaimler-trucks-north-america-presents-the-all-new-freightliner-cascadia-its-mo-110887_1.jpg&ehk=DXDCD7gkb9ihd88TA7JTCbk3XJ6xoCbM%2fcwRDx34QtU%3d&risl=&pid=ImgRaw&r="
    alt="Daimler Truck"
    className="w-full h-auto object-cover"
  />
</div>

</div>

    </div>
  );
}
