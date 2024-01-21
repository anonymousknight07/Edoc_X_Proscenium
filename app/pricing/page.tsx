import PricingCards from "@/components/PricingCards";

function page() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-base font-semibold leading-7 text-yellow-600">Subscription Plans</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Discover the perfect pricing that caters to everyone, {" "}
                <br className="hidden sm:inline lg:hidden"/>
                regardless of who you are.
                </p>
            </div>
            <div className="relative mt-6">
                <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                We have crafted plans to perfectly align with your needs.
                </p>
                <svg
                viewBox="0 0 1208 1024"
                className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
                    <ellipse 
                    cx={604}
                    cy={512}
                    fill="url(#radial-gradient-pricing)"
                    rx={604}
                    ry={512}/>
                    <defs>
                        <radialGradient id="radial-gradient-pricing">
                            <stop stopColor="#f1ca3e" />
                            <stop offset={1} stopColor=" #ee0c6a"/> 
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>

        <div className="flow-root pb-24 sm:pb-32">
            <div className="-mt-80">
                <PricingCards redirect={true}/>
            </div>
        </div>
    </div>
  );
}

export default page;