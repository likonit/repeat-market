export default function smoothScrollTo(
    element: HTMLElement,
    duration: number = 600
) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;

    let start: number | null = null;

    function animationStep(timestamp: number) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) requestAnimationFrame(animationStep);
    }

    requestAnimationFrame(animationStep);
}
