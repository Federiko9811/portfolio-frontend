import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {content} from '@/data/projects.json';
import BaseContainer from "@/components/containers/base-container";


const ProjectPage = () => {


    return (
        <BaseContainer>
            <div className="prose max-w-none dark:prose-invert">
                <ReactMarkdown
                    remarkPlugins={
                        [remarkGfm]
                    }
                >
                    {content}
                </ReactMarkdown>
            </div>
        </BaseContainer>
    );
};

export default ProjectPage;