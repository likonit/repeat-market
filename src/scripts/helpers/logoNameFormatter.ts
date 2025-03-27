export default function logoNameFormatter(
    slug: string,
    symbol: string
): string {
    const slugFormatted = slug
        .split(" ")
        .map((item) => item.toLowerCase())
        .join("-");
    return `https://cryptologos.cc/logos/${slugFormatted}-${symbol.toLowerCase()}-logo.svg`;
}
