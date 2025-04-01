import smoothScrollTo from "@/scripts/helpers/dom/scrollToElement";

export default function Link({ name, link }: { name: string; link: string }) {
    return (
        <a
            href={link}
            onClick={() => {
                const element = document.getElementById(link.split("#")[1]);
                if (element) element.scrollIntoView();
            }}
        >
            {name}
        </a>
    );
}
