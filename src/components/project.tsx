import { Card, Button } from "solid-bootstrap";
import { For, createSignal } from "solid-js";

const Portfolio = () => {
    const [cats, setCats] = createSignal([
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ]);

    return <>
        <div class="mt-[10%] grid grid-cols-2 gap-4">
            <For each={cats()}>
                {(item, index) =>
                    <Card class="m-2 border-2 p-6 rounded-2xl bg-black">
                        <Card.Img src="/holder.svg" class="rounded-xl" />
                        <Card.Body>
                            <Card.Title class="my-4">{index()} - {item.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button class="mt-[10%] border-2 p-4 bg-black">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                }
            </For>
        </div>
    </>

}
export default Portfolio;