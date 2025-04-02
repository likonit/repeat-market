import smoothScrollTo from "@/scripts/helpers/dom/scrollToElement";

export default function Button() {
    return (
        <button
            onClick={() => {
                const element = document.getElementById("principles");
                if (element) smoothScrollTo(element);
            }}
        >
            Наши принципы
        </button>
    );
}
