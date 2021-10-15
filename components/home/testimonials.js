import Slider from "../slider/slider";
import Image from "../image";

const Testimonials = ({ testimonials }) => {

    const children = testimonials.map((testimonial) => {
        return (
            <div className="relative lg:flex lg:items-center" key={testimonial.slug}>
                <div className="relative">
                    <blockquote className="relative rounded-xl border-gray-300 bg-white p-6">
                        <div className="leading-relaxed">
                            <p>
                                {testimonial.testimonial}
                            </p>
                        </div>
                        <footer className="mt-8">
                            <div className="flex">
                                <div className="flex-shrink-0 lg:hidden">
                                    <Image image={testimonial.image} className="h-12 w-12 rounded-full" />
                                </div>
                                <div className="ml-4 lg:ml-0">
                                    <div className="text-base font-medium">{testimonial.title}</div>
                                    <div className="text-base font-medium text-secondary">{testimonial.designation}</div>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
                <div className="hidden lg:block lg:flex-shrink-0 lg:ml-10">
                    <Image image={testimonial.image} className="h-64 w-64 rounded-full xl:h-80 xl:w-80" />
                </div>
            </div>
        );
    });

    return (
        <section className="bg-gray-100 text-primary">
            <div className="max-w-7xl mx-auto py-16 sm:py-32 px-8 sm:px-0">
                <Slider autoplay autoPlayInterval={6000}>
                    {children}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;