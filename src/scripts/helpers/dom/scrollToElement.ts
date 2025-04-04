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

    let startTime = 0;

    function scrolling() {
        const nowTime = new Date().getTime();
        if (startTime == 0) startTime = new Date().getTime();

        const coef = (nowTime - startTime) / duration;
        const step = distance * coef;

        window.scrollTo(0, startPosition + step);

        if (coef < 1) requestAnimationFrame(scrolling);
    }
    requestAnimationFrame(scrolling);
}
