import React from 'react'


interface ServicesProps {
services: any[];
}

export const Services: React.FC<ServicesProps> = ({services}) => {
        return (
                <section id="service" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base lg:text-lg">
              Comprehensive frontend development services to bring your digital vision to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className={`group p-8 lg:p-10 bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl`}>
                <div className={`w-16 h-16 ${service.iconColor} bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm lg:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        );
}