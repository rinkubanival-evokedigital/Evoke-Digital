import React from 'react';

const InsightsSection = () => {
  const data = [
    {
      title: "Real-time data insights",
      description: "Gain a competitive edge with live performance metrics and actionable market intelligence that allow for instant campaign pivots and optimization.",
      linkText: "Join for Growth",
      bgClass: "bg-[#FF8400]", // Dark Navy
      tag: "Join for Growth",
      logoSub: "by EVOKE DIGITAL"
    },
    {
      title: "The ROI Framework",
      description: "A data-driven methodology designed to eliminate wasted spend, optimize conversion paths, and transform every marketing dollar into measurable, scalable revenue.",
      linkText: "Explore Case Studies",
      bgClass: "bg-[#FF8400]", // Deep Green
      tag: "Explore Case Studies",
      logoSub: "by EVOKE DIGITAL"
    },
    {
      title: "Action-Oriented",
      description: "Stop over-analyzing and start executing with decisive, high-impact strategies designed to trigger immediate market responses and drive consistent, measurable results.",
      linkText: "Get Started Today",
      bgClass: "bg-[#FF8400]", // Golden Yellow
      tag: "Get Started Today",
      logoSub: "by EVOKE DIGITAL"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2D2D] text-center mb-12 tracking-tight">
          Everything you need to scale revenue with data-driven performance marketing.
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Graphic Header */}
              <div className={`${item.bgClass} relative h-52 rounded-[1.5rem] mb-8 flex flex-col items-center justify-center p-6 text-white overflow-hidden text-center`}>
                {item.logoSub && (
                  <span className="text-xs font-medium mb-1 opacity-90 uppercase tracking-wider">
                    {item.logoSub}
                  </span>
                )}
                <h3 className="text-2xl font-black leading-tight uppercase tracking-tighter">
                  {item.tag}
                </h3>
                
                {/* Subtle background decoration (simulating the patterns in image) */}
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow px-2">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">
                  {item.description}
                </p>
                
                {/* CTA Link */}
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-bold text-gray-900 hover:gap-3 transition-all duration-200"
                  >
                    {item.linkText} 
                    <span className="ml-2 text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;