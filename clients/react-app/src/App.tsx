// import "./App.less";
import { Button } from "@cool-monorepo/antd-ui";
import "antd/dist/antd.less";

const Application = (): JSX.Element => (
    <>
        <Button type="dashed">Hola gdfd boton</Button>
        <Button.Group>
            <Button href="/lala">Hola gdfd boton</Button>
            <Button>Hola gdfd boton</Button>
        </Button.Group>
        <Button>Hola gdfd boton</Button>
    </>
);

export default Application;
