import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton, DotButton } from "./slider-buttons";
import { useRecursiveTimeout } from "./user-recurssive-timeout";
import useEmblaCarousel from "embla-carousel-react";

const Slider = ({ children, autoPlayInterval, arrowButtons }) => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const autoplay = useCallback(() => {
        if (!embla) return;
        if (embla.canScrollNext()) {
            embla.scrollNext();
        } else {
            embla.scrollTo(0);
        }
    }, [embla]);

    const { play, stop } = useRecursiveTimeout(autoplay, autoPlayInterval);

    const scrollNext = useCallback(() => {
        if (!embla) return;
        embla.scrollNext();
        stop();
    }, [embla, stop]);

    const scrollPrev = useCallback(() => {
        if (!embla) return;
        embla.scrollPrev();
        stop();
    }, [embla, stop]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
        embla.on("pointerDown", stop);
    }, [embla, setScrollSnaps, onSelect, stop]);

    useEffect(() => {
        play();
    }, [play]);

    return (
        <>
        <div className="embla overflow-hidden">
            <div className="embla__viewport" ref={viewportRef}>
                <div className="embla__container flex">
                    {children.map((child, index) => (
                        <div className="embla__slide" key={index} style={{flex: '0 0 100%'}}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            {arrowButtons && (
                <>
                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                </>
            )}
        </div>
            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default Slider;
