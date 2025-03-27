export default function ChangeCoinPrice({ percent }: { percent: number }) {
    return (
        <div>
            <span>▼</span>
            <span>{percent}</span>
        </div>
    );
}
