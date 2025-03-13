import BaseContainer from "@/components/containers/base-container";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <BaseContainer>
            <div
                className={"animate-wiggle animate-twice animate-ease-out animate-alternate"}
            >
                <Button>
                    Click me
                </Button>
                <Button
                    variant={"secondary"}
                >
                    Click me
                </Button>
            </div>
        </BaseContainer>
    );
}
