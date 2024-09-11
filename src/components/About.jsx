import React from 'react';
import foto from '../assets/foto3.png';

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                Sobre mim
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={foto} alt="foto" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et mauris vitae neque interdum sollicitudin. Pellentesque tempus ultricies arcu nec posuere. Ut dolor lectus, luctus in vehicula in, rhoncus sit amet dolor. Sed ligula sapien, lobortis quis felis quis, hendrerit sagittis arcu. Aliquam feugiat condimentum tempor. Duis semper massa eu tellus accumsan, sed accumsan ipsum viverra. Nam sit amet nulla est. Aliquam luctus, lectus nec bibendum sodales, ipsum urna ullamcorper urna, sit amet elementum mauris nulla id nisi. Vivamus feugiat orci vitae placerat rhoncus. Nam eu mi euismod, accumsan turpis sit amet, faucibus mauris. Vestibulum tempor at leo vitae tempus. Donec mauris sapien, varius a neque in, tincidunt eleifend enim. Vestibulum pretium mi quis ultricies venenatis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
