import React from "react";

import Section from "./Section";
import CodePreview from "./CodePreview";

import LoadableContent from "../examples/ExampleLoader";

const GenericDocumentationContent = (props) => {
    const { data: {title, body} } = props;

    return (
        <>
            <h2>{title}</h2>
            {body.sections.map((section) => (
                <Section title={section.title}>
                    {section.type === "live" && (
                        <LoadableContent path={section.content} />
                    )}

                    {section.type === "doc" && section.content.map((bloc) => (
                        <>
                            {bloc.type === 'para' && (
                                <p>{bloc.body}</p>
                            )}

                            {bloc.type === 'code' && (
                                <CodePreview title={bloc.title} code={bloc.body} />
                            )}
                        </>
                    ))}
                </Section>
            ))
            }
        </>
    )
}

export default GenericDocumentationContent;
