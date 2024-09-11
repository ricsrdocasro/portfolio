import { TypeAnimation } from 'react-type-animation';
import foto from "../assets/foto3.png"

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="pb-16 pl-16 text-2xl font-thin tracking-tight lg:mt-16 lg:text-4xl">
                            <TypeAnimation
                                sequence={[
                                  // Same substring at the start will only be typed out once, initially
                                  'Ricardo de Castro',
                                  1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                        <span className="pb-16 pl-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Engenheiro eletrônico
                        </span>
                        <p className="pb-16 pl-16 font-light tracking-tighter justify-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et mauris vitae neque interdum sollicitudin. Pellentesque tempus ultricies arcu nec posuere. Ut dolor lectus, luctus in vehicula in, rhoncus sit amet dolor. Sed ligula sapien, lobortis quis felis quis, hendrerit sagittis arcu. Aliquam feugiat condimentum tempor. Duis semper massa eu tellus accumsan, sed accumsan ipsum viverra. Nam sit amet nulla est. Aliquam luctus, lectus nec bibendum sodales, ipsum urna ullamcorper urna, sit amet elementum mauris nulla id nisi. Vivamus feugiat orci vitae placerat rhoncus. Nam eu mi euismod, accumsan turpis sit amet, faucibus mauris. Vestibulum tempor at leo vitae tempus. Donec mauris sapien, varius a neque in, tincidunt eleifend enim. Vestibulum pretium mi quis ultricies venenatis.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img alt="daisy" src={ foto } className="rounded-lg transition hover:scale-110 hover:blur-sm" />
                    </div>
                </div>
            </div>
        </div>

        

    )
}

export default Hero
