export default function smoothScrollTo(
    element: HTMLElement,
    options?: {
        duration: number;
        correction: number;
    }
) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance =
        targetPosition - startPosition + (options?.correction ?? 0);
    const duration = options?.duration ?? 400;

    const FPS = 1000 / 90;

    function scrolling(i: number) {
        const step = distance / (duration / FPS);
        window.scrollTo(0, startPosition + step * i);

        if (i < duration / FPS)
            setTimeout(() => {
                scrolling(i + 1);
            }, FPS);
    }

    scrolling(1);
}
