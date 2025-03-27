export default function MenuElement({
    name,
    link,
}: {
    name: string;
    link: string;
}) {
    return <a href={link}>{name}</a>;
}
