import BaseContainer from "@/components/containers/base-container";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <BaseContainer>
            <div>
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
