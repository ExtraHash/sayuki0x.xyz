import { ExternalLink } from "react-feather";

export function ProjectCard(props: {
    name: string;
    url: string;
    backgroundColor: string;
    image: string;
    externalLinkColor: string;
    dates: string;
    description: string;
    imageSize?: string;
}) {
    return (
        <div
            className="rounded bg-slate-100 dark:bg-slate-900 align-middle outline outline-slate-100 dark:outline-slate-900"
            style={{}}
        >
            <a
                href={props.url}
                target="_blank"
                rel="noreferrer"
                className="float-right cursor-pointer mt-1 mr-1"
            >
                <ExternalLink color={props.externalLinkColor} />
            </a>
            <div
                className="py-8"
                style={{
                    backgroundColor: props.backgroundColor,
                    borderRadius: "0.25rem 0.25rem 0rem 0rem",
                }}
            >
                <div className="px-6">
                    <img
                        src={props.image}
                        className="mx-auto"
                        alt={`${props.name} logo`}
                        style={{
                            height: `${props.imageSize ?? "40px"}`,
                            width: "auto",
                        }}
                    />
                </div>
            </div>
            <div className="p-6">
                <p className="text-xs font-bold">{props.dates}</p>
                <p className="text-xs mt-2">{props.description}</p>
            </div>
        </div>
    );
}
