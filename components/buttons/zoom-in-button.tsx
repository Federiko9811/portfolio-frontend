import React, {ReactElement} from 'react';
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";

interface ZoomInButtonProps {
    text: string;
    icon?: ReactElement;
    variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
    className?: string;
}

const ZoomInButton = ({text, icon, variant, className}: ZoomInButtonProps) => {
    return (
        <div className={className}>
            <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
            >
                <Button
                    variant={variant}
                    className={cn(className)}
                >
                    {text}
                    {icon}
                </Button>
            </motion.div>
        </div>
    );
};

export default ZoomInButton;