'use client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

const TanStackQueryProvider = ({children}: ReactNodeChildrenProp) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default TanStackQueryProvider;