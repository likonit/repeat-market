export default function useThrottle(time: number = 100) {
    let lastTimeCalled = new Date().getTime();

    return function (_callback: (...args: any) => any) {
        const currentTimeCalled = new Date().getTime();
        if (currentTimeCalled - lastTimeCalled > time) {
            lastTimeCalled = currentTimeCalled;
            return _callback();
        }
    };
}
