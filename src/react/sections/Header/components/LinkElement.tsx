import smoothScrollTo from "@/scripts/helpers/dom/scrollToElement";

export default function Link({ name, link }: { name: string; link: string }) {
    return (
        <a
            onClick={() => {
                const element = document.getElementById(link.split("#")[1]);
                if (element) smoothScrollTo(element);
            }}
        >
            {name}
        </a>
    );
}
